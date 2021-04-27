const SERVICE_SID = "VA93d7acc82c0c82ba04a7e3fccef560bf";
const ACCOUNT_SID = "AC7ef7e43edfa60c14e311066d7345eee3";
const AUTH_TOKEN = "e2d324c1d8e55a56c579bec6d8a0ca34";

const client = require("twilio")(ACCOUNT_SID, AUTH_TOKEN);
//get code
exports.getCode = async (req, res) => {
  client.verify
    .services(SERVICE_SID)
    .verifications.create({
      to: `+${req.query.phonenumber}`,
      channel: "sms",
    })
    .then((data) => {
      res.status(200).send(data);
    });
};
//verify code
exports.verifyCode = async (req, res) => {
  client.verify
    .services(SERVICE_SID)
    .verificationChecks.create({
      to: `+${req.query.phonenumber}`,
      code: req.query.code,
    })
    .then((data) => {
      // res.redirect('/login');
      res.status(200).send(data);

      //e"});
    });
};
