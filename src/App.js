import './App.css';

import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [check, setCheck] = useState(false)
  const [value, setValue] = useState(0)
  const [value2, setValue2] = useState(0)
  const [fairPrice, setFP] = useState(null)

  useEffect(()=>{
    if (value == NaN || value2 == NaN){
      alert("you're a faggot")
      setCheck(false)
    }else{ setCheck(true); setFP((22.5 * value * value2)**(1/2))}
    
  },[value, value2])

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h1">
          Stock Fair price Evaluator
        </Typography>
        <Typography component="h3" variant="h6">
          How is fair price calculated? i also dk i just use formular from an image lmao
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="eps"
            label="enter earnings per share"
            name="eps"
            autoFocus
            onChange={e =>{setValue(e.target.value); console.log(e.target.value)}}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="book price"
            label="enter book Value per share"
            id="book value"
            onChange={(e) =>{setValue2(e.target.value)}}
          />
          <Grid container style={{ marginTop: 100}} alignItems="flex-start" justify='center'>
          <Card>
            <CardContent>
              <div style={{ justifyContent: "space-around" }}>
                <Typography component="h3" variant="h6">
                  {fairPrice? <p>the fair price is: {fairPrice}</p> : <p>either u nvr key in the value, or u key in letters. fucking dumb ass.</p>}
                </Typography>
              </div>
            </CardContent>
          </Card>
          </Grid>
        </form>
      </div>
      <div style={{marginTop: 700}}>sven is a gay fking faggot</div>
    </Container>
  );
}
