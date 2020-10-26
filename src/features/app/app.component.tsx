import * as React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import ContactListContainer from '../contact-list/contact-list.container';
import ContactDetailsContainer from '../contact-details/contact-details.container';
import { APP_TITLE } from '../../constants';

export const AppComponent: React.FunctionComponent<{}> = () => {
  return (
    <Router>
      <nav className="headerNav">
        <ul>
          <li>
            <Link to="/">{APP_TITLE}</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/user/:id" component={ContactDetailsContainer} />
        <Route path="/" component={ContactListContainer} />
      </Switch>
    </Router>
  );
};

export default AppComponent;
