import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/common/Navbar';
import { Route,Routes } from 'react-router';
import { Homepage } from './Components/pages/Homepage';

function App() {
  return (
    <div className="bg-gradient-to-r from-zinc-700 to-zinc-900 text-white  w-screen min-h-[100vh] overflow-y-auto ">
   <Navbar/>
   <Routes>
    <Route path="/" element={<Homepage/>}/>
   </Routes>
  
    </div>
  );
}

export default App;
