import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Logup from './pages/Logup';
import Main from './pages/Main';
import Groups from './pages/goups/Main'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/Sign-up" element={<Logup />} />
        <Route path="/Sign-in" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
