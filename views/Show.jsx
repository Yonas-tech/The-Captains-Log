import React, { Component } from 'react'

export class Show extends Component {
  render() {
    console.log(this.props.Log)
    return (
      <div>
        <h1>Title: {this.props.Log.title}</h1>
        <h2 className='entry-head'>Entry:</h2>
        <p style={{whiteSpace: "pre-line"}}>{this.props.Log.entry}</p>
        <h2>Ship is Broken?</h2>
        <p>{this.props.Log.shipIsBroken.toString()}</p>
        <h3>Time the entry was created at: </h3><p>{this.props.Log.createdAt.toISOString()}</p>
        <a href="/logs/">Back to Logs List</a>
      </div>
    )
  }
}
 export default Show
