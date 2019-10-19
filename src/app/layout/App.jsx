/* eslint-disable no-unused-expressions */
import React, {Component, Fragment} from 'react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import NavBar from '../../features/nav/navBar/NavBar';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import EventDetailPage from '../../features/events/EventDetailed/EventDetailedPage';
import EventForm from '../../features/events/EventForm/EventForm';
import SettingsDashboard from '../../features/user/Settings/SettingDashboard'
import UserDetailedPage from '../../features/user/UserDetailed/UserDetailedPage'
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard'

class App extends Component{
  render(){
    return (
        <Fragment>

            <Route exact path='/' component={HomePage} />
            <Route 
              path='/(.+)'
              render={()=>(
              <Fragment>
                <NavBar/>
                <Container className="main">
          
                  <Route path='/events' component={EventDashboard} />
                  <Route path='/events/:id' component={EventDetailPage} />
                  <Route path='/people' component={PeopleDashboard} />
                  <Route path='/profile/:id' component={UserDetailedPage} />
                  <Route path='/settings' component={SettingsDashboard} />
                  <Route path='/createEvent' component={EventForm} />
                </Container>
              </Fragment>
              )}/>
       </Fragment> 
    );
  }

}

export default App;
