import React from 'react';
import { Container, Header, Icon } from 'semantic-ui-react';

const Signup = ( props ) => {
    return (
        <Container className='Contact' fluid>          
          <Header as='h1' icon>
            <Header.Content className='Contact__Header'>
            <Icon 
              name='handshake outline'
              size='massive'
              />
              Become a Mentor!
              </Header.Content>
          </Header>
          <Header.Content className='Contact__Subheader'>
              We're so pleased to hear you want to join us as a Mentor - please send us an email with some information about yourself by clicking <a href="mailto:info@maslaha.org?Subject=Conncected%20Learning%20Volunteer%20Signup%20Request">here</a>.
          </Header.Content>
          </Container>
    )
};

export default Signup;