import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import ListSubheader from '@material-ui/core/ListSubheader'
import { Container } from '@material-ui/core'
import { Link } from 'react-router-dom'
import SvgWave from '../components/SvgWave'
import { GlobalContext } from '../context/GlobalState'
import Footer from '../components/Footer'
import { useSnackbar } from 'notistack'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
  wave: {
    position: 'absolute',
    zIndex: -1,
    height: '40vh',
  },
  img: {
    zIndex: 1,
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    height: '30vh',
  },
}))

const StorePage = () => {
  const classes = useStyles()
  const { shoeData, addItem } = useContext(GlobalContext)
  const { enqueueSnackbar } = useSnackbar()

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
    <div className={classes.root}>
      <Container fixed>
        <GridList
          cellHeight={200}
          spacing={5}
          className={classes.gridList}
          cols={3}
        >
          <GridListTile key='Subheader' cols={2} style={{ height: 'auto' }}>
            <ListSubheader component='h1'>Popular Shoes</ListSubheader>
          </GridListTile>
          {shoeData.map(item => (
            <GridListTile key={item.id} cols={item.cols}>
              <Link to={`/item/${item.id}`}>
                <img src={item.img} alt={item.name} className={classes.img} />
                <SvgWave className={classes.wave} />
              </Link>
              <GridListTileBar
                title={item.name}
                subtitle={item.price + ' $'}
                titlePosition='bottom'
                actionIcon={
                  <IconButton
                    aria-label={`buy ${item.name}`}
                    className={classes.icon}
                    onClick={() => addItemToStore(item.id)}
                  >
                    <AddShoppingCartIcon />
                  </IconButton>
                }
                actionPosition='right'
                className={classes.titleBar}
              />
            </GridListTile>
          ))}
        </GridList>
        <Footer />
      </Container>
    </div>
  )
}

export default StorePage
