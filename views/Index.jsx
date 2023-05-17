import React, { Component } from 'react'
import DefaultLayout from './layout/Default'

export class Index extends Component {
  render() {
    return (
      <DefaultLayout title={"Captain Logs Index"}>
        <ul>
            {this.props.allLogs.map((log, idx) => {
              return (
              <li key={idx}>
                
                <a href={`/logs/${log._id}`}><h2>{log.title}</h2></a>

                <form action={`/logs/${log._id}?_method=DELETE`} method='POST'>
                  <input type="submit" value="DELETE" /> 
                </form>

                <form action={`/logs/${log._id}/edit`} >
                  <input type="submit" value="EDIT" /> 
                </form>
                 
              </li>)
            })}
        </ul>
        <nav>
          <a href="/logs/new">Enter A New Log</a>
        </nav>
      </DefaultLayout>
    )
  }
}

export default Index