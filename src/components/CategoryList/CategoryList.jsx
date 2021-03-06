import React, { Component } from 'react';
import "./style.css";

class CategoryList extends Component {

    constructor() {
        super();
        this.state = {categories:[]}
        this._newCategotiasBind = this._newCategories.bind(this);
    }

    componentDidMount() {
        this.props.categories.subscribe(this._newCategotiasBind);
    }

    componentWillUnmount() {
        this.props.categories.unsubscribe(this._newCategotiasBind);
    }

    _newCategories(categories) {
        this.setState({...this.state, categories});
    }

    _handleEventInput(e) {
        if (e.key === "Enter") {
            console.log("addCategory")
            let valorCategoria = e.target.value;
            this.props.addCategory(valorCategoria);
            e.target.value = "";
        }
    }
    render() {
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {this.state.categories.map((categoria, index) => {
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