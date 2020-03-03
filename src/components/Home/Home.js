import React, {Component} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { yellow } from '@material-ui/core/colors'


const yellowTheme = createMuiTheme({ palette: { primary: yellow } });


class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <Container fixed> 
                    <Typography component="div" style={{ backgroundColor: 'white', height: '70vh', maxWidth: '70vw', margin: 'auto', padding: '125px 0'}}>
                        <h1 style={{fontFamily: 'Lato'}}>Kindergarten Math Education done right.</h1>
                        <p style={{fontFamily: 'Roboto Condensed'}}>Learn the basics of Math and have fun along the way!</p>
                        <MuiThemeProvider theme={yellowTheme}>  
                            <form action="/course" method="get" style={{marginTop: '50px'}}>
                                <Button type="submit" variant="contained" color="primary" style={{fontFamily: 'Roboto Condensed', borderRadius: '20px', width: '130px', height: '46px'}}>
                                    Start Now
                                </Button>
                            </form>
                        </MuiThemeProvider>
                    </Typography>
                </Container>
            </React.Fragment>
        )
    }
}

export default Home;