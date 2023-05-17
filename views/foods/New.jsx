// form with action="/logs" and method="POST"
import React, { Component } from 'react'
import DefaultLayout from '../layout/Default'


export class New extends Component {
    render() {
        return (
            <DefaultLayout title={'Create New Food Log:'}> 
                <form action="/logs" method="POST">
                    Time: <input type="text" name='time' /> <br /><br />
                    Place: <input type="text" name='place' /> <br /><br />
                    Foods: <input type="text" name='foods' /> <br /><br />
                    Drinks: <input type="text" name='drinks' /> <br /><br />
                    <input type="submit" name='submit' value='Create New Log' />
                </form>
            </DefaultLayout>
        )
    }
}

export default New
