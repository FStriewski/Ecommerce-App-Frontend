import React, {PureComponent} from 'react'
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';

const styles = theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	formControl: {
		margin: theme.spacing.unit,
	},
});

class ProductForm extends React.Component {
	state = {	};

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state)
	}

	handleChange = (event) => {
		const { name, value } = event.target

		this.setState(
			(name === "price")
				? { price: Number(value) }
				: { [name]: value }
		)
	}

	render() {
		const { classes } = this.props
		const initialValues = this.props.initialValues || {}

		return (
			<div className={classes.container}>
				<form onSubmit={this.handleSubmit}>
					<FormControl className={classes.formControl}>
						<InputLabel htmlFor="product-name">Product name</InputLabel>
						<Input id="product-name" name="name" value={this.state.name || initialValues.name || ''} onChange={this.handleChange} />
					</FormControl>

					<FormControl className={classes.formControl}>
						<InputLabel htmlFor="product-price">Product price</InputLabel>
						<Input id="product-price" name="price" value={this.state.price || initialValues.price || ''} onChange={this.handleChange} />
					</FormControl>

					<FormControl className={classes.formControl}>
						<InputLabel htmlFor="product-desc">Product description</InputLabel>
						<Input id="product-desc" name="description" value={this.state.description || initialValues.description || ''} onChange={this.handleChange} />
					</FormControl>
					<button type="submit">Save</button>
				</form>
			</div>
		);
	}
}


export default withStyles(styles)(ProductForm);



