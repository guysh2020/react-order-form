import React from 'react';
import Item from './item';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    root: {
        width: '34vw',
        height: '52.2vmin',
        borderRadius: '10px',
        boxShadow: 'none',
        paddingTop: 10,
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
        <Paper className={ classes.root }>
            <TableContainer className={ classes.container }>
                <Table aria-label="sticky table">
                    <TableBody>
                        { props.items.map(eachItem) }
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper >
    )
}
