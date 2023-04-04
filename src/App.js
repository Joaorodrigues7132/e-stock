import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Ativos from './pages/Ativos';
import Estoque from './pages/Estoque';
import Proprietario from './pages/Proprietario';

function App() {
  return (
    <div className='App'>
    <Header />
    <Routes>
      <Route path='/' element={<Estoque />}/>
      <Route path='/proprietario' element={<Proprietario />} />
      <Route path='/ativos' element={<Ativos />} />
    </Routes>
    </div>
  );
}

export default App;
