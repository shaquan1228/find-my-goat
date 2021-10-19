import ReactDOM from 'react-dom';
import routes from './config/routes.js';

const createRoutes = routes();

ReactDOM.render(
  createRoutes,
  document.getElementById('root')
);

