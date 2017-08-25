import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App dataUrl="http://christiancline.com/wp-api-testing/wp-json/wp/v2/posts?&per_page=100" />, document.getElementById('root'));
registerServiceWorker();
