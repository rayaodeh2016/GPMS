import React from 'react';
import { Modal } from 'react-responsive-modal';
import {Link } from 'react-router-dom';
import {connect} from 'react-redux';
export class Sign_in extends React.Component 
{
    state = {
        hasOpen: false
      }

    onButtonClick = () => {
        this.setState({ hasOpen: true });
      };
      onCloseModal = () => {
        this.setState({ hasOpen: false });
      };
    
      render()
    {
        const { hasOpen } = this.state;
   return (
    <form action="#" className="sign-in-form">
    <h2 className="title">Sign in</h2>
    <div className="input-field">
      <i className="fas fa-user"></i>
      <input type="text" placeholder="Username" />
    </div>
    <div className="input-field">
      <i className="fas fa-lock"></i>
      <input type="password" placeholder="Password" />
    </div>
    <input type="submit" value="Login" className="btn1 solid" />
    <br />
    <div>
      <Link onClick={this.onButtonClick} style={{ color: " rgb(7, 212, 212)", cursor: "pointer" }} > did you forget password ?</Link>
      <Modal open={hasOpen} onClose={this.onCloseModal} center>
        <p className="social-text">  <form action="#" className="sign-in-form">
          <h2 className dx="title" style={{ textAlign: 'center' }}>Reset Password</h2>

          <div className="input-field">
            <i className="fas fa-envelope"></i>
            <input type="email" placeholder="Email" />
          </div>

          <input type="submit" className="btn1" value="Submit" />

        </form>
        </p>

      </Modal>
    </div>

  </form>
   );
    }
}

export default Sign_in;