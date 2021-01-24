import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
    button: {
        marginRight: 8,
        backgroundColor: '#ED4D47',
        color: 'white',
        boxShadow: 'none',
        width: '3.2vmin',
        height: '3vmin'
    },
    cell: {
        borderBottom: 'none',
        fontFamily: 'Rubik',
        fontWeight: 300,

        paddingTop: 7,
        paddingRight: 0,
        paddingBottom: 7
    },
    icon: {
        fontSize: '2.3vmin'
    }
});


function Item(props) {

    const classes = useStyles();

    return (
        <TableRow hover role="checkbox" tabIndex={ -1 } key={ props.id } style={ { border: "none" } }>
            <TableCell key={ "index" } align={ "left" } className={ classes.cell }>
                { props.index + 1 }
            </TableCell>
            <TableCell key={ "date" } align={ "left" } className={ classes.cell }>
                { props.date }
            </TableCell>
            <TableCell key={ "client" } align={ "left" } className={ classes.cell }>
                { props.client }
            </TableCell>
            <TableCell key={ "location" } align={ "left" } className={ classes.cell }>
                { props.location }
            </TableCell>
            <TableCell key={ "actions" } align={ "right" } className={ classes.cell }>
                <Fab size='small' className={ classes.button } onClick={ () => { props.edit(props.id) } }>
                    <EditIcon className={ classes.icon } />
                </Fab>
                <Fab size='small' className={ classes.button } onClick={ () => { props.delete(props.id) } }>
                    <DeleteIcon className={ classes.icon } />
                </Fab>
            </TableCell>
        </TableRow>
    );

}
export default Item;
