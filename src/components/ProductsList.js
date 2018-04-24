import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import LogOutPage from './userHandling/LogOutPage'
import {connect} from 'react-redux'
import {fetchAllProducts} from '../actions/fetchProduct'
import { removeProduct } from '../actions/removeProduct'
import {createProduct} from '../actions/createProduct'
import {Link, Redirect } from 'react-router-dom'
import ProductForm from './ProductForm'
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import * as combine from "lodash/fp/compose"
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 1,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});


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

  removeProduct = (productId) => {
  this.props.removeProduct(productId)
}

  render() {
    const {products, classes} = this.props
    return (
      <Paper className={classes.root}>
        <h1>Products</h1>
        
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Add new product...</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <ProductForm onSubmit={this.createProduct} />
          </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <Table className={classes.table}>
          <TableHead>
            <TableRow>

              <TableCell numeric>#</TableCell>
              <TableCell numeric>Title</TableCell>
              <TableCell numeric>Author</TableCell>
              <TableCell numeric>Price</TableCell>
              <TableCell numeric>Delete</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {products
            .sort((p1, p2) => (p2.price - p1.price))
            .map(product => {
              return (
                <TableRow key={product.id}>
                  <TableCell numeric>{product.id}</TableCell>
                  <TableCell><Link to={`/products/${product.id}`}>{product.title}</Link></TableCell>
                  <TableCell numeric>{product.author}</TableCell>
                  <TableCell numeric>{product.price}.00</TableCell>
                  <TableCell numeric> <button onClick={() => this.removeProduct(product.id)}> X </button></TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

//  <h1>Create a new product</h1>
//               <ProductForm onSubmit={this.createProduct} />

const mapStateToProps = function (state) {
  return {
    // currentUser: state.currentUser,
    products: state.products
  }
}

export default combine(
  withStyles(styles),
  connect(mapStateToProps, { fetchAllProducts, createProduct, removeProduct })
)(ProductsList)