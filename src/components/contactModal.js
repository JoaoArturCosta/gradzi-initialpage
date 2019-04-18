import React, { Component } from 'react';
import { Modal, Heading,Subhead, Fixed, Text, Flex, Relative, Absolute,NavLink, Input, Button, Small,Close} from 'rebass'
import axios from 'axios';

class ContactsModal extends React.Component {
    state = {
        open:false,
        email: '',
        sent: false,
        buttonText: 'Send Message'

    };

    handleOpen = () => {
        this.setState({ open: true});
    };

    handleClose = () => {
        this.setState({ open: false});
    };

    resetForm = () => {
        this.setState({
            name: '',
            message: '',
            email: '',
            buttonText: 'Message Sent'
        })
    };


    formSubmit = (e) => {
        e.preventDefault()
    
        this.setState({
            buttonText: '...sending'
        })
    
        let data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }
        
        axios.post('API_URI', data)
        .then( res => {
            this.setState({ sent: true }, this.resetForm())
        })
        .catch( () => {
        console.log('Message not sent')
        })
    }
  

    render(){
        const { classes } = this.props;

        return(
            <div>
                <Button onClick={this.handleOpen} color='white' bg='#46da84' p='10' width={1/4} borderRadius={20}>Junta-te a Nós</Button>
                <div>
                {this.state.open && (
                    <div>
                    <Fixed
                        top={0}
                        right={0}
                        bottom={0}
                        left={0}
                    />
                    <Modal width={650} borderRadius={20} >
                        <Flex alignItems='left'>
                            <Close onClick={this.handleClose}/>
                        </Flex>
                        <Subhead textAlign='center' mt={3}>Acompanha-nos. Sê o primeiro a usufruir!</Subhead>
                        <Flex flexDirection='row' mt={4} mb={5} justifyContent='center' flexWrap='wrap'>
                            <Input placeholder='    Email' width={3/4} borderColor='green' borderRadius={20} 
                                onChange={(e) => this.setState({ email: e.target.value})} value={this.state.email} />
                            <Button ml='2' color='white' bg='#46da84' width={1/4} borderRadius={20} onSubmit={this.formSubmit}>{this.state.buttonText}</Button>
                      </Flex>
                    </Modal>
                    </div>
                )}
                </div>
            </div>
        );
    }
}

export default ContactsModal;