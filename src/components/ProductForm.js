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
		const initialValues = this.props.initialValues ||  {}
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label htmlFor="name">Product name &nbsp;</label>
					<input name="name" id="name" value={
						this.state.name || initialValues.name || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="price">Product price &nbsp;&nbsp;</label>
					<input name="price" id="price" value={
						Number(this.state.price)  || initialValues.price || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="description">Description &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
					<input name="description" id="description" value={
						this.state.description || initialValues.description || ''
					} onChange={ this.handleChange } />
				</div>

				<button type="submit">Save</button>
			</form>
		)
	}
}

export default ProductForm
