import react, { Component } from 'react';
import NewKegForm from './NewKegForm';
import PropTypes from 'prop-types';

export default class NewKegControl extends Component {

    constructor(props) {
        super(props);
        this.state = {
            canAddKeg: false
        };
        this.handleEmployeeConfirm = this.handleEmployeeConfirm.bind(this);
    }

    handleEmployeeConfirmn(){
        this.setState({canAddKeg:true});
    }

    render(){
        let currentUserView = null;
        if (this.state.canAddKeg){
            currentUserView = <NewKegForm onNewKegCreate={this.props.onNewKegCreate}/>;
        } else {
            currentUserView = <KegList onEmployeeConfirm={this.handleEmployeeConfirm}/>;
        }
        return(
            <div>
                {currentUserView}
            </div>
        );
    }
}

NewKegControl.propTypes = {
    onEmployeeConfirm: PropTypes.func
}