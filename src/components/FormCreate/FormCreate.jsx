import React, { Component } from "react";
import "./style.css"

class FormCreate extends Component {

    constructor(props) {
        super(props);
        this.title = "";
        this.text = "";
        this.category = "Sem categoria";
        this.state = {categories: []};
        this._newCategoriesBind = this._newCategories.bind(this)
    }

    componentDidMount() {
        this.props.categories.subscribe(this._newCategoriesBind);
    }

    componentWillUnmount() {
        this.props.categories.unsubscribe(this._newCategoriesBind);
    }

    _newCategories(categories) {
        this.setState({...this.state, categories});
    }

    _handleChangeCategory(event) {
        event.stopPropagation();
        this.category = event.target.value;
    }

    _handleModfyTitle(event) {
        event.stopPropagation();
        console.log(event.target.value);
        this.title = event.target.value;
    }

    _handleModfyText(event) {   
        event.stopPropagation();
        this.text = event.target.value;
    }

    _createNote(event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.createNote(this.title, this.text, this.category);
    }

    render() {
        return (
            <form className="form-cadastro" onSubmit={this._createNote.bind(this)}>
                <select 
                    onChange={this._handleChangeCategory.bind(this)}
                    className="form-cadastro_input">
                    <option>No category</option>
                    {this.props.categories.categories.map((category, index) => {
                        return <option key={index} >{category}</option>
                    })}
                </select>
                <input 
                    type="text" placeholder="Title" 
                    className="form-cadastro_input" 
                    onChange={this._handleModfyTitle.bind(this)}
                />
                <textarea 
                    placeholder="Write your note"
                    className="form-cadastro_input"
                    onChange={this._handleModfyText.bind(this)}
                ></textarea>
                <button className="form-cadastro_input form-cadastro_submit">
                    Create note
                </button>
            </form>
        );
    }
}

export default FormCreate;