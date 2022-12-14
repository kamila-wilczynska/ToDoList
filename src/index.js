import ReactDOM from 'react-dom';
import App from './App';
import './styles/normalize.scss';
import '../src/styles/global.scss';
import 'font-awesome/css/font-awesome.min.css'; //zaimportowanie fontawesome. Jak nie podamy dokładnie, do react będzie szukał w node.modules

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);