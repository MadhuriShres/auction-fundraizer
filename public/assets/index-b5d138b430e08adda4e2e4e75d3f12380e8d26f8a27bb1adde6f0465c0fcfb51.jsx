import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'; 
import  Home from './component/home.jsx';
import Faq from './component/faq.jsx';
import Delivery from './component/delivery.jsx';
import Size from './component/size.jsx';

const Routes = () => {
   
    return (
        <Router history={browserHistory}> 
            <Route path = "/" >
                <IndexRoute component={Home} />
                 <Route path = "/clothes" component={Home}  />
                 <Route path = "/accessaries" component={Home}  />
                <Route path = "/faq" component={Faq}  />
                <Route path = "/delivery" component={Delivery}  />
                <Route path = "/size" component={Size}  />

            </Route>
        </Router>
    );
}
    

render(<Routes />, document.getElementById('react-app'));
