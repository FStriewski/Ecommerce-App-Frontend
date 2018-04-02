import React, {PureComponent} from 'react'
import './components.css'


class ProductForm extends PureComponent {
	state = {}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state)
	}

	handleChange = (event) => {
    const {name, value} = event.target

    this.setState(
		 (name === "price") 
		 ?  { price: Number(value) } 
		:  { [name]: value }
	)
  }

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label htmlFor="name">Product name &nbsp;</label>
					<input name="name" id="name" value={
						this.state.name || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="price">Product price &nbsp;&nbsp;</label>
					<input name="price" id="price" value={
						Number(this.state.price) || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="description">Description &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
					<input name="description" id="description" value={
						this.state.description || ''
					} onChange={ this.handleChange } />
				</div>

				<button type="submit">Save</button>
			</form>
		)
	}
}

export default ProductForm
