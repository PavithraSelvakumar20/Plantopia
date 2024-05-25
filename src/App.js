import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Home } from './components/Home';
import { About } from './components/About';
import { Guidelines } from './components/Guidelines';
import { Shop } from './components/Shop';
import { Contact } from './components/Contact';

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

        <Route path='Contact' element={<Contact />} />




    </Routes>
    </BrowserRouter>
  </>

    </div>

  );
}

export default App;
