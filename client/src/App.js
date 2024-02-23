import logo from './logo.svg';
import './App.css';
import Teachers from './TeachersPage/Teachers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Allpost from './TeachersPage/Allpost/Allpost';
import Addpost from './TeachersPage/Addpost/Addpost';
import Loginpage from './Loginpage/Loginpage';

function App() {
  return (
     <BrowserRouter>
       <Routes>
         
          <Route path='/' element={<Loginpage/>}/>
          <Route path='/teacher' element={<Teachers/>}/>
          <Route path='/allpost' element={<Allpost/>}/>
          <Route path='/addpost' element={<Addpost/>}/>
       </Routes>
     </BrowserRouter>
       
  );
}

export default App;
