import { BrowserRouter, Route, Link } from 'inferno-router';
import { Provider } from 'inferno-mobx';

import store from './store';
import Home from './components/home';
import About from './components/about';

export default (): any => <div>
  <h1>App Here</h1>

  <Provider store={store}>
    <BrowserRouter>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>

        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </div>
    </BrowserRouter>
  </Provider>
</div>;
