import React, { Component } from 'react'
import Notifications from '../Notifications/Notifications'
import Login from '../Login/Login'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import CourseList from '../CourseList'
import propTypes from 'prop-types'

const App = ({ isLoggedIn }) => {
	return (
		<div className="App">
			<header />
			<div classname="App-body">
				{isLoggedIn ? <CourseList /> : <Login />}
			</div>
			<div  className="App-footer">
				<footer />
			</div>
		</div>
	);
}

App.propTypes = {
	isLoggedInfalse
}

export default App;