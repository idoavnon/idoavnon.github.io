import {useState} from 'react';
import './App.css';
import MenuBar from './MenuBar';
import WelcomePage from './WelcomePage';
import CodePage from './CodePage';
import TeachingPage from './TeachingPage';
import ContactPage from './ContactPage';
import MusicPage from './MusicPage copy';
import WritingPage from './WritingPage';

function App() {
  const [selectedPage, setSelectedPage] = useState<number>(0);

  function getPage() {
    switch (selectedPage) {
      case 0:
        return <WelcomePage/>
      case 1:
        return <CodePage/>
      case 2:
        return <TeachingPage/>
      case 3:
        return <MusicPage/>
      case 4:
        return <WritingPage/>
      case 5:
        return <ContactPage/>
    }
  }

  return (
    <>
    <MenuBar selected={selectedPage} setSelected={setSelectedPage}></MenuBar>
    {getPage()}
    </>
  );
}

export default App;
