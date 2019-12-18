import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import Job from './Job';

const useStyles = makeStyles({
    root: {
    //   maxWidth: 1000,
      flexGrow: 1,
    },
});

export default function Jobs({jobs}) {

    const numJobs = jobs.length;
    const numPages = Math.ceil(numJobs / 50);

    const [activeStep, setActiveStep] = React.useState(0);
    const classes = useStyles();
    const theme = useTheme();

    const handleNext = () => {
        setActiveStep(prevActiveStep =>   + 1);
      };
    
      const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
      };

    return (
        <div className="jobs">
            <Typography variant="h4" component="h1">
                Junior SWE Jobs
            </Typography>
            { jobs.map((job, i) => <Job key={i} job={job} />) }
            <div>Page {activeStep + 1} of {numPages}</div>
            <MobileStepper
                variant="progress"
                steps={numPages}
                position="static"
                activeStep={activeStep}
                className={classes.root}
                nextButton={
                <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
                    Next
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </Button>
                }
                backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                    Back
                </Button>
                }
            />
        </div>
    );
}