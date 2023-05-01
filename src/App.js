import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Resume from './components/Resume';
import Service from './components/Service';
import Contact from './components/Contact';

function App() {
  console.log('enter App');
  console.log("public url: " + process.env.PUBLIC_URL);
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
          <Route exact path={'/'} element={<Home />} />
            <Route path={'/resume'} element={<Resume />} />
            <Route path={'/service'} element={<Service />} />
            <Route path={'/contact'} element={<Contact />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
