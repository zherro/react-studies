import React, { Component } from "react";
import "./style.css"

class FormCreate extends Component {

    constructor() {
        super();
        this.title = "";
    }


    handleModfyTitle(event) {
        console.log(event.target.value);
        this.title = event.target.value;
    }

    render() {
        return (
            <form className="form-cadastro ">
                <input 
                    type="text" placeholder="Title" 
                    className="form-cadastro_input" 
                    onChange={this.handleModfyTitle.bind(this)}
                />
                <textarea 
                    placeholder="Write your note"
                    className="form-cadastro_input"></textarea>
                <button className="form-cadastro_input form-cadastro_submit">
                    Create note
                </button>
            </form>
        );
    }
}

export default FormCreate;