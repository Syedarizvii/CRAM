import React from 'react';
import { MDBBtn, MDBCard, MDBInput } from 'mdbreact';
import axios from 'axios';
import Otp from './OtpForm';
import Navbar2 from "../layout/Navbar2";

function isNumeric(n) {
    return !isNaN(parseInt(n)) && isFinite(n);
}

export default class OTP extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '',
            pno: '',
            otpShow: false,
            otp: ''
        };
    }
    _getCode = async () => {
        const e = this.state.code + this.state.pno;
        await axios.get("http://localhost:5000/api/verify/getcode", {
            params: {
                phonenumber: e,
                channel: 'sms'
            }
        })
            .then(response => alert("Code Has Been Sent.")
            )
            .catch(err => console.log(err));
    };

    _verifyCode = async () => {
        const e = this.state.code + this.state.pno;
        await axios.get("http://localhost:5000/api/verify/verifycode", {
            params: {
                phonenumber: e,
                code: this.state.otp
            }
        })
            .then(response => {
                if (response.data.status === "approved"){
                    window.location.href = "http://localhost:3000/otpsuccessfull";}
                    // if(!alert("Verification Successful...Now you can register your account.")) 
                    //     window.location.href = "http://localhost:3000/register";
                    // }
                else
                    { alert ("Code is Invalid. Please Enter the Code again.")}
            }
            )
    }
    render() {
        return (
            <div>
                <Navbar2 />
                <div style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '140vh',
                    backgroundImage: 'require("../client/src/Images/bg-blue.jpg")'
                }}
                className="otp-div"
                >
                    <MDBCard className=" px-3 otp-card" >
                        <div className="d-flex justify-content-center ">
                            <span className="otp-Icon my-4"><i class="fas fa-user-edit" ></i></span>
                            {/* <img src={require("../../Images/icon2.jpg")} className="OTP-Icon" alt="img"/> */}
                        </div>
                        {!this.state.otpShow ? <div>
                            <h3 style={{ paddingTop: "25vh", textAlign: "center", fontSize: "40px", fontWeight: "bold", letterSpacing: "2px" }} className="blue-text mt-3">Verify your Phone Number</h3>
                            <div className="heading-line">
                                <div className="heading-line-dot"></div>
                            </div>
                            <h5 style={{ marginTop: "7vh", color: '#00247E', fontWeight: "bold", textAlign: 'center', fontSize: "25px" }}>Enter Your Phone Number : <br /> <span>(92 1234567890)</span></h5>
                        </div> : <div><h3 style={{  paddingTop: "25vh", color: '#00247E', fontWeight: "bold", textAlign: 'center', fontSize: "35px" }} classname="mt-3">Enter the Code</h3> <div className="heading-line"><div className="heading-line-dot"></div> </div> </div>}
                        
                        <div>
                            {!this.state.otpShow ? <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 'auto', justifyContent: 'center' }}>
                                <div style={{ alignItems: 'flex-end', justifyContent: 'center', display: 'flex', width: 60 }}>
                                    <MDBInput id="code" size="lg" label="Code" style={{ borderBottom: "2px solid blue" }} value={this.state.code}
                                        onChange={e => {
                                            this.setState({ code: e.target.value });
                                        }} />
                                </div>
                                <div>
                                    <MDBInput id="phone" size="lg" label="Phone" color="secondary" value={this.state.pno} style={{ borderBottom: "2px solid blue" }}
                                        onChange={e => {
                                            if ((e.target.value[e.target.value.length - 1] >= '0' && e.target.value[e.target.value.length - 1] <= '9') || !e.target.value) {
                                                this.setState({ pno: e.target.value });
                                            }
                                        }} />
                                </div>
                            </div> : <Otp otp={this.state.otp} setOtp={val => this.setState({ otp: val })} />}
                            <div className="d-flex justify-content-center my-5">
                                <button
                                    variant="contained"
                                    disabled={(this.state.pno.length !== 10) || (this.state.code === null) || !isNumeric(this.state.pno) || (this.state.otpShow && this.state.otp.length !== 6)}
                                    style={{
                                        background: "#00247E",
                                        width:"50vh",
                                        lineHeight: "8vh",
                                        border:"none",
                                        letterSpacing:"2px",
                                        fontSize: "25px",
                                        color:"white"
                                    }}
                                    onClick={() => {
                                        if (this.state.otpShow) {
                                            this._verifyCode();
                                        } else {
                                            this._getCode();
                                            this.setState({ otpShow: true });
                                        }
                                    }}>
                                    Submit
                            </button>
                            </div>
                            {this.state.otpShow ? <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: 5, color: "#00247E", fontWeight: "bold", fontSize: "23px" }} className="my-5 resend-text">
                                Didn't receive an OTP? <MDBBtn onClick={() => this._getCode()} className="blue-gradient-for-resend blue-text" >Resend OTP</MDBBtn>
                            </div> : null}
                        </div>
                    </MDBCard>
                </div>
            </div>
        );
    }
}












