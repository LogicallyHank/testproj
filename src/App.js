import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';
import ClaimSeat from './components/seats/ClaimSeat';
import ReserveSeat from './components/seats/ReserveSeat';
import DisplaySeats from './components/seats/DisplaySeats';
import DrawGrid from './components/seats/DrawGrid';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/project/:id' component={ProjectDetails}/>
          <Route path='/signin' component={SignIn}/>
          <Route path='/signup' component={SignUp}/>
          <Route path='/create' component={CreateProject}/>
          <Route path='/reserve' component={ReserveSeat}/>
          <Route path='/claim' component={ClaimSeat}/>
          <Route path='/display' component={DisplaySeats}/>
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
