import React from 'react';
import './App.css';
import Profile from './components/profile';
import Header from './components/header';
import Nav from './components/nav';



const App = () => {
  return (
    <div className="app-wrapper">
			<Header/>
			<Profile/>
			<Nav/>
			
        </div>
      
  );
}



export default App;
