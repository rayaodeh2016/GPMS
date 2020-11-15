import React from 'react';
import Logo1 from '../../Image/img/login.svg';
import Logo2 from '../../Image/img/regester (2).svg';
import SignIn from '../../Leading_page/login/sign-in/sign-in-form';
import SignUp from '../../Leading_page/login/sign-up/sign-up-form';
import 'react-responsive-modal/styles.css';
import './logins.css';

export class Login extends React.Component {
 
  onButtonClick = () => {
    this.setState({ hasOpen: true });
  };
  onCloseModal = () => {
    this.setState({ hasOpen: false });
  };
    render() {
   
    return (
<div className="LogIn_container" >
        <div className="forms-container">
          <div className="signin-signup">
           
             <SignIn />
             <SignUp />

          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="title1">
              <h3>New here ?</h3>
              <p>
                Don't worry, click here to create a new account to log onto the site
            </p>
              <button className="btn1 transparent" id="sign-up-btn" onClick={() => {
                const sign_in_btn = document.querySelector("#sign-in-btn");
                const container = document.querySelector(".LogIn_container");

                
                  container.classList.add("sign-up-mode");
              sign_in_btn.addEventListener("click", () => {
                  container.classList.remove("sign-up-mode");
                });
              }}
              >
                Sign up
            </button>
            </div>
            <img src={Logo1} class="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="title1">
              <h3>One of us ?</h3>
              <p>
                If you already have an account, click here to Singin
            </p>
              <button className="btn1 transparent" id="sign-in-btn" >
                Sign in
            </button>
            </div>
            <img src={Logo2} className="image" alt="" />
          </div>
        </div>

      </div>

    );
  }
}
export default Login;