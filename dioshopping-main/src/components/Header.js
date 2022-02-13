import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core/';
import Cart from './Cart';


const Header = () => {
    return(

        <Grid container direction="row" justify="flex-end" alignItems="center" xs={12}  > 

            <Link to="/">
                <Button color="black">Dio Shopping</Button>
            </Link>
            <Link to="/contato">
                <Button color="black">Contato</Button>
            </Link>
            <Cart />   
        </Grid>
    )
}

export default Header;
