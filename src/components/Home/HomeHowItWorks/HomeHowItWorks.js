import React from 'react';
import { Container, Header, Grid, Icon } from 'semantic-ui-react';

const HomeHowItWorks = () => (
  <Container textAlign='center'>
    <Header 
      as='h1'
      style={{
        margin: '5%',
        fontSize: '50px'
        }}>
        How it Works
    </Header>
    <Grid columns={3}>
      <Grid.Row>
        <Grid.Column>
          <Header as='h2' icon>
            <Icon 
              name='address card'
              size='massive'/>
                Browse our Mentors
            <Header.Subheader style={{marginTop: '5%'}}>
              We have a range of volunteer mentors who we hope can help with with any request you have about supporting your child's learning - this includes teachers, other parents, tech experts and people who do communities and education work!
            </Header.Subheader>
          </Header>
        </Grid.Column>
        <Grid.Column>
          <Header as='h2' icon>
            <Icon
            name='envelope'
            size='massive'/>
              Send a Help Request
            <Header.Subheader style={{marginTop: '5%'}}>
            Send us a message about what you would like help with. This can be in English or in any other language that you can see listed on the language options.
            </Header.Subheader>
          </Header>
        </Grid.Column>
        <Grid.Column>
          <Header as='h2' icon>
            <Icon 
              name='comments'
              size='massive'/>
                Connected Learning
            <Header.Subheader style={{marginTop: '5%'}}>
            Our volunteer mentors can hopefully help with your request by sharing resources, advice and having a chat!
            </Header.Subheader>
          </Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
)

export default HomeHowItWorks;