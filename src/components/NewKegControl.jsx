import React, { Component } from 'react';
import NewKegForm from './NewKegForm';
import PropTypes from 'prop-types';
import Employee from './Employee';

export default class NewKegControl extends Component {

    constructor(props) {
        super(props);
        this.state = {
            canAddKeg: false
        };
        this.handleEmployeeConfirm = this.handleEmployeeConfirm.bind(this);
    }

    handleEmployeeConfirm(){
        this.setState({canAddKeg:true});
    }

    render(){
        let currentUserView = null;
        if (this.state.canAddKeg){
            currentUserView = <NewKegForm onAddingNewKeg={this.props.onAddingNewKeg}/>;
        } else {
            currentUserView = <Employee onEmployeeLogin={this.handleEmployeeConfirm}/>;
        }
        return(
            <div>
                {currentUserView}
            </div>
        );
    }
}

NewKegControl.propTypes = {
    onAddingNewKeg: PropTypes.func
}