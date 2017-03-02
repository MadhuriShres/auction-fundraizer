import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'; 
import  Home from './home.jsx';

const Routes = () => {
   
    return (
        <Router history={browserHistory}> 
            <Route path = "/" >
                <IndexRoute component={Home} />
                 <Route path = "/Cloth" component={Home}  />

            </Route>
        </Router>
    );
}
    

render(<Routes />, document.getElementById('app'));
