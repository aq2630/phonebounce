import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import {Home} from '../pages/home';
import {Numbers} from '../pages/numbers'
import {CallRecording} from '../pages/callRecording'

class AppRouter extends React.Component {
    render() {
      
      return(
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />           
            <Route exact path="/numbers" component={Numbers} /> 
            <Route exact path="/features" component={CallRecording} />
            <Route render={() => <Redirect to="/" />} /> 
            </Switch>
        </Router>
      )
    }   
  }
  export default AppRouter;