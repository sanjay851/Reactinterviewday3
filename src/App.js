import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Question} from './Components/Question';
import { Axiosandfetch} from './Components/Axiosandfetch';
import { UseState} from './Components/UseState';
import { Effect} from './Components/Effect';
import { UseReducer} from './Components/UseReducer';
import { UseMemo} from './Components/UseMemo';
import { UseRef} from './Components/UseRef';
import {Routing } from './Components/Routing';
import Navbar from './Components/Navbar';

 class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar/>
         <Routes>
         <Route path="/question" element={<Question/>}/>
         <Route path="/axiosandfetch" element={<Axiosandfetch/>}/>
         <Route path="/usestate" element={<UseState/>}/>
         <Route path="/useEffect" element={<Effect/>}/>
         <Route path="/usereducer" element={<UseReducer/>}/>
         <Route path="/usememo" element={<UseMemo/>}/>
         <Route path="/useref" element={<UseRef/>}/>
         <Route path="/Routing" element={<Routing/>}/>
         </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
export default App;
