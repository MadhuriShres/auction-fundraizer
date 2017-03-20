import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'; 
import  Home from './component/home.jsx';
import Faq from './component/faq.jsx';
import Delivery from './component/delivery.jsx';
import Size from './component/size.jsx';

const Routes = () =>
	(
		<Router history={browserHistory}> 
			<Route path = "/" >
				<IndexRoute component={Home} category="all" />
				<Route path = "clothes"  component={Home} category="clothes" />
				<Route path = "decoration" component={Home} category="decoration" />
				<Route path = "bags" component={Home} category="bags" />
				<Route path = "soft-toys" component={Home} category="softtoys" />
				<Route path = "faq" component={Faq} />
				<Route path = "delivery" component={Delivery} />
				<Route path = "size" component={Size} />
			</Route>
		</Router>
	);

render(<Routes />, document.getElementById('react-app'));
