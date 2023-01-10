import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Logup from './pages/Logup';
import Main from './pages/Main';
import Status from './pages/Status';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/status" element={<Status />} />
        <Route path="/Sign-up" element={<Logup />} />
        <Route path="/Sign-in" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
