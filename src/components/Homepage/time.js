import React, {useState, useEffect} from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Time() {
  const classes = useStyles();
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
      const id = setInterval(() => setDateTime(new Date()), 1000);
      return () => {
          clearInterval(id);
      }
  }, []);
  return (
    <React.Fragment>
      <Title>Time</Title>
      <Typography component="p" variant="h4">
        {dateTime.toLocaleDateString()}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        {dateTime.toLocaleTimeString()}
      </Typography>
    </React.Fragment>
  );
}