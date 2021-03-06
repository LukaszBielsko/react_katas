import React from 'react'

class BugSimulator extends React.Component {

  state = {
    isComponentBuggy: false
  }

  handleBug = () => {
    this.setState({ isComponentBuggy: true })
  }

  render() {
    if (this.state.isComponentBuggy) throw new Error('this is a bug :()')

    return (
      <button onClick={this.handleBug}>{this.props.text}</button>
    )
  }
}

export default BugSimulator



