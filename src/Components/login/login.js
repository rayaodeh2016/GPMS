import React from 'react';
import Logo1 from '../../Components/img/login.svg';
import Logo2 from '../../Components/img/regester (2).svg';

import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import './logins.css'; 



export class Login extends React.Component {
  state = {

    hasOpen: false

  }
  onButtonClick = () => {
    this.setState({ hasOpen: true });
  };
  onCloseModal = () => {
    this.setState({ hasOpen: false });
  };
  constructor(props) {
    super(props);
    

  }
  render() {
    const { hasOpen } = this.state;
    return (

<div class="container" >
      <div class="forms-container">
        <div class="signin-signup">
            <form action="#" class="sign-in-form">
              <h2 class="title">Sign in</h2>
              <div class="input-field">
                <i class="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" value="Login" class="btn solid" />
              <br />
              <div>
                <a onClick={this.onButtonClick} style={{ color:" rgb(7, 212, 212)",cursor:"pointer"  }}>did you forget password ?</a>
                <Modal open={hasOpen} onClose={this.onCloseModal} center>
                  <p class="social-text">  <form action="#" class="sign-in-form">
              <h2 class="title" style={{textAlign:'center' }}>Reset Password</h2>
              
              <div class="input-field">
                <i class="fas fa-envelope"></i>
                <input type="email" placeholder="Email" />
              </div>
              
              <input type="submit" class="btn" value="Submit"/>

              </form>
             </p>
             
                </Modal>
                 </div>

             
            </form>


            <form action="#" class="sign-up-form">
              <h2 class="title">Sign up</h2>
              <div class="input-field">
                <i class="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div class="input-field">
                <i class="fas fa-envelope"></i>
                <input type="email" placeholder="Email" />
              </div>
              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="re-Password" />
              </div>

              <input type="submit" class="btn" value="Sign up" />

            </form>


          </div>
        </div>

        <div class="panels-container">
          <div class="panel left-panel">
            <div class="content">
              <h3>New here ?</h3>
              <p>
                Don't worry, click here to create a new account to log onto the site
            </p>
              <button className="btn transparent"  id="sign-up-btn" onClick={() => {
                const sign_in_btn = document.querySelector("#sign-in-btn");
                const sign_up_btn = document.querySelector("#sign-up-btn");
                const container = document.querySelector(".container");

                sign_up_btn.addEventListener("click", () => {
                  container.classList.add("sign-up-mode");
                });

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
          <div class="panel right-panel">
            <div class="content">
              <h3>One of us ?</h3>
              <p>
                If you already have an account, click here to Singin
            </p>
              <button class="btn transparent" id="sign-in-btn" >
                Sign in
            </button>
            </div>
            <img src={Logo2} class="image" alt="" />
          </div>
        </div>

      </div>

    );
  }
}


export default Login;