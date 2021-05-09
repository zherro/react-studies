import React, { Component } from "react";
import "./style.css"

class FormCreate extends Component {
    render() {
        return (
            <form className="form-cadastro ">
                <input 
                    type="text" placeholder="Title" 
                    className="form-cadastro_input" />
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