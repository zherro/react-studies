import React, { Component } from "react";
import "./style.css"

class FormCreate extends Component {

    constructor(props) {
        super(props);
        this.title = "";
        this.text = "";
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
        this.props.createNote(this.title, this.text);
    }

    render() {
        return (
            <form className="form-cadastro" onSubmit={this._createNote.bind(this)}>
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