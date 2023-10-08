

import Footer from './components/Footer';
import NavScrollExample from './components/Navbar';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';
import Services from './pages/Services';


function App() {
  return (
<BrowserRouter>
<NavScrollExample/>
<Routes>
<Route exact path='/' element={<Home/>} />
<Route exact path='/contact' element={<Contact/>} />
<Route exact path='/services' element={<Services/>} />
<Route exact path='/login' element={<Login/>} />
</Routes>
<Footer/>

</BrowserRouter>
  );
}

export default App;
