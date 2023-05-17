import React, { Component } from 'react'
import DefaultLayout from './layout/Default'

export class Show extends Component {
  render() {
    console.log(this.props.Log)
    return (
      <DefaultLayout title={`Show - Captain's Log`}>
        <h2>Title: {this.props.Log.title}</h2>
        <h3 className='entry-head'>Entry:</h3>
        <p style={{whiteSpace: "pre-line"}}>{this.props.Log.entry}</p>
        <h3>Ship is Broken?</h3>
        <p>{this.props.Log.shipIsBroken.toString()}</p>
        <h3>Time the entry was created at: </h3><p>{this.props.Log.createdAt.toISOString()}</p>
        <a href="/logs/">Back to Logs List</a>
      </DefaultLayout>
    )
  }
}
 export default Show
