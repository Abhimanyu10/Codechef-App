import React, { FC, useState, useEffect, useCallback } from "react";
import { Card, Button } from "@material-ui/core";
import styled from "@emotion/styled";

// import { Google } from "./config";

const id = 'f288f44d273e762203202ab6c86fba18'
const secret = 'd03eee7476f60e899929bd9e5ffa4325'
const REDIRECT_URI = 'http://localhost:3000/'
const RESP_TYPE = 'code'

const StyledCard = styled(Card)`
  padding: 20px;
  margin: 100px auto;
  max-width: 40vw;
  min-width: 300px;
`;


export default class Test extends React.Component {

    constructor(props) {
        super(props)
        this.handleGoogleLogin = this.handleGoogleLogin.bind(this);
    }

    async handleGoogleLogin (){

        const qParams = [
            `response_type=${RESP_TYPE}`,
            `client_id=${id}`,      
            `state=xyz`,
            `redirect_uri=${REDIRECT_URI}`,
            // `scope=${Google.SCOPE}`,
            // `login_hint=paramsinghvc@gmail.com`,
            // `prompt=consent`,
        ].join("&");
        
        try {
            const response = await fetch(`https://api.codechef.com/oauth/authorize?${qParams}`,{mode : 'no-cors' , method: 'POST'});
            const url = await response.text();
            if(response.redirected){
                window.location.href = response.url;
            }
            window.location.assign(url);
        } catch (e) {
            console.error(e);
        }
        
    };

 
    render() {
        return (
            <StyledCard>
            <Button variant="contained" color="primary" onClick={this.handleGoogleLogin}>
                Login with Google
            </Button>
            </StyledCard>
        );
    }
}
