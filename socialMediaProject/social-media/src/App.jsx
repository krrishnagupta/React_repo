import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Createpost from './components/Createpost'
import Postlist from './components/Postlist'
import PostListProvider from './store/post-list-store'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

function App() {

  const [selectedTab, setSelectedTab] = useState("Home")

  return (
    <PostListProvider>
      <div className='appContainer'>
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className='content'>
          <Header />
          <div>
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </PostListProvider>
  )
}

export default App
