import React, { Component } from 'react';
import "./style.css";
import deleteIcon from "../../assets/icons/delete_black_24dp.svg"

class CardNote extends Component {

    delete() {
        let index = this.props.index;
        this.props.deleteNote(index);
    }

    render() {
        return (
            <section className="card-nota">
                <header className="card-nota_cabecalho">
                    <h3 className="card-nota_titulo">{this.props.title}</h3>
                    <img src={deleteIcon} onClick={this.delete.bind(this)} />
                </header>
                <p className="card-nota_texto">{this.props.text}</p>
            </section>
        );
    }
}

export default CardNote;