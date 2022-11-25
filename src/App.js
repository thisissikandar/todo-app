import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
// import { ToDo } from './components/ToDo';
import { ToDos } from './components/ToDos';
import { Footer } from './components/Footer';

function App() {
  const onDelete = () =>{
    console.log("am delete ");

  }
  let todo =[
    {
      sNo: 1,
      title: "learn node ",
      disc: "You Need follow the documentation page of the node to learn nodejs"
    },
    {
      sNo: 2,
      title: "learn Javascript ",
      disc: "You Need follow the documentation page of the node to learn nodejs"
    },
    {
      sNo: 3,
      title: "learn tailwind CSS ",
      disc: "You Need follow the documentation page of the node to learn nodejs"
    },
    {
      sNo: 4,
      title: "learn react js ",
      disc: "You Need follow the documentation page of the node to learn nodejs"
    }
  ]
  return (
    <>
    <Navbar searchbar={true}/>
    <ToDos todos ={todo} onDelete={onDelete}/>
    <Footer />

    </>
    
  );
}

export default App;
