
import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';



const useStyles = makeStyles({
    button: {
        marginLeft: '10px',
        backgroundColor: '#ED4D47',
        color: 'white',
        boxShadow: 'none',

    },
    cell: {
        borderBottom: 'none',
        fontFamily: 'Rubik',
        fontWeight: 300,

    }
});


function Item(props) {
    // return (
    //     <div className="item">
    //         <div className="item-details">
    //             <label>{ props.index + 1 }.</label>
    //             <label>{ props.date }</label>
    //             <label>{ props.client }</label>
    //             <label>{ props.location }</label>
    //         </div>
    //         <div>
    // <Fab size='small' style={ { marginLeft: 18, backgroundColor: '#ED4D47', color: 'white' } } className='clickable' onClick={ () => { props.edit(props.id) } }>
    //     <EditIcon />
    // </Fab>
    // <Fab size='small' style={ { marginLeft: 18, backgroundColor: '#ED4D47', color: 'white', } } className='clickable' onClick={ () => { props.delete(props.id) } }>
    //     <DeleteIcon />
    // </Fab>
    //         </div>
    //     </div>
    // )

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
                    <EditIcon />
                </Fab>
                <Fab size='small' className={ classes.button } onClick={ () => { props.delete(props.id) } }>
                    <DeleteIcon />
                </Fab>
            </TableCell>
        </TableRow>
    );

}
export default Item;
