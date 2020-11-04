import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Shoe from '../images/landing-page-img.png'
import SvgWave from '../components/SvgWave'

const useStyles = makeStyles(theme => ({
  topContainer: {
    backgroundColor: '#3f50b5',
    paddingTop: '11vh',
  },
  img: {
    position: 'absolute',
    left: '50%',
    top: '65%',
    transform: 'translate(-50%, -50%)',
    height: '70vh',
  },
  tagLine: {
    color: '#ffffff',
  },
  btn: {
    padding: '10px 20px 10px 20px',
    position: 'absolute',
    left: '50%',
    top: '85%',
    transform: 'translate(-50%, -50%)',
  },
}))

const LandingPage = () => {
  const classes = useStyles()

  return (
    <Grid container justify='center'>
      <Grid item xs={12} md={12} className={classes.topContainer}>
        <Typography align='center' variant='h1' className={classes.tagLine}>
          JUST DO IT.
        </Typography>
        <img src={Shoe} className={classes.img} alt='shoe' />
      </Grid>
      <Grid item xs={12} md={12}>
        <SvgWave />
      </Grid>
      <Grid item xs={12} md={12}>
        <Link to='/store' style={{ textDecoration: 'none' }}>
          <Button variant='contained' color='secondary' className={classes.btn}>
            Shop Now
          </Button>
        </Link>
      </Grid>
    </Grid>
  )
}

export default LandingPage
