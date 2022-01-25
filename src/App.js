import './App.css';
import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import reducers from './Reducer/reducers';
import { Provider } from 'react-redux';
import Calculator from './Component/Calculator';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import thunk from 'redux-thunk';
import Maps from './Component/Maps';

const store = createStore(reducers, applyMiddleware(thunk));
function App() {
  return (
    <Provider store={store}>
      <div className="App">8
        <Router>
          <Routes >
            <Route path="/" element={<Calculator />} />
          </Routes>
        </Router><br />
        <Maps />
      </div>
    </Provider>
  );
}

export default App;