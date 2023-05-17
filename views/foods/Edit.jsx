import React, { Component } from 'react'
import DefaultLayout from '../layout/Default';

class Edit extends Component {
    render() {
        return (
            <DefaultLayout title={'Edit Food Log'}>
                <form action={`/foodLogs/${this.props.foundLog._id}?_method=PUT`} method="POST">
                    Time: <input type="text" name='time' defaultValue={this.props.foundLog.time}/> <br /><br />
                    Place: <input type="text" name='place' defaultValue={this.props.foundLog.place}/> <br /><br />
                    Foods: <input type="text" name='foods' defaultValue={this.props.foundLog.foods}/> <br /><br />
                    Drinks: <input type="text" name='drinks' defaultValue={this.props.foundLog.drinks}/> <br /><br />
                    <input type="submit" name='submit' value='Submit Changes' /> 
                </form>
            </DefaultLayout>
        )
    }
}

module.exports= Edit;
