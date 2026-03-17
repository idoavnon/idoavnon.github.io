import './App.css'
import type { ReactElement } from 'react'
import Welcome from './pages/Welcome'
import Timeline from './pages/Timeline'
import Writings from './pages/Writings'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from './components/ui/navigation-menu'
import * as constants from '@/constants'
import Projects from './pages/Projects'


function App() {

  const tabs: {[key: string]: ReactElement}= {
    'welcome': <Welcome/>,
    'timeline': <Timeline/>,
    'projects': <Projects/>,
    'writing': <Writings/>,
    //'music': <Music/> Not ready yet
    //'contact': <Contact/>
  }

  const navHeaders = Object.entries(tabs).map(([key]) => {return (
    <NavigationMenuItem key={key}>
      <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
        <Link to={'/' + key}>{key[0].toUpperCase() + key.substring(1)}</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
    )})

  const linkHeaders = constants.headerLinks.map((header, index) => {return (
        <a target='_blank' href={header.link.href} key={index} className='flex flex-row h-5'>
          {header.label}          
        </a>
  )})

  const routes = Object.entries(tabs).map(([key, value]) => {return (
    <Route key={key} path={'/' + key} element={value}/>
  )})

  return (        
    <BrowserRouter>
      <div className='flex flex-row justify-between'>
        <p className='text-xl font-bold'>Ido Avnon – Portfolio</p>
        <div className='flex flex-row gap-3'>
          {linkHeaders}
        </div>
      </div>
      <NavigationMenu className='p-5'>
        <NavigationMenuList>
          {navHeaders}          
        </NavigationMenuList>
      </NavigationMenu>

      <Routes>
        <Route path='/' element={<Welcome/>}/>
        {routes}
      </Routes>  
    </BrowserRouter>    
  )
}

export default App
