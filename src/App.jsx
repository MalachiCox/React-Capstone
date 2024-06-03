import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AnimePage from "./pages/AnimePage";
import CharacterPage from "./pages/CharacterPage";

function App() {

  return (
      <Router>
          <Routes>
            <Route path="/" element={<AnimePage />} />
            <Route path="/character" element={<CharacterPage />} />
          </Routes>
      </Router>
  );
}

export default App;