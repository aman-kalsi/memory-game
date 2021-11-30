import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Snowfall from 'react-snowfall'

ReactDOM.render(
  <div>
    <Snowfall snowflakeCount={300}/>
    <App />
  </div>,
  document.getElementById('root')
);
