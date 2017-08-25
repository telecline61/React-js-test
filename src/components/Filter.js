import React, { Component } from 'react';

export default class Filter extends Component {

    render() {
        // console.log()
        //create the options for our select
        const createItem = (item, key) =>
        <option key={key} value={item.value} >
        {item.name}
        </option>;

        return (

        <div className="sort-section col-md-12">
            <div className="col-md-6">
            </div>
            <div className="col-md-3">
                <h2 className="sort-title">Filter:</h2>
            </div>
            <div className="col-md-3">
                <select
                  onChange={this.props.selectOption}
                  value={this.value} className="form-control" >
                  {this.props.options.map(createItem)}
                </select>
            </div>
        </div>

    );
  }
}
