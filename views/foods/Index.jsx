import React, { Component } from 'react'
import DefaultLayout from '../layout/Default';

export class Index extends Component {
  render() {
    return (
      <DefaultLayout title={'Food Logs Index'}>
        <ul>
            {this.props.allLogs.map((log, idx) => {
              return (
              <li key={idx}>
                
                <a href={`/foodLogs/${log._id}`}><h4>Time: {log.time} || Food: {log.foods} || Drinks: {log.drinks}</h4></a> 

                <form action={`/foodLogs/${log._id}?_method=DELETE`} method='POST'>
                  <input type="submit" value="DELETE" /> 
                </form>

                <form action={`/foodLogs/${log._id}/edit`} >
                  <input type="submit" value="EDIT" /> 
                </form>
                 
              </li>)
            })}
        </ul>
        <nav>
          <a href="/foodLogs/new">Enter A New Log</a>
        </nav>
      </DefaultLayout>
    )
  }
}

export default Index


// time: String,
//     place: String,
//     foods: { type: [String], default: ['none'] },
//     drinks: { type: [String], default: ['none'] },
//     thoughts: String,
//     },
//     { timestamps: true }