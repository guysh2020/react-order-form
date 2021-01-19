import React, { Component } from 'react';
import Item from './item';
// import ideasData from '../data/ideas.json';

import {Fab} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'


class ItemsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { id: 3, idea: "first idea", group: "tamar, haim" },
                { id: 7, idea: "second idea", group: "guy, yaron" },
                { id: 8, idea: "third idea", group: "gil, shimon" }
            ],
        }

        this.eachItem = this.eachItem.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
        this.nextId = this.nextId.bind(this);
    }


    delete(id) {
        console.log(`delete: ${id}`);

        this.setState(prevState => ({
            items: prevState.ideas.filter(idea => idea.id !== id)
        }))
    }


    componentDidMount() {
        this.state.items.map(item => this.add({id:item.id,txt:item.idea, grp:item.group}));
    }

    update(newIdea, i) {
        this.setState(prevState => ({
            items: prevState.items.map(
                idea => idea.id !== i ? idea : { ...idea, idea: newIdea }
            )
        }));
    }

    add({ id = null, txt = 'default title', grp = 'default group' }) {
        this.setState(prevState => ({
            items: [
                ...prevState.items, {
                    id: id !== null ? id : this.nextId(prevState.items),
                    idea: txt,
                    group: grp
                }]
        }))
    }

    nextId(items = []) {
        let max = items.reduce((prev, curr) => prev.id > curr.id ? prev.id : curr.id, 0);
        return ++max;
    }


    eachItem(item, i) {
        return(
                <div key={i} className="card" style={{width: 18 +"rem", marginBottom:7+'px'}}>
                    <div className="card-body">
                    <Item key={i} index={item.id} onChange={this.update} onDelete={this.delete}>
                            <h4>{item.idea}</h4>
                            <h5>by: {item.group}</h5>
                        </Item>
                    </div>
                </div>
        )

    }


    render() {
        return (
            <div className="items-list">
                {this.state.items.map(this.eachItem)}
            </div>
            
        )
    }

}

export default ItemsList;