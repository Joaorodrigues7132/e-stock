import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Ativos from './pages/Ativos';
import Classe from './pages/Classe';
import Estoque from './pages/Estoque';
import Manutencao from './pages/Manutencao';
import Prestador from './pages/Prestador';
import Proprietario from './pages/Proprietario';

function App() {
  return (
    <div className='App'>
    <Header />
    <Routes>
      <Route path='/' element={<Estoque />}/>
      <Route path='/proprietario' element={<Proprietario />} />
      <Route path='/ativos' element={<Ativos />} />
      <Route path='/prestador' element={<Prestador />} />
      <Route path='/manutencao' element={<Manutencao />} />
      <Route path='/classe' element={<Classe />} />
    </Routes>
    </div>
  );
}

export default App;
