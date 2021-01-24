import React, { useState, useEffect } from 'react'
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';

const useStyles = makeStyles({
    input: {
        width: 400,
        height: 60,
        border: '2px solid #EE4D47',
        boxSizing: 'border-box',
        boxShadow: '0px 20px 40px rgba(238, 77, 71, 0.2)',
        borderRadius: 5,
        marginBottom: 14,
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: 'bold',
        paddingLeft: 18
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: 38,
    },
    button: {
        backgroundColor: '#ED4D47',
        color: 'white',
        width: 158,
        height: 60,
        fontWeight: 'bold'
    }
});



export default function InputForm(props) {
    const [date, setDate] = useState("");
    const [client, setClient] = useState("");
    const [location, setLocation] = useState("");

    const classes = useStyles();


    useEffect(() => {
        if (props.initialData) {
            setDate(props.initialData.date);
            setClient(props.initialData.client);
            setLocation(props.initialData.location);
        }
    }, [props.initialData]);


    const formDataIsValid = () => {

        let errors = [];
        if (!moment(date, "DD.MM.YYYY").isValid())
            errors.push("Invalid date, please insert a valid date in format of: DD.MM.YYYY.\n")
        else if (moment().isAfter(moment(date, 'DD.MM.YYYY'))) {
            errors.push("Invalid date, please insert a valid date later then today.")
        }
        if (client === "" || location === "")
            errors.push("All fields are requierd, please make sure all fields are filled.")

        if (errors.length > 0)
            alert(errors)
        else
            return true


    }

    const onSubmit = () => {

        if (formDataIsValid()) {
            props.submit({ date, client, location });
            setDate("");
            setClient("");
            setLocation("");
        }
    }

    return (
        <form noValidate autoComplete="off" className={ classes.form }>
            <input type="text" className={ classes.input } name="date" onChange={ (event) => setDate(event.target.value) } value={ date } placeholder="Date: DD.MM.YYYY" />
            <input typpe="text" className={ classes.input } name="client" onChange={ (event) => setClient(event.target.value) } value={ client } placeholder="Name" />
            <input typpe="text" className={ classes.input } name="location" onChange={ (event) => setLocation(event.target.value) } value={ location } placeholder="Location" />
            <Button variant="contained" className={ classes.button } onClick={ onSubmit }>
                { props.editing ? "Update" : "Save" }
            </Button>
        </form>
    )
}
