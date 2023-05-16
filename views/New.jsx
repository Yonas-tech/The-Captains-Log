// form with action="/logs" and method="POST"
import React, { Component } from 'react'

export class New extends Component {
    render() {
        return (
            <div>
                <form action="/logs" method="POST">
                    Title: <input type="text" name='title' /> <br /><br />
                    Entry: <input type="textarea" name='entry' /><br /><br />
                    Ship is Broken: <input type="checkbox" name='shipIsBroken' /><br /><br />
                    <input type="submit" name='submit' value='Create New Log' />
                </form>
            </div>
        )
    }
}

export default New
