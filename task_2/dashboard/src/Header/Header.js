import React, { Component } from 'react';
import logo from '../assets.logo';
import './Header.css';

export default function Header() {
  return (
    <header classname="App-header">
      <img src={logo} className='App-logo' alt='logo' />
      <h1>School dashboard</h1>
    </header>
  );
}