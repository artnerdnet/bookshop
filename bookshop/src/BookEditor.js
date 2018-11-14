import React, { Component } from 'react'
import Book from './book'
import { FaPlus } from 'react-icons/fa'
import './style.css';
import { Link } from 'react-router-dom'

class BookEditor extends Component {
	constructor(props) {
		super(props)
		this.state = {
			books: []
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.renderForm = this.renderForm.bind(this);
		this.add = this.add.bind(this)
		this.edit = this.edit.bind(this);
		this.remove = this.remove.bind(this);
		this.nextId = this.nextId.bind(this)

	}

	handleChange(event) {
		const target = event.target;
		const value = target.type === "checkbox" ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value,
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.onChange(this.title.value, this.genre.value, this.price.value, this.props.index)
		this.setState({
			editing: false
		})
	}

	

	nextId() {
		this.uniqueId = this.uniqueId || 0
		return this.uniqueId++
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

	edit() {
		this.setState({
			editing: true
		})
	}
	remove() {
		this.props.onRemove(this.props.index)
		alert("Book removed")
	}


	renderForm() {
		return (
			<div className="Book">
				<header>
					<div className="container">
						<nav className="navbar">
							<div className="navbar-brand">
								<span className="navbar-item">Book Manager</span>
							</div>
						</nav>
					</div>
				</header>
				<div className="container">
					<div className="columns">
						<div className="column is-9">
							<form className="form" onSubmit={this.handleSubmit}>
								<div className="field">
									<label className="label">Genre</label>
									<div className="control">
										<div className="select">
											<select
												value={this.state.genre}
												name="genre"
												onChange={this.handleChange}
												ref={input => this.genre = input}
											>
												<option value="adventure">Adventure</option>
												<option value="classics">Classics</option>
												<option value="fantasty">Fantasty</option>
												<option value="horror">Horror</option>
												<option value="romance">Romance</option>
												<option value="scifi">Sci-Fi</option>
											</select>
										</div>
									</div>
								</div>

								<div className="field">
									<label className="label">Title</label>
									<div className="control">
										<input
											className="input"
											type="text"
											name="title"
											value={this.state.title}
											onChange={this.handleChange}
											ref={input => this.title = input}
										/>
									</div>
								</div>

								<div className="field">
									<label className="label">Price</label>
									<div className="control">
										<input
											className="input"
											type="number"
											name="price"
											value={this.state.price}
											onChange={this.handleChange}
											ref={input => this.price = input}
										/>
									</div>
								</div>

								<div className="field">
									<div className="control">
										<input
											type="submit"
											value="Submit"
											className="button is-primary"
										/>
									</div>
								</div>
							</form>
						</div>

					</div>
				</div>
			</div>
		);
	}
	render() {
		return (<button onClick={this.add.bind(null, "New Book")}
			id="add">
			<FaPlus />
		</button>
		)
	}
}

export default BookEditor