// import React from 'react';
// import {
//     Paper,
//     TextField,
//     Button,
//     IconButton
// } from '@material-ui/core';
// //import ArrowBackIcon from '@material-ui/icons/ArrowBack';
// import axios from 'axios';

// import Otp from './OtpForm';

// function isNumeric(n) {
//     return !isNaN(parseInt(n)) && isFinite(n);
// }

// export default class OTP extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             code: '',
//             pno: '',
//             otpShow: false,
//             otp: ''
//         };
//     }

//     _getCode = async() => {
//         const e = this.state.code+this.state.pno;
//         await axios.get("http://localhost:5000/verify/getcode", {
//             params: {
//                 phonenumber: e,
//                 channel: 'sms'
//             }
//         })
//         .then(data => console.log(data))
//         .catch(err => console.log(err));
//     };

//     _verifyCode = async () => {
//         const e = this.state.code+this.state.pno;
//         await axios.get("http://localhost:5000/verify/verifycode", {
//             params: {
//                 phonenumber: e,
//                 code: this.state.otp
//             }
//         })
//         .then(data => console.log(data))
//         .catch(err => console.log(err));
//     }
  
//     render(){
//         return(
//             <div style={{
//                 flex: 1, 
//                 display: 'flex', 
//                 alignItems: 'center', 
//                 justifyContent: 'center', 
//                 backgroundColor: 'rgba(160, 160, 160, 0.2)',
//                 height: '100vh'
//             }}>
//                 <Paper elevation={4} style={{ padding: 20, width: 300, marginBottom: 60}}>
//                     {!this.state.otpShow }
//                     {!this.state.otpShow ? <h3>Enter your Phone Number</h3> : <h3>Enter the OTP</h3> }
//                     {this.state.otpShow ? <p>A One Time Password has been sent to your phone number for verification puposes.</p> : null}
//                     <div>
//                         {!this.state.otpShow ? <div style={{display: 'flex', flexDirection: 'row', marginLeft: 'auto', justifyContent: 'space-around'}}>
//                             <div style={{alignItems: 'flex-end', justifyContent: 'center', display: 'flex', marginRight: 10, width: 60}}>
//                                 <TextField id="code" label="Code" color="secondary" value={this.state.code} onChange={e => {
//                                     this.setState({code: e.target.value});
//                                 }}/>
//                             </div>
//                             <div>
//                                 <TextField id="phone" label="Phone" color="secondary" value={this.state.pno} 
//                                 onChange={e => {
//                                     if((e.target.value[e.target.value.length-1]>='0' && e.target.value[e.target.value.length-1]<='9') || !e.target.value) {
//                                         this.setState({pno: e.target.value});
//                                     }
//                                 }}/>
//                             </div>
//                         </div> : <Otp otp={this.state.otp} setOtp={val => this.setState({otp: val})} />}
//                         {this.state.otpShow ? <div style={{width: '100%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: 5}}>
//                             Didn't receive an OTP? <Button onClick={() => this._getCode()} color="primary" style={{textTransform: 'none', fontSize: 15}}>Resend OTP</Button>
//                         </div> : null }
//                         <div style={{display: 'flex', flexDirection: 'row', marginTop: 20}}>
//                             <Button 
//                                 variant="contained" 
//                                 disabled={(this.state.pno.length!==10) || (this.state.code===null) || !isNumeric(this.state.pno) || (this.state.otpShow && this.state.otp.length!==6)} 
//                                 color="secondary" 
//                                 style={{ 
//                                     color: 'white', 
//                                     marginLeft: 'auto', 
//                                     textTransform: 'none'
//                                 }}
//                                 onClick={() => {
//                                     if(this.state.otpShow) {
//                                         this._verifyCode();
//                                     } else {
//                                         this._getCode();
//                                         this.setState({otpShow: true});
//                                     }
//                                 }}>
//                                 Verify
//                             </Button>
//                         </div>
//                         {!this.state.otpShow ? <p>By tapping Verify an SMS may be sent. Message & data rates may apply.</p> : null}
//                         <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10}}>
//                             <a href='#' style={{textDecoration: 'none', fontSize: 14}}>Terms of service</a>
//                             <a href='#' style={{textDecoration: 'none', fontSize: 14, marginLeft: 10}}>User agreement</a>
//                         </div>
//                     </div>
//                 </Paper>
//             </div>
//         );
//     }
// }

