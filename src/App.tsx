import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Tags from 'views/Tags/index';
import Money from 'views/Money/index';
import Statistics from 'views/Statistics';
import NoMatch from 'views/NoMatch';
import TagDetail from 'views/Tags/TagDetail';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/money" />
        </Route>
        <Route exact path="/tags">
          <Tags />
        </Route>
        <Route exact path="/tags/:tag">
          <TagDetail />
        </Route>
        <Route exact path="/money">
          <Money />
        </Route>
        <Route exact path="/statistics">
          <Statistics />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}
