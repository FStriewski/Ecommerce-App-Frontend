import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import LogOutPage from './userHandling/LogOutPage'
import {connect} from 'react-redux'
import {fetchAllProducts} from '../actions/fetchProduct'
import { removeProduct } from '../actions/removeProduct'
import {createProduct} from '../actions/createProduct'
import {Link} from 'react-router-dom'
import { Redirect } from 'react-router-dom'

import ProductForm from './ProductForm'


class ProductsList extends PureComponent {
  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    })).isRequired
  }

  componentWillMount() {
    this.props.fetchAllProducts()
  }

  createProduct = (product) => {
  this.props.createProduct(product)
}

  removeProduct = (product) => {
  this.props.removeProduct(product)
}

  render() {
    const {products} = this.props


    return (
      <div>
        <Link to={'/logout'} component={LogOutPage} className="logout" onClick={<Redirect to="/logout" />}>Log Out</Link>
        
        <h1>All products</h1>

        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            { products.map(product => (<tr key={product.id}>
              <td>{product.id}</td>
              <td>
                <Link to={ `/products/${product.id}` }>{product.name}</Link>
              </td>
              <td>&euro; {product.price}.00</td>
              {/* <td><button onClick={this.removeProduct}>X</button></td> */}
            </tr>)) }
          </tbody>
				</table>

        <h1>Create a new product</h1>
        <ProductForm onSubmit={this.createProduct} />
      </div>
    )
  }
}



const mapStateToProps = function (state) {
  return {
    currentUser: state.currentUser,
    products: state.products
  }
}

//const mapStateToProps = ({ products }) => ({ products })
export default connect(mapStateToProps, { fetchAllProducts, createProduct,removeProduct })(ProductsList)
