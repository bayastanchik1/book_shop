import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Admin from './components/Admin';
import SimpleSlider from './components/Home';
import Edit from './components/Edit';
import List from './components/List';
import Save from './components/Save';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Header/>

    <Routes>
      <Route path='/' element={ <SimpleSlider/> }/>
      <Route path='/admin' element={ <Admin/> }/>
      <Route path='/edit/:id' element={ <Edit/> }/>
      <Route path='/list/:id' element={ <List/> }/>
      {/* <Route path='/listTwo/:id' element={ <ListTwo/> }/> */}
      <Route path='/save' element={ <Save/> }/>
      <Route path='/search/:name' element={ <Search/> }/>
    </Routes>


    </div>
  );
}

export default App;
