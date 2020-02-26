import React, {Component} from 'react';
import Modal from '../Components/Modal/Modal';
import Snackbar from '../Components/Snackbar/Snackbar';

import './Overlay.css'

export default class Overlay extends Component {
    constructor() {
        super()
        
        if (Overlay.instance) {
            return Overlay.instance;
        }

        this.state = {modal: null, snackbar: null}

        Overlay.instance = this;
    }


    showModal(content) {
        this.setState({modal: content});
    }
    closeModal = () => {
        this.setState({modal: null});
    }
    modal() {
        if (this.state.modal) {
            return (
                <div className="Overlay">
                    <Modal close={this.closeModal}>
                        {this.state.modal}
                    </Modal>
                </div>
            ); 
        }
        return null
    }

    showSnackbar(text) {
        this.setState({snackbar: text});
    }
    closeSnackbar = () => {
        this.setState({snackbar: null});
    }
    snackbar() {
        if (this.state.snackbar) {
            return <Snackbar close={this.closeSnackbar} text={this.state.snackbar} />
        }
    }
    render() {
        return (
            <>
            {this.modal()}
            {this.snackbar()}
            </>
        );
    }
} 