import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Logup from './pages/Logup';
import Main from './pages/Main';
import Groups from './pages/goups/Main'
import Status from './pages/Status';
import GlobalStateProvider from './context/GlobalContext';



function App() {


  return (
    <GlobalStateProvider>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/status" element={<Status />} />
        <Route path="/Sign-up" element={<Logup />} />
        <Route path="/Sign-in" element={<Login />} />
      </Routes>
    </GlobalStateProvider>
  );
}

export default App;
