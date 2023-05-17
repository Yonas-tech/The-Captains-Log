import React, { Component } from 'react'
import DefaultLayout from './layout/Default';

class Edit extends Component {
    render() {
        return (
            <DefaultLayout title={`Edit Capitain's Log`}>
                <form action={`/logs/${this.props.log._id}?_method=PUT`} method="POST">
                    Title: <input type="text" name='title' defaultValue={this.props.log.title}/> <br /><br />
                    Entry: <input type="textarea" name='entry' defaultValue={this.props.log.entry}/><br /><br />
                    Ship is Broken: <input type="checkbox" name='shipIsBroken' defaultValue={this.props.log.shipIsBroken}/><br /><br />
                    <input type="submit" name='submit' value='Submit Changes' /> 
                </form>
            </DefaultLayout>
        )
    }
}

module.exports= Edit;