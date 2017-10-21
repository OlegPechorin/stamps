import React, {Component as ReactComponent} from 'react'

export default (OriginalComponent) => class WrappedComponent extends ReactComponent {
  state = {
    isOpen: false
  }

  render() {
    return (
      <OriginalComponent {...this.props} isOpen={this.state.isOpen} toggleOpen={this.toggleOpen} />
    )
  }

  toggleOpen = (event) => { // stage-0 syntax
    event && event.preventDefault && event.preventDefault()
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}
