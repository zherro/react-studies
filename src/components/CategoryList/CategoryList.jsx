import React, { Component } from 'react';
import "./style.css";

class CategoryList extends Component {
    _handleEventInput(e) {
        if (e.key === "Enter") {
            console.log("addCategory")
            let valorCategoria = e.target.value;
            this.props.addCategory(valorCategoria);
        }
    }
    render() {
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {this.props.categories.map((categoria, index) => {
                        return (
                            <li key={index} className="lista-categorias_item">
                                {categoria}
                            </li>
                        );
                    })}
                </ul>
                <input
                    type="text"
                    className="lista-categorias_input"
                    placeholder="Add Category"
                    onKeyUp={this._handleEventInput.bind(this)}
                />
            </section>
        );
    }
}

export default CategoryList;