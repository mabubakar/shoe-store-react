import React, { useEffect, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import splash from '../images/splash (1).png'
import Footer from '../components/Footer'
import { useSnackbar } from 'notistack'

const useStyles = makeStyles(theme => ({
  content: {
    marginTop: '50px',
  },
  img: {
    maxWidth: '100%',
    maxHeight: '100%',
    marginTop: '-100%',
  },
  splash: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50vw',
    height: '50vw',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}))

const ItemPage = () => {
  const { id } = useParams()
  const { shoeItem, getShoeItem, addItem } = useContext(GlobalContext)
  const { enqueueSnackbar } = useSnackbar()
  const classes = useStyles()

  useEffect(() => {
    getShoeItem(id)
  }, [id])

  const addItemToStore = id => {
    enqueueSnackbar('Added Shoe to your cart', {
      variant: 'success',
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right',
      },
    })

    addItem(id)
  }

  return (
    <Container fixed className={classes.content}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant='h4' gutterBottom>
            {shoeItem.name}
          </Typography>
          <Typography variant='body1' display='block' gutterBottom>
            {shoeItem.description}
          </Typography>
          <Typography variant='h6' display='block' gutterBottom>
            Price : {shoeItem.price} $
          </Typography>
          <Button
            variant='contained'
            color='secondary'
            onClick={() => addItemToStore(id)}
          >
            Add to Cart
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={splash} className={classes.splash} alt='splash' />
          <img src={shoeItem.img} className={classes.img} alt='productName' />
        </Grid>
      </Grid>
      <Footer />
    </Container>
  )
}

export default ItemPage
