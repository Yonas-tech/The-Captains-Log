import React, { Component } from 'react'
import DefaultLayout from '../layout/Default'

export class Show extends Component {
  render() {
    // console.log(this.props.Log)
    return (
      <DefaultLayout title={'Food Log'}>
        <h2>Time: {this.props.Log.time}</h2><hr /><hr />
        <h2>Place: </h2><p>{this.props.Log.place}</p>
        <h2>Foods: </h2><p>{this.props.Log.foods}</p>
        <h2>Drinks: </h2><p>{this.props.Log.drinks}</p>
        <h4>Log time: </h4><p>{this.props.Log.createdAt.toISOString()}</p>
        <a href="/foodLogs">Back to Food Logs List</a>
      </DefaultLayout>
    )
  }
}

export default Show
