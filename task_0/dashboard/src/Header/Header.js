import React, { component } from 'react';
import logo from '../assets/logo.jpg';
import './Header.css';

function Header() {
  return (
    <>
      <header lasssName="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
    </>
  );
}