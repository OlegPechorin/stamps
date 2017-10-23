import React, {Component as ReactComponent} from 'react'

export default (OriginalComponent) => class toggleTabs extends ReactComponent {
  state = {
    openTabNumber: 0
  }

  render() {
    return (
      <OriginalComponent {...this.props}
        openTabNumber={this.state.openTabNumber}
        toggleTab={this.toggleTab}
      />
    )
  }

  toggleTab = (openTabNumber, event) => { // stage-0 syntax
    event && event.preventDefault && event.preventDefault()
    this.state.openTabNumber !== openTabNumber ? this.setState({openTabNumber}) : null
  }
}
