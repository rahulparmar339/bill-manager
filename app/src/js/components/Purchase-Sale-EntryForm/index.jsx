import React from 'react'
import ReactDom from 'react-dom'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Save from '@material-ui/icons/Save';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
  button: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: theme.spacing.unit + 15,
    width: 200,
    height: 20
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  }
})

class Form extends React.Component{
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      name : "ABC",
      nameError : "",
      date : "2017-05-24",
      dateError : "",
      item : "itemName",
      itemError : "",
      price : 0,
      priceError : "",
      quantity : 0,
      quantityError : "",
      tax : 0,
      taxError : "",
      extra : 0,
      extraError : "",
      total : 0,
      totalError : "",
      remark : "",
      remarkError : ""
    }
  }

  handleSubmit = event => {

  }

  handleChange = name => event => {
    this.setState({[name]: event.target.value}, ()=> console.log(this.state))
  };

  render(){
    const { classes } = this.props;
    return(
        <form onSubmit={this.handleSubmit} className={classes.container} noValidate autoComplete="off">
          <TextField
            id="select-name-native"
            select
            label="Native select"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('name')}
            SelectProps={{
              native: true,
              MenuProps: {
                className: classes.menu,
              },
            }}
            helperText="Please select name"
            margin="normal"
          >
            {['ABC','ABCD','ABCDE'].map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </TextField>
          <TextField
            id="date"
            label="Entry Date"
            type="date"
            value={this.state.date}
            onChange={this.handleChange('date')}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
          />
          <TextField
            id="item"
            label="Item"
            className={classes.textField}
            value={this.state.item}
            onChange={this.handleChange('item')}
            margin="normal"
          />
          <TextField
            id="price"
            label="Price"
            value={this.state.price}
            onChange={this.handleChange('price')}
            type="number"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
          />
          <TextField
            id="quantity"
            label="Quantity"
            value={this.state.quantity}
            onChange={this.handleChange('quantity')}
            type="number"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
          />
          <TextField
            id="tax"
            label="Tax"
            value={this.state.tax}
            onChange={this.handleChange('tax')}
            type="number"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
          />
          <TextField
            id="extra"
            label="Extra"
            value={this.state.extra}
            onChange={this.handleChange('extra')}
            type="number"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
          />
          <TextField
            id="total"
            label="Total"
            value={this.state.total}
            onChange={this.handleChange('total')}
            type="number"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
          />
          <TextField
            id="remark"
            label="Enter Remark"
            placeholder="Remark"
            value = {this.state.remark}
            onChange = {this.handleChange('remark')}
            multiline
            className={classes.textField}
            margin="normal"
          />
          <Button type="submit" className={classes.button} variant="raised" size="small">
            <Save className={classNames(classes.leftIcon, classes.iconSmall)} />
            Save
          </Button>
        </form>   
    )
  }

}


Form.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Form) 


