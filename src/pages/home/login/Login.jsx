import React, { Component } from 'react'
import CodechefLogin from 'react-codechef-login';
//import './login.css';

const data = {
  client_id = "f288f44d273e762203202ab6c86fba18",
  client_secret = "d03eee7476f60e899929bd9e5ffa4325",
  redirectUri = "https://chef-abhi.herokuapp.com/selector"
}

const responseCodechef = response => {
  console.log("hello","token",response)
}

class Login extends Component {

  render() {
    return (
      <div>
        <h1>
          Welcome to Codechef App
        </h1>
        <CodechefLogin
          clientId= {data.client_id}
          clientSecret={data.client_secret}
          redirectUri={redirectUri}
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
