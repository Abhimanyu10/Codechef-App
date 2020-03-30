import React, { Component } from 'react'
import CodechefLogin from 'react-codechef-login';
//import './login.css';

const responseCodechef = response => {
  console.log("hello","token",response)
}

class Login extends Component {

  render() {
    return (
      <div>
        <h1>
          Codechef_Demo WebApp
        </h1>
        <CodechefLogin
          clientId= 'f288f44d273e762203202ab6c86fba18'
          clientSecret='d03eee7476f60e899929bd9e5ffa4325'
          redirectUri="http://localhost:3000/selector"
          state='xyzabc'
          buttonText="Login Now"
          onSuccess={responseCodechef}
          onFailure={responseCodechef}
        />
      </div>
    )
  }
}

export default Login;
