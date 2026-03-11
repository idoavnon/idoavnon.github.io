import './App.css'
import type { ReactElement } from 'react'
import Welcome from './pages/Welcome'
import Timeline from './pages/Timeline'
import Writing from './pages/Writing'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from './components/ui/navigation-menu'
import { ArrowUpRight } from 'lucide-react'
import * as constants from '@/constants'


function App() {

  const tabs: {[key: string]: ReactElement}= {
    'welcome': <Welcome/>,
    'timeline': <Timeline/>,
    'writing': <Writing/>,
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

  const linkHeaders = constants.headerLinks.map((header) => {return (
    <NavigationMenuItem key={header.label}>
      <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
        <a target='_blank' href={header.link.href}>
          {header.label[0].toUpperCase() + header.label.substring(1)}
          <ArrowUpRight/>
        </a>
      </NavigationMenuLink>
    </NavigationMenuItem>
  )})

  const routes = Object.entries(tabs).map(([key, value]) => {return (
    <Route key={key} path={'/' + key} element={value}/>
  )})

  return (        
    <BrowserRouter>
      <NavigationMenu className='p-5'>
        <NavigationMenuList>
          {navHeaders}
          {linkHeaders}
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
