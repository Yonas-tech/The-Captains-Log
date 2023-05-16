import React, { Component } from 'react'

export class Index extends Component {
  render() {
    return (
      <div>
        <h1>Logs List Page</h1>
        <ul>
          
            {this.props.allLogs.map((log, idx) => {
              return <li key={idx}><h2>{log.title}</h2></li>
            })}
        </ul>
        <nav>
          <a href="/logs/new">Enter A New Log</a>
        </nav>
      </div>
    )
  }
}

export default Index