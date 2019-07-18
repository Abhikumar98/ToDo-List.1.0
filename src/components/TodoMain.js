import React from 'react';
import AddItem from './AddItem';
import TodoList from './TodoList';
import './AllCss.css'
import NoItems from './NoItems';

class TodoMain extends React.Component{
    constructor(props)
    {
        super();
        this.state = {
            Items : ['apple','mango','banana'],
            addItem : false
        }
        this.addToList = this.addToList.bind(this)
        this.removeItem = this.removeItem.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    addToList(item){
        if (item.length > 0)
        {
            this.setState({
                Items : this.state.Items.concat([item])
            })
        }
    }
    removeItem(index){
        (this.state.Items).splice(index,1)
        this.setState({
            Items : this.state.Items
        })
    }
    handleClick(){
        this.setState({
            addItem : true
        })
    }
    render(){
        return(
            <div id="container">
                <h1>ToDo List</h1>
                <div className="list-and-input">
                    <AddItem addItem = {this.state.addItem} addToList={this.addToList} />
                    { (this.state.Items).length  == 0 ? <NoItems addItem = {this.handleClick} /> :  
                    <ul>
                        {
                            this.state.Items.map((item,i) => <TodoList removeItem={this.removeItem} index={i} key={i} item={item} />)
                        }
                    </ul>}
                </div>
            </div>
        )
    }
}

export default TodoMain;