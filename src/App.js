import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
//import Home from './Components/Home';
//import Student from './Components/Student';
import {Question} from './Components/Question';
import { UseState } from './Components/UseState';
import Navbar from './Components/Navbar';

 class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar/>
         <Routes>
         <Route path="/" element={<UseState/>}/>
         <Route path="/question" element={<Question/>}/>
         {/* <Route path="/contact" element={<Contact/>}/> */}
         </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
export default App;
