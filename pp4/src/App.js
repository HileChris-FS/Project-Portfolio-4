import Header from "./component/Header";
import Homepage from "./pages/Homepage";
import { Route, Routes } from 'react-router-dom';
import Current from './pages/Current';
import Nav from "./component/Nav";
import Sevenday from "./pages/Sevenday";

function App() {
  return (
    <div className="App">
      <Header />
        <main>
          <Nav />
            <section>
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/current" element={<Current  />}/>
                <Route path="/sevenday" element={<Sevenday />} />
              </Routes>
            </section>
        </main>
    </div>
  );
}

export default App;
