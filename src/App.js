import React , { useEffect } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar  from './components/NavigationBar';
import Home from './components/Home/Home';
import Set from './components/SetData/Set';
import Results from './components/Results/Results';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

ReactGA.initialize('UA-175788401-1');
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

function App() {

  return (
    <div >
    <React.Fragment>
      <Router history={history}>
      <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/set" render={(props) => <Set {...props} index={0} />}  />
          <Route exact path="/set/parameters" render={(props) => <Set {...props} index={1} />}  />
          <Route exact path="/results" render={(props) => <Results state={props.location.state} />}/>
          {/* <Route exact path="/calculating" render={(props) => <Calculating {...props} projectName={props.location.state} />}></Route> */}
        </Switch>
      </Router>
    </React.Fragment>
    </div>
  );
}

export default App;
