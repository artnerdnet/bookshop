import React, { Component } from "react"
import './style.css'
import { FaPencilAlt } from 'react-icons/fa'
import { FaTrash } from 'react-icons/fa'


class Book extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        genre: "",
        title: "",
        price: "",
        picture: ""
      }
      this.renderDisplay = this.renderDisplay.bind(this);

    }

    render() {
      return (
        this.state.editing ? this.renderForm() : this.renderDisplay()

      );
    }
  

  renderDisplay() {
    return (
      <div className="book">
        <p>{this.props.children}</p>
        <span>
          <button onClick={this.edit} id="edit"><FaPencilAlt /></button>
          <button onClick={this.remove} id="remove"><FaTrash /></button>
        </span>
      </div>
    )
  }
}
  export default Book;