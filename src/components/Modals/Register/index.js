import React, {Component} from 'react';
import './style.css';

export default class Register extends Component {
    closeModal = () => {
        this.props.onChangeState();
    };
    
    render(){
        if (!this.props.show) {
            return null;
        }
        return(
            <>
                <div className="backgroundModal" onClick={this.closeModal}/>
                <div className="modal">
                    <div className="headerModal">

                    </div>
                    <div className="contentModal">
                        asdlkasdjalskdjasdkljasld
                    </div>
                    <div className="footerModal">

                    </div>
                </div>
            </>
        )
    }
}