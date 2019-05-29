import React from 'react'

export class ClassComponent extends React.Component {
  componentDidMount() {
    console.log('componentDidMount')
  }

  render() {
    const { value } = this.props
    return <h1>{value}</h1>
  }
}
