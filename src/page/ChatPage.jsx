import React from 'react'
import Chat from '../components/Chat'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'

function ChatPage() {
  return (
    <div>
    <Navbar/>
      <Chat/>
      <Footer/>
    </div>
  )
}

export default ChatPage
