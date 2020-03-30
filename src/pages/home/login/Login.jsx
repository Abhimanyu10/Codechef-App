import React, { Component } from 'react'
import CodechefLogin from 'react-codechef-login';
import { data} from '../../../Data';

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
          clientId= {data.clientId}
          clientSecret={data.clientSecret}
          redirectUri={data.redirectUri}
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
