import React, { Component } from 'react';
import { Provider, Heading, Subhead, Text, Flex, Relative, Absolute,NavLink, Input, Button, Small,} from 'rebass'
//import { NavLink } from 'react-router-dom'
import './App.css';
import {
  Hero, CallToAction, ScrollDownIndicator,Phone, SignUp
} from 'react-landing-page'
import ContactModal from './components/contactModal'



class App extends Component {
  render() {
    return (
      <div className="App" >
      <Provider >
        <Relative pb={2}>
          <Absolute zIndex={1} left={0} right={0} top={0}>
              <Flex is="header" p={3} bg='transparent' >
              <NavLink to="#" pl='5' fontSize={3} color='white'>Link 2</NavLink>
                  <NavLink to="#" mr='auto' fontSize={3} color='white'>Link 1</NavLink>
                  
                  <NavLink to="/" pr='5' fontSize={6} color='#2e7d32'>Gradzi</NavLink>
              </Flex>
          </Absolute>
        </Relative>
        
        <Hero
          color='Black'
          bg='transparent'
          backgroundImage='./assets/Bg-Gradient.jpeg'
        >
            <Flex  alignItems='center' width={[7/10]}>
              <Flex alignItems='left' width={[ 1 / 2]} >
                  <Phone src='https://via.placeholder.com/230x470' color='white'
                        style={{transform: 'translate(12px, -15px)'}} />
                  <Phone src='https://via.placeholder.com/240x470' color='black' 
                      style={{transform: 'translate(-80px, 0px)'}} />
              </Flex>
                <Flex width={[ 1 / 2]} alignItems='left' flexDirection='column' p={3} ml='6' >
                    <Heading textAlign='left' fontSize={[52]}>O teu tempo livre vale dinheiro.</Heading>
                    <Text color='grey' textAlign='left' fontSize={[1, 2]} mt='4'>
                       No carro, no metro ou na fila do talho 
                       ajuda as tuas marcas favoritas a criar os produtos que tu realmente queres.
                    </Text>
                    <Text color='grey' textAlign='left' fontSize={[1, 2]}>
                      E ainda recebes discontos nos teus produtos favoritos!
                    </Text>
                      {/* <Flex mt={5}  justifyContent='center' flexDirection='column'>
                          <CallToAction color='white' bg="black" mb={2}> App store</CallToAction>
                          <CallToAction color='white' bg="black" mb={2}>Google Play</CallToAction>
                      </Flex> */}
                    {/* <Subhead textAlign='left' mt={3}>Acompanha-nos. Sê o primeiro a usufruir!</Subhead> */}
                    <Flex flexDirection='row' mt={4} justifyContent='center' flexWrap='wrap'>
                      {/* <Input placeholder='Email' width={3/4} borderColor='green' borderRadius={800}/>
                      <Button ml='2' color='white' bg='#46da84' width={1/4} borderRadius={800} onSubmit={(email) => alert(`got ${email}`)}>Sign In</Button> */}
                      <ContactModal/>
                    </Flex>
                </Flex>
                
                
            </Flex>
            {/* <ScrollDownIndicator /> */}
        </Hero>
        <Flex is="footer" alignItems="center" p={1}>
            <NavLink children="Link 1" href="#" ml={5}/>
            <NavLink children="Link 2" href="#"/>
            <Small color="grey" ml="auto" mr={5}>© Gradzi, 2018</Small>
        </Flex>
      </Provider>
        
      </div>
    );
  }
}

export default App;
