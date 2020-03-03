import React, {Component} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class About extends React.Component {
    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <div style={{maxWidth: '70vw', margin: 'auto', textAlign: 'left', fontFamily: 'Lato', paddingTop: '30px'}}>
                    <h1>About BeeBeeMath</h1>
                </div>
                <Container fixed> 
                    <Typography component="div" style={{ backgroundColor: 'white', height: '70vh', maxWidth: '70vw', margin: 'auto', padding: '25px 0'}}>
                        <div style={{paddingLeft: '30px', paddingRight: '30px', textAlign: 'justify', margin: 'auto', fontFamily: 'Roboto Condensed', fontSize: '18px'}}>
                            <p>BeeBee<b>Math</b> is an online math education platform designed to assist kindergarten teachers in educating kindergarteners basic math concepts.
                            It serves as an in-class tool for the teachers to help kids learn and fully grasp the fundamentals of math.
                            </p>
                            <p><span style={{color: '#f9a825', fontWeight: 'bold'}}>Quang Nguyen</span> and <span style={{color: '#f9a825', fontWeight: 'bold'}}>Linh Ta</span> are the minds behind BeeBee<b>Math</b>. They are technology enthusiasts who are passionate about children education. 
                                They have a deeply-held conviction that effective STEM education is essential for improving the lives of future generations and the world.
                            </p>
                            <p>BeeBee<b>Math</b> always welcomes constructive criticism and feedback to provide better online educational content for young children. If you have any question or concern, please do not
                            hesitate to contact us at <b><i>abc.xyz@cde.com</i></b>.
                            </p>
                        </div>
                    </Typography>
                </Container>
            </React.Fragment>
        )
    }
}

export default About;