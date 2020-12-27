import React from "react";
import Tasks from "./Tasks";
// import { Route, Switch, Redirect} from 'react-router-dom';

function App() {
  return (
    <div>
      <header> 
        <h1 className="pageTitle">Productivity Pal</h1>
      </header>


      <Tasks />
      {/* <Switch>
        <Route exact path="/" render={Map} />
        <Route exact path="/about" component={AboutPage} />
        <Route path="/report" component={Form} />
        <Route path="/map/:raceName"></Route>
        <Route exact path="/table" component={Table} />
        <Route exact path="/table/:personName" component={PersonProfile} />
        <Redirect to="/" />
      </Switch> */}

      <footer>
        {/* <address>
          Contact us at <a href="Email@Gmail.com">Email@Gmail.com</a>, or at <a href="tel:866-588-0569">Telephone Number</a>.
        </address> */}
        <p>&copy; 2020</p>
      </footer>
    </div>
  );
}

export default App;
