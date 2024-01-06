import React, { useContext, useState, createContext } from 'react'
import { Outlet } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Dashboard'
import { Navbar, SmallSidebar, BigSidebar } from '../components'
import { checkDefaultTheme } from '../App'
const DashboardContext = createContext()

const DashboardLayout = () => {
  const user = {name: 'admin'}
  const [showSidebar, setShowSidebar] = useState(false)  
  const [isDarkTheme, setisDarkTheme] = useState(checkDefaultTheme())

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme
    setisDarkTheme(newDarkTheme)
    document.body.classList.toggle('dark-theme', isDarkTheme)
    localStorage.setItem('darkTheme', newDarkTheme)
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    console.log('logout user');
  };

  return (
    <DashboardContext.Provider value={{
    user,
    showSidebar,
    isDarkTheme,
    toggleDarkTheme,
    toggleSidebar,
    logoutUser
    }}>
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  )
}

export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;