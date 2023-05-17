import React, { Component } from 'react'

class Edit extends Component {
    render() {
        return (
            <div>
                <form action={`/foodLogs/${this.props.foundLog._id}?_method=PUT`} method="POST">
                    Time: <input type="text" name='time' defaultValue={this.props.foundLog.time}/> <br /><br />
                    Place: <input type="text" name='place' defaultValue={this.props.foundLog.place}/> <br /><br />
                    Foods: <input type="text" name='foods' defaultValue={this.props.foundLog.foods}/> <br /><br />
                    Drinks: <input type="text" name='drinks' defaultValue={this.props.foundLog.drinks}/> <br /><br />
                    <input type="submit" name='submit' value='Submit Changes' /> 
                </form>
            </div>
        )
    }
}

module.exports= Edit;

// <h2>Time: {this.props.Log.time}</h2>
//         <h2>Place: {this.props.Log.place}</h2>
//         <h2>Foods: {this.props.Log.foods}</h2>
//         <h2>Drinks: {this.props.Log.drinks}</h2>
//         <h4>Log time: </h4><p>{this.props.Log.createdAt.toISOString()}</p>
//         <a href="/">Back to Food Logs List</a>