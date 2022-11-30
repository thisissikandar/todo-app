import React from 'react'

const Footer = () => {

  let footerStyle={
    position:'relative',
    top:'1vh',
    width:'100%'
  }

  return (
    <footer className='bg-dark text-light' style={footerStyle}>
      <p className="text-center py-3">
      Copyright &copy; All rights reserved ToDoList.com 2022

      </p>
    </footer>
  )
}

export default Footer;