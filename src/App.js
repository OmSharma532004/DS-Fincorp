import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/common/Navbar';
import { Route,Routes } from 'react-router';
import { Homepage } from './Components/pages/Homepage';
import CreditScore from './Components/Homepage/CreditScore';
import EmiCalculator from './Components/pages/EmiCalculator';
import { PersonalLoan } from './Components/pages/PersonalLoan';

function App() {
  return (
    <div className=" overflow-x-hidden bg-gradient-to-r from-zinc-700 to-zinc-900 text-white  w-screen min-h-[100vh] overflow-y-auto ">
   <Navbar/>
   <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/creditScore" element={<CreditScore/>}/>
    <Route path="/emicalculator" element={<EmiCalculator/>}/>
    <Route path='/loan/personal-loan' element={<PersonalLoan/>}/>
   </Routes>
  
    </div>
  );
}

export default App;
