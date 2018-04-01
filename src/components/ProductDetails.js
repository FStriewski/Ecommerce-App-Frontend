import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchProduct} from '../actions/fetchProduct'

class ProductDetails extends PureComponent {
  static propTypes = {
    product: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired
    })).isRequired
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
        <h1>{ product.name }</h1>
        <p>{product.price} €</p>
        <p>{product.description}</p>
        {image}
        <button >Buy this product!</button>
      </div>
    )
  }
}

const mapStateToProps = function (state, props) {
  return {
    product: state.product
  }
}


export default connect(mapStateToProps, { fetchProduct })(ProductDetails)
