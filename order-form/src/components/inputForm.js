import React, { useState, useEffect } from 'react'
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


// form{
//     display: flex;
//     flex - direction: column;
//     align - items: center;
// }

// input{
//     width: 400px;
//     height: 60px;
//     border: 2px solid #EE4D47;
//     box - sizing: border - box;
//     box - shadow: 0px 20px 40px rgba(238, 77, 71, 0.2);
//     border - radius: 5px;
//     font - weight: bold;
// }

// style = { { backgroundColor: '#ED4D47', color: 'white', width: 158, height: 60, fontWeight: 'bold' } }


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
        marginRight: 113
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
        console.log("on update");
        console.log(props.initialData);
        if (props.initialData) {
            console.log("new data here");
            setDate(props.initialData.date);
            setClient(props.initialData.client);
            setLocation(props.initialData.location);
        }
        else {
            setDate("");
            setClient("");
            setLocation("");
        }

    }, [props.initialData]);

    const onSubmit = () => {
        props.submit({ date, client, location });
        setDate("");
        setClient("");
        setLocation("");


    }

    console.log(date, location, client);
    return (

        <form noValidate autoComplete="off" className={ classes.form }>
            <input type="date" className={ classes.input } name="date" onChange={ (event) => setDate(event.target.value) } value={ date } />
            <input typpe="text" className={ classes.input } name="client" onChange={ (event) => setClient(event.target.value) } value={ client } />
            <input typpe="text" className={ classes.input } name="location" onChange={ (event) => setLocation(event.target.value) } value={ location } />
            <Button variant="contained" className={ classes.button } onClick={ onSubmit }>
                { props.editing ? "Update" : "Save" }
            </Button>
        </form>
    )
}


// export default class InputForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             date: "",
//             client: "",
//             location: "",
//         }

//         this.onSubmit = this.onSubmit.bind(this);
//         this.handleInputChange = this.handleInputChange.bind(this);
//     }

//     componentDidUpdate(prevProps) {
//         if (this.props.date !== prevProps.date) {

//         }
//     }

//     onSubmit() {
//         this.props.submit(this.state);
//         // this.setState({
//         //     date: "",
//         //     client: "",
//         //     location: "",
//         // })
//     }

//     handleInputChange(event) {
//         this.setState({
//             [event.target.name]: event.target.value
//         });
//     }

//     render() {
//         return (
//             <form noValidate autoComplete="off" >
//                 <input style={ { marginBottom: '15px' } } name="date" onChange={ this.handleInputChange } defaultValue={ this.state.date } />
//                 <input style={ { marginBottom: '15px' } } name="client" onChange={ this.handleInputChange } defaultValue={ this.state.client } />
//                 <input style={ { marginBottom: '15px' } } name="location" onChange={ this.handleInputChange } defaultValue={ this.state.location } />
//                 <Button variant="contained" style={ { backgroundColor: '#ED4D47', color: 'white', width: 158, height: 60, fontWeight: 'bold' } } onClick={ this.onSubmit }>
//                     Save
//                 </Button>
//             </form>

//         )
//     }
// }



// export default class InputForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             date: props.date ? props.date : "",
//             client: props.client ? props.client : "",
//             location: props.location ? props.location : "",
//         }

//         this.onSubmit = this.onSubmit.bind(this);
//         this.handleInputChange = this.handleInputChange.bind(this);
//     }

//     componentDidUpdate(props) {

//     }

//     onSubmit() {
//         this.props.submit(this.state);
//         // this.setState({
//         //     date: "",
//         //     client: "",
//         //     location: "",
//         // })
//     }

//     handleInputChange(event) {
//         this.setState({
//             [event.target.name]: event.target.value
//         });
//     }

//     render() {
//         return (
//             <form noValidate autoComplete="off" >
//                 <input style={ { marginBottom: '15px' } } name="date" onChange={ this.handleInputChange } defaultValue={ this.state.date } />
//                 <input style={ { marginBottom: '15px' } } name="client" onChange={ this.handleInputChange } defaultValue={ this.state.client } />
//                 <input style={ { marginBottom: '15px' } } name="location" onChange={ this.handleInputChange } defaultValue={ this.state.location } />
//                 <Button variant="contained" style={ { backgroundColor: '#ED4D47', color: 'white', width: 158, height: 60, fontWeight: 'bold' } } onClick={ this.onSubmit }>
//                     Save
//                 </Button>
//             </form>

//         )
//     }
// }

