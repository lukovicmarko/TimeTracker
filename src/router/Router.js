import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from '../components/App';
import Time from '../components/pages/Time';
import Expense from '../components/pages/Expense';
import Projects from '../components/pages/Projects';
import Reports from '../components/pages/Reports';
import NavBar from '../components/layout/NavBar';

const AppRouter = () => {
    return (
        <div className="layout">
            <Router>
                <NavBar />
                <Switch>
                    {/* <Route  path="/" component={App} /> */}
                    <Route exact path="/" component={Time} />
                    <Route path="/expense" component={Expense} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/reports" component={Reports} />
                </Switch>
            </Router>
        </div>
    )
}

export default AppRouter