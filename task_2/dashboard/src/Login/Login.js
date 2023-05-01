import React, { component } from 'react';
import './login.css';

export default class App extends Component {
  render() {
    return (
      <React.fragment>
        <div className="App">
          <body className="App-body">
          <p>Login tio access the full dashboard</p>
          <label htmlFor="email" onClick={() => {
            //select corresponding input
            document.getElemntById('password').focus();
          }}>Email</label>
          <input type="email" id="email" />
          <label htmlFor="password" onClick={() => {
            //select corresponding input
            document.getElementById('password').focus();
          }}>Password</label>
          <input type="password" id="password" />
          <button>Ok</button>
          </body>
        </div>
      </React.fragment>
    )
  }
}