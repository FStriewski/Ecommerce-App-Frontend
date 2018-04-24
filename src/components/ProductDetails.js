import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchProduct} from '../actions/fetchProduct'
import { updateProduct } from '../actions/updateProduct'
// import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ProductForm from './ProductForm'
import * as combine from "lodash/fp/compose"
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    maxWidth: 345,
    margin: '3%',
  },
  media: {
    height: 0,
    paddingTop: '36.25%', // 16:9
  },
};

// function ProductDetails(props) {
  class ProductDetails extends React.Component {

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
    const { product,classes } = this.props
    if (!product) return null

    let image = null;
    if (product.image) {
      image = <img alt="productimage" />
    }


  return (
    <div>      {/* In edit mode display: */}
      <Link to="/products">Back </Link>
      {
        this.state.edit &&
        <ProductForm initialValues={product} onSubmit={this.updateProduct} />
      }
      {
        !this.state.edit && product &&
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
                {product.name}
            </Typography>
            <Typography component="p">
                <p>{product.price}€ </p>
                <p>{product.description}</p>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Buy this product!
            </Button>
          </CardActions>
        </Card>
      }
  
      <Button onClick={this.toggleEdit}> Edit </Button>
      
    </div>



  );
}

//    propTypes = {
//   product: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     description: PropTypes.string.isRequired
//   })).isRequired
// }

}


const mapStateToProps = function (state, props) {
  return {
    product: state.product
  }
}

export default combine(
  withStyles(styles),
  connect(mapStateToProps, { fetchProduct, updateProduct })
)(ProductDetails)








// class ProductDetails extends PureComponent {
//   static propTypes = {
//     product: PropTypes.arrayOf(PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//       price: PropTypes.number.isRequired,
//       description: PropTypes.string.isRequired
//     })).isRequired
//   }




// const mapStateToProps = function (state, props) {
//   return {
//    product: state.product
//   }
// }


// export default connect(mapStateToProps, { fetchProduct, updateProduct })(ProductDetails)
