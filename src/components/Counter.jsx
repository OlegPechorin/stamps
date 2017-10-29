import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import {connect} from 'react-redux'
import {increment} from '../AC'

class Counter extends Component {
  static propTypes = {
    counter: PropTypes.number,
    increment: PropTypes.func.isRequired
  }

  render() {
    return (
      <Button onClick={this.handleIncrement}>{'count: ' + this.props.counter}</Button>
    )
  }

  handleIncrement = () => {
    const {increment} = this.props
    increment()
  }
}

export default connect((state) => ({
  counter: state.counter
}), {increment})(Counter)
