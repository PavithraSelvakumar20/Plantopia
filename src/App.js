import './App.css';
import { Home } from './components/Home';
import { About } from './components/About';
import { Guidelines } from './components/Guidelines';
import { Shop } from './components/Shop';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />        

        <Route path='About' element={<About />}/>

        <Route path='Guidelines' element={<Guidelines />} />

        <Route path='Shop' element={<Shop />} />



    </Routes>
    </BrowserRouter>
  </>

    </div>

  );
}

export default App;
