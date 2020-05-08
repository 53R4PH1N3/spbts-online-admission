import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "config";
import { Preloader } from "components";

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
