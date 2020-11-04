import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    toolbarButtons: {
        marginLeft: 'auto',
    },
    title: {
        fontStyle: 'italic',
        paddingRight: '10px'
    }
}));


const MenuBar = () => {

    const classes = useStyles();
    const { cartCount } = useContext(GlobalContext);
    

    return (
        <div className={classes.root}>
            <AppBar position="sticky" elevation={0}>
                <Toolbar>
                    <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                        <Typography className={classes.title} variant="h6" noWrap>
                            NIKE
                        </Typography>
                    </Link>
                    <div className={classes.toolbarButtons}>
                        <Link to="/cart" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                            <IconButton aria-label="show cart" color="inherit">
                                <Badge badgeContent={cartCount.toString()} color="secondary">
                                    <ShoppingCartIcon />
                                </Badge>
                            </IconButton>
                        </Link>

                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default MenuBar
