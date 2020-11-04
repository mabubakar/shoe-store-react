import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GlobalContext } from '../context/GlobalState';
import EmptyCart from '../components/EmptyCart';
import GridTable from '../components/GridTable';
import { Container, Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '50px'
    },
    paper: {
        marginTop: '50px',
        padding: '20px'
    },
    total: {
        textAlign: "right",
    },
    btn: {
        padding: '10px 20px 10px 20px',
        marginTop: '20px',
        float: 'right',

    },
    cancelbtn: {
        padding: '10px 20px 10px 20px',
        marginTop: '20px',
        float: 'right',
        marginRight: '10px'

    }
}));

const CartCheckoutPage = () => {
    const classes = useStyles();
    const { cartItems, emptyCart } = useContext(GlobalContext);
    const total = cartItems.reduce((acc, curr) => acc + curr.price * curr.count, 0).toFixed(2);
    const { enqueueSnackbar } = useSnackbar();

    const removeItemsfomCart = () => {
        enqueueSnackbar('Cart Checkout Success', {
            variant: 'success',
            anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'right',
            },
        });
        emptyCart();
    }

    return (
        <div>
            <Container fixed className={classes.root}>

                {
                    cartItems.length === 0 ?
                        <Grid
                            container
                            direction="column"
                            alignItems="center"
                            justify="center">
                            <Grid item xs={12} sm={12} md={12}>
                                <EmptyCart />
                            </Grid>
                        </Grid>
                        :
                        <div>
                            <GridTable gridTableData={cartItems} />

                            <Button variant="contained" color="secondary" className={classes.btn} onClick={() => removeItemsfomCart()}>
                                Buy ( {total} $)
                            </Button>

                            <Link to="/store" style={{ textDecoration: 'none' }}>
                                <Button variant="outlined" color="secondary" className={classes.cancelbtn}>
                                    Cancel
                            </Button>
                            </Link>

                        </div>
                }
            </Container>
        </div>)
}

export default CartCheckoutPage