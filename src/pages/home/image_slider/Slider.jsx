import React from 'react';
import { makeStyles, useTheme , withStyles , withTheme} from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://s3.amazonaws.com/codechef_shared/download/1-HP-LC-Apr.jpg',
  },
  {
    label: 'Bird',
    imgPath:
      'https://s3.amazonaws.com/codechef_shared/download/1-HP-CCDSA_SEB.jpg',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://s3.amazonaws.com/codechef_shared/download/1-HP-CO-Apr.jpg',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    display: 'block',
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
  },
}));

class Slider extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            activeStep: 0 ,
            maxSteps : tutorialSteps.length
        }

        // this.setActiveStep = this.setActiveStep.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this);
        // this.handleStepChange = this.handleStepChange.bind(this);
    }
  

  handleNext(){
    this.setState({
        activeStep : this.activeStep+1
    })
  };

  handleBack(){
    this.setState({
        activeStep : this.activeStep-1
    })
  };

//   handleStepChange = (step) => {
//     setActiveStep(step);
//   };
    
    render() {
        const { classes } = this.props; 
        const { theme } = this.props;
        return (
            <div className={classes.root}>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={this.activeStep}
                    onChangeIndex={this.handleStepChange}
                    enableMouseEvents
                >
                    {tutorialSteps.map((step, index) => (
                        <div key={step.label}>
                            {Math.abs(this.activeStep - index) <= 2 ? (
                                <img className={classes.img} src={step.imgPath} alt={step.label} />
                            ) : null}
                        </div>
                    ))}
                </AutoPlaySwipeableViews>
                <MobileStepper
                    steps={this.maxSteps}
                    position="static"
                    variant="text"
                    activeStep={this.activeStep}
                    nextButton={
                        <Button size="small" onClick={this.handleNext} disabled={this.activeStep === this.maxSteps - 1}>
                            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={this.handleBack} disabled={this.activeStep === 0}>
                            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                            Back
                        </Button>
                    }
                />
            </div>
        );
    }
}

export default withStyles(useStyles, {withTheme : true})(Slider);
