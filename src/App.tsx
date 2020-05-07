import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "config";

function App() {
  return (
    <Router>
      <Switch>
        {routes.map(({ exact, path, component }, index) => (
          <Route exact={exact} path={path} component={component} key={index} />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
