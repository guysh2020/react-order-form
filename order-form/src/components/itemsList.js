import React from 'react';
import Item from './item';
// import Table from './table';


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles({
    root: {
        width: '550px',
        height: '594px',
        borderRadius: '10px',
        boxShadow: 'none'
    },
    container: {
        maxHeight: 594,
    },
});


export default function ItemsList(props) {
    const eachItem = (item, i) => {
        return (
            <Item
                key={ item.id }
                id={ item.id }
                index={ i }
                edit={ props.edit }
                delete={ props.delete }
                date={ item.date }
                client={ item.client }
                location={ item.location } />
        )
    }
    const classes = useStyles();
    return (
        // <Table />
        <Paper className={ classes.root }>
            <TableContainer className={ classes.container }>
                <Table aria-label="sticky table">
                    <TableBody>
                        { props.items.map(eachItem) }
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper >

        // <div className="items-list">
        //     { props.items.map(eachItem) }
        // </div>

    )


}
