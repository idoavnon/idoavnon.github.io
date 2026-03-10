import './App.css'
import type { ReactElement } from 'react'
import Welcome from './pages/Welcome'
import Timeline from './pages/Timeline'
import Writing from './pages/Writing'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from './components/ui/navigation-menu'


function App() {

  const tabs: {[key: string]: ReactElement}= {
    'welcome': <Welcome/>,
    'timeline': <Timeline/>,
    'writing': <Writing/>
  }

  const navHeaders = Object.entries(tabs).map(([key]) => {return (
    <NavigationMenuItem key={key}>
      <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
        <Link to={'/' + key}>{key[0].toUpperCase() + key.substring(1)}</Link>
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
