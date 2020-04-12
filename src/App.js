import React, { Component } from 'react';
import 	{ 
  Switch, 
  Route,
  Redirect
} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'

import './App.css';
import Layout from './components/Layout/Layout';
import Home from './containers/Home/Home';
import Signup from './containers/Signup';
import Login from './containers/Login';
import NotFound from './containers/NotFound';
import AskForHelp from './containers/AskForHelp'
import AskAQuestion from './containers/AskAQuestion';
import Mentors from './containers/Mentors';


class App extends Component {
  render() {
    let routes = (
      <Switch>
      <Route path="/" exact={true} component={Home} />
      
      <Route path="/volunteer-with-us" component={Signup} />
      <Route path="/login" render={() => (
        // TODO: Add User Token and isAuthorised to localStorage once user has been authorised
        localStorage.getItem('user') ? <Redirect to={{ pathname: '/login', state: '/messages' }}/> : <Login/>
      )} />
      <Route path="/messages" render={() => (
        // TODO: Replace <NotFound/> placeholder
        localStorage.getItem('user') ? <NotFound/> : <Redirect to={{ pathname: '/login', state: '/messages' }}/>
      )}/>
      <Route path="/ask-for-help" component={AskForHelp} />
      <Route path="/our-mentors" component={Mentors}/>
      <Route path="/ask-a-question" component={AskAQuestion} />
      <Route path="*" component={NotFound}/>
    </Switch>

    )
    return (
      <div className='App'>
      <Layout>
        {routes}
      </Layout>
      </div>
    );
  }
}

export default App;