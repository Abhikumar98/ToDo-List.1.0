import React from 'react';

class AddItem extends React.Component{
    constructor(props){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.addToList(this.userInput.value);
        this.formRef.reset()
    }
    componentDidMount(){
        this.userInput.focus();
    }
    render(){
        if (this.props.addItem) {
            this.userInput.focus()
        }
        return(
            <form ref={input => this.formRef = input} onSubmit={this.handleSubmit} className="input-element">
                <input 
                    ref={input=> this.userInput = input} 
                    name="userInput" placeholder="press enter to add item" 
                    type="text" 
                />   
            </form>
        )
    }
}

export default AddItem;