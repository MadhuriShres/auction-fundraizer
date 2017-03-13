import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'; 
import  Home from './home.jsx';
import Faq from './faq.jsx';
import Delivery from './delivery.jsx';
import Size from './size.jsx';

const Routes = () => {
   
    return (
        <Router history={browserHistory}> 
            <Route path = "/" >
                <IndexRoute component={Home} />
                 <Route path = "/Clothes" component={Home}  />
                 <Route path = "/Accessaries" component={Home}  />
                <Route path = "/Faq" component={Faq}  />
                <Route path = "/Delivery" component={Delivery}  />
                <Route path = "/Size" component={Size}  />

            </Route>
        </Router>
    );
}
    

render(<Routes />, document.getElementById('app'));
