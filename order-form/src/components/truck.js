
import React from 'react';
import Truck from '../truck.svg';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    truck: {
        width: 811,
        height: 394,
        position: 'absolute',
        bottom: -500,
        left: 0
    },

});


function BackgroundImage(props) {
    const classes = useStyles();
    return (
        <img src={ Truck } alt="background" className={ classes.truck } />
    )

}
export default BackgroundImage;