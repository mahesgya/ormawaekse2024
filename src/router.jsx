import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function Router() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        {/* tambahkan rute untuk halaman lain di sini */}
      </Switch>
    </Router>
  );
}

export default Router;