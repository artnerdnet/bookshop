import React, { Component } from 'react'
import Book from './book'
import { FaPlus } from 'react-icons/fa'
import './style.css';


class Shelf extends Component {
	constructor(props) {
		super(props)
		this.state = {
			books: []
		}
		this.add = this.add.bind(this)
		this.eachBook = this.eachBook.bind(this)
		this.update = this.update.bind(this)
		this.remove = this.remove.bind(this)
		this.nextId = this.nextId.bind(this)
	}

	add(text) {
		this.setState(prevState => ({
			books: [
				...prevState.books,
				{
					id: this.nextId(),
					title: 'Title',
					genre: 'Genre',
					price: null,
					picture: null
				}
			]
		}))
	}

	nextId() {
		this.uniqueId = this.uniqueId || 0
		return this.uniqueId++
	}

	update(title, genre, price, i) {
		this.setState(prevState => ({
			books: prevState.books.map(
				book => (book.id !== i) ? book : {...book, title: title, genre: genre, price: price}
			)
		}))
	}

	remove(id) {
		this.setState(prevState => ({
			books: prevState.books.filter(book => book.id !== id)
		}))
	}

	eachBook(book, i) {
		return (
			<Book key={i}
				  index={i}
				  onChange={this.update}
				  onRemove={this.remove}>
				<p className='cover'>{book.picture}</p>
				  <p className='genre'>{book.genre}</p>
				  <p className='title'>{book.title}</p>
				  <p className='price'>${book.price}</p>
		    </ Book>
		)
	}

	render() {
		return (
			<div className="shelf">
				{this.state.books.map(this.eachBook)}
				<button onClick={this.add.bind(null, "New Book")}
						id="add">
					<FaPlus />
				</button>
			</div>
		)
	}
}

export default Shelf