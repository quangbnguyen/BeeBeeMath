import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Button from '@material-ui/core/Button'


const useStyles = makeStyles(theme => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));


function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function Breadcrumb(props) {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{maxWidth: '70vw', margin: 'auto', paddingTop: '50px'}}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        <Link color="inherit">
          <form action="/course" method="get">  
            <Button type="submit">Math Topics</Button>
          </form>
        </Link>
        <Typography color="textPrimary">{props.name}</Typography>
      </Breadcrumbs>
    </div>
  );
}