import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import { TasksProvider } from './components/TaskContext';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

function App() {
  return (
    <>
      <TasksProvider>
        <Navbar />
        <AddTask />
        <TaskList />
        <Footer />
        
      </TasksProvider>
    </>
  );
}

export default App;
