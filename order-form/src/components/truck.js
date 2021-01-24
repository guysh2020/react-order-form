
import React from 'react';
import Truck from '../assets/truck.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    truck: {
        width: '50vw',
        height: '35vmin',
        position: 'absolute',
        right: '50vw',
        bottom: 0,
    },
});


function BackgroundImage(props) {
    const classes = useStyles();
    return (
        <img src={ Truck } alt="background" className={ classes.truck } />
    )

}
export default BackgroundImage;