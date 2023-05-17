import React, { Component } from 'react'

class Edit extends Component {
    render() {
        return (
            <div>
                <form action="">
                    Title: <input type="text" name='title' defaultValue={this.props.log.title}/> <br /><br />
                    Entry: <input type="textarea" name='entry' defaultValue={this.props.log.entry}/><br /><br />
                    Ship is Broken: <input type="checkbox" name='shipIsBroken' defaultValue={this.props.log.shipIsBroken}/><br /><br />
                    <input type="submit" name='submit' value='Submit Changes' />
                </form>
            </div>
        )
    }
}

module.exports= Edit;