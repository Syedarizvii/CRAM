const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require('path');
const users = require("./routes/api/users");
const verify = require("./routes/api/verify");
const Crime = require("./routes/api/addcrime")
const cors = require('cors');


const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

app.use(cors());
// Connect to MongoDB
mongoose
  .connect( process.env.MONGODB_URI ||
    db,
    { useUnifiedTopology: true ,
      useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));
  // Passport middleware
app.use(passport.initialize());


// Passport config
require("./config/passport")(passport);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"

  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// Routes
app.use("/api/users", users);
//login (phoneno,channel)
// app.use("/api/verify", verification);
//verify(phoneno,code)
//Import Route
app.use('/api/verify', verify);

app.use(express.static('./public/uploads'))

app.use('/api/addCrime', Crime );
app.use('/api/viewcrimes', Crime );
app.use('/api/UpdateCaseStatus',Crime);
app.use('/api/edit-status',Crime);
const port = process.env.PORT || 5000;

if(process.env.NODE_ENV === 'production') {

  app.use(express.static('client/build'));
  app.get('*',(req,res) => {
    res.sendFile(path.json(__dirname,'client' ,'build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
