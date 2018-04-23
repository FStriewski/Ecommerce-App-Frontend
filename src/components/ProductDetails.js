import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchProduct} from '../actions/fetchProduct'
import { updateProduct } from '../actions/updateProduct'
// import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ProductForm from './ProductForm'


class ProductDetails extends PureComponent {
  static propTypes = {
    product: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired
    })).isRequired
  }

  state = {
    edit: false
  }

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit
    })
  }

  updateProduct = (product) => {
    this.props.updateProduct(this.props.match.params.id, product)
    this.toggleEdit()
  }

  componentWillMount(props) {
    this.props.fetchProduct(this.props.match.params.id)
  }

  render() {
    const {product} = this.props
    if (!product) return null

    let image = null;
    if (product.image) {
      image = <img alt="productimage"/>
    }

    return (
      <div >
        {/* In edit mode display: */}
        {
          this.state.edit &&
          <ProductForm initialValues={product} onSubmit={this.updateProduct} />
        }
        {/* Else display description: */}
        {
          !this.state.edit && product &&
          <div>

        <h1>{ product.name }</h1>

        <p>{product.price} €</p>
        <p>{product.description}</p>
        {image}
        <button >Buy this product!</button>
          </div>
        }

        <button onClick={this.toggleEdit}> Edit </button>
        <Link to="/products">Back </Link>
      </div>
    )
  }
}

const mapStateToProps = function (state, props) {
  return {
   product: state.product
  }
}


export default connect(mapStateToProps, { fetchProduct, updateProduct })(ProductDetails)
