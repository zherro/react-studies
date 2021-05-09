import React, { Component } from "react";

class FormCreate extends Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Title" />
                <textarea placeholder="Write your note"></textarea>
                <button>Create note</button>
            </form>
        );
    }
}

export default FormCreate;