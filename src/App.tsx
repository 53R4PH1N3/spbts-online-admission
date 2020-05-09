import React, { Suspense } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Preloader } from "components";
import { routes } from "config";

function App() {
  return (
    <Router>
      <Suspense fallback={<Preloader />}>
        <Switch>
          {routes.map(({ exact, path, component }, index) => (
            <Route
              exact={exact}
              path={path}
              component={component}
              key={index}
            />
          ))}
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
