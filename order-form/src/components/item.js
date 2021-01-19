import React, { Component } from 'react';
// import {MdDelete, MdEdit, MdSave} from 'react-icons/md'

class Item extends Component {
    constructor(props){
        super(props);

        this.state = {
            editing: false
        }
        this.newIdea = "";
        this.edit = this.edit.bind(this);
        this.delete = this.delete.bind(this);
        this.save = this.save.bind(this);
        this.renderForm = this.renderForm.bind(this);
        this.renderUI = this.renderUI.bind(this);
        this.inputChanged = this.inputChanged.bind(this);
    }

    edit(){
        this.setState({
             editing: true
        })
    }

    save(e){
        e.preventDefault();
        this.props.onChange(this.newIdea.value, this.props.index)
        
        this.setState({
            editing: false
        });
    }

    delete(e){
        this.props.onDelete(this.props.index);
    }


    inputChanged({target: {value: text}}){
        this.setState({
            newIdea: text
        })
    }

    renderForm(){
        return (
            <div>
                <form>
                    <textarea onChange={this.inputChanged} value={this.state.newIdea}/>
                    <button style={{marginLeft:7+'px'}} onClick={this.save}>save</button>
                </form>
            </div>
        )
    }

    renderUI() {
        return (
            <div className="idea" style={{border: "1px solid black", padding: "5px", marginTop:"10px"}}>
                <div>{this.props.children} </div>
                <span>
                    <button className="btn btn-primary" style={{marginRight:7+'px'}} onClick={this.edit}>edit</button>
                    <button className="btn btn-primary"onClick={this.delete}>delete</button>
                </span>
            </div>
        )
    }

    render(){
        return this.state.editing? this.renderForm() : this.renderUI();
    }
}
export default Item;
