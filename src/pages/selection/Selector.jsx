import React, { Component } from 'react'
import Autocomplete from 'react-autocomplete';
import Logout from '../../global_components/logout/Logout'
import './selector.css'
import { withRouter } from 'react-router-dom';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles, withStyles } from '@material-ui/core/styles';
// import {}
import { data } from '../../Data'

const contests = require('../../data/contests');
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


class Selector extends Component {
    constructor(props) {
      super(props);

        this.state = {
            results : [],
            isContestCodeSelected: 0,
            problem_id : "Enter Problem Code",
            value: "",
            item:{},
        }

        // this.classes = useStyles();
        
        this.getauthtoken = this.getauthtoken.bind(this);
        this.getaccesstoken = this.getaccesstoken.bind(this);
        this.fetchdata = this.fetchdata.bind(this);
        this.handleRadioButonChange = this.handleRadioButonChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }


    handleRadioButonChange() {
        let c = this.state.isContestCodeSelected ^ 1
        this.setState({
            isContestCodeSelected: c,
            value:""
        })
    }

    handleTextChange(evt){
        this.setState({
          problem_id : evt.target.value
        })
    }

    handleButtonClick(){
        if(contests.result.data.content.contestList.indexOf(this.state.item) > -1)
        {
            if(this.state.item.code===this.state.value || this.state.item.name===this.state.value)
            {
                this.props.history.push(`/contest/${this.state.item.code}`)
            }
        }
    }

    getauthtoken(){
        var urlobj = new URL(window.location.href);
        var authtoken = urlobj.searchParams.get('code');
        console.log("auth",authtoken);
        localStorage.setItem('auth',authtoken);
        var authh = (localStorage.getItem('auth'));
        console.log("this auth",authh);
    }

    getaccesstoken(){
        console.log(data.tokenURL);
        var mydata = {
            grant_type: 'authorization_code',
            code: localStorage.getItem('auth'),
            client_id: data.clientID,
            client_secret: data.clientSecret,
            redirect_uri: data.callbackURL
        }
        fetch(data.tokenURL,
            {
                method: 'POST',
                headers : {'Content-Type' : 'application/json'},
                body : JSON.stringify(mydata)
            }).then(function(resp){
                return (resp.json());
            }).then(function(da){
                localStorage.setItem("access",da.result.data.access_token);
                localStorage.setItem("refresh",da.result.data.refresh_token);
                console.log("da", da.result.data.access_token);
                this.fetchdata('https://api.codechef.com/contests',this.options);
            });
    }

    fetchdata = async endpoint =>{
        const response = await fetch(endpoint)
        console.log("this",response);
        const json = await response.json()
        localStorage.setItem('contest', json);
        this.setState({
            results : json
        });
    }

    options = {
        method : "GET",
        headers : {
            Authorization: localStorage.getItem('access'),
            "Content-Type": "application/json",
        },
    }

    
    componentDidMount(){
        //console.log("here",this.props.match.params);
        this.getauthtoken();
        this.getaccesstoken();
        // this.fetchdata('https://api.codechef.com/contests',this.options);
        //console.log("this")
    }

    
    render() {
        const { classes } = this.props;
        let rb_element = 
            <FormControl component="fieldset">
                <RadioGroup row aria-label="gender" name="gender1" value={this.state.isContestCodeSelected} onChange={this.handleRadioButonChange} >
                    <FormControlLabel value={1} control={<Radio />} label="Contest Code" />
                    <FormControlLabel value={0} control={<Radio />} label="Contest Name" />
                </RadioGroup>
            </FormControl>

        let autocomp_element =
            <Autocomplete getItemValue={(item) => this.state.isContestCodeSelected?item.code:item.name}
                items={contests.result.data.content.contestList}
                renderItem={(item, isHighlighted) =>
                    this.state.isContestCodeSelected?
                        (item.code.toLowerCase().indexOf(this.state.value.toLowerCase()) > -1 ?
                        <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                            {item.code}
                        </div> : <div></div>):
                        (item.name.toLowerCase().indexOf(this.state.value.toLowerCase()) > -1 ?
                        <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                            {item.name}
                        </div> : <div></div>)
                }
                value={this.state.value}
                onChange={(e) => this.setState({value: e.target.value})}
                onSelect={(val,item) => this.setState({value: val,item: item})}>
            </Autocomplete>

        let btn_ele = <Button variant="contained" onClick={this.handleButtonClick}>Next</Button>;

        return (
            <>
                <Grid container
                    direction = "column"
                    justify="center"
                    alignItems="center"
                    spacing={3}
                    className={classes.root}
                    container spacing ={5}
                >

                <Grid container justify="center"  spacing={5} alignitems= "center">
                <Grid item> 
                    <Paper className = {classes.paper} style = {{padding : 10}}>
                    <div>{rb_element}</div>
                    </Paper>
                </Grid>
                </Grid>
                <Grid item>
                <div>{autocomp_element}</div>
                </Grid>
                <Grid item>
                <div>{btn_ele}</div>
                </Grid>
                <Logout/>
                </Grid>
                {/* </Grid> */}
            </>
        );
    }
}
export default withStyles(useStyles)(withRouter(Selector));