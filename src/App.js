import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import ToDoList from './components/ToDoList';
import AddToDo from './components/AddToDo';

function App() {
  return (
    <>
      <Navbar/>
      <AddToDo/>
      <ToDoList/>
      <Footer />
    </>
  );
}

export default App;
