import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './common/Header';
import StartPage from './startpage/StartPage';
import ManageOrderPage from './order/ManageOrderPage';
import { Container } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <Container style={{ padding: '1rem 0rem'}}>
        <Header/>
        <Switch>
          <Route exact path='/' component={StartPage}/>
          <Route exact path='/order' component={ManageOrderPage} />
          {/*<Route path='/orders/:id' component={OrderPage}/>*/}
        </Switch>
      </Container>
    );
  }
}

export default App;
