// import React from 'react';
// import ReactDOM from 'react-dom';
// import { makeStyles, StylesProvider } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// // import {StylesProvider} from '@material-ui/styles';

// const useStyles = makeStyles(theme => ({
//     // root: {
//     //   flexGrow: 1,
//     // },
//     // title: {
//     //     marginRight: '300px',
//     // },

//     about: {
//         marginLeft: 300,
//     }
//   }));

// function NavBar() {
//     const classes = useStyles();
//     return (
//         // <StylesProvider injectFirst>
//             <AppBar position="static">
//             <Toolbar>
//                 <Typography variant="h6">
//                 BeeBeeMath
//                 </Typography>
//                     <Button color="inherit" className="classes.about">About</Button>
//             </Toolbar>
//             </AppBar>
//         // </StylesProvider>
//     );
// }

// export default NavBar

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { yellow } from '@material-ui/core/colors';
import logo from '../logo.png';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    // flexGrow: 1,
    // paddingLeft: 900,
    fontWeight: 'bold',
    fontFamily: 'Lato',
    fontSize: '17px'
  },
}));

const yellowTheme = createMuiTheme({ 
    palette: { 
        primary: {
            main: '#f9a825'
        },
    } 
});

// const primary = yellow[500]


export default function NavBar() {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={yellowTheme}>
        <div className={classes.root} backgroundColor="primary">
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6">
                    <form action="/" method="get">
                        <Button type="submit" style={{fontFamily: 'Courier', fontSize: 'larger'}}>
                            <img src={logo} style={{width: '40px', height: '40px'}}/>
                            BeeBee<b>Math</b>
                        </Button>
                    </form>
                </Typography>
                <div style={{flexGrow: 2, visibility: 'hidden'}}>Linh dai ca va Quang dep trai nhat the gioi</div>
                <form action="/about" method="get">
                    <Button type="submit" color="inherit" className={classes.title}>About Us</Button>
                </form>
                </Toolbar>
            </AppBar>
        </div>
    </MuiThemeProvider>
  );
}