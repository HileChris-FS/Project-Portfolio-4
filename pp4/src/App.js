import Header from "./component/Header";
import Homepage from "./pages/Homepage";
import { Route, Routes } from 'react-router-dom';
import Current from './pages/Current';
import Sevenday from "./pages/Sevenday";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Header />
        <main>
            <section>
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/current/" element={<Current />}/>
                <Route path="/sevenday" element={<Sevenday />} />
              </Routes>
            </section>
        </main>
        <Footer />
    </div>
  );
}

export default App;
