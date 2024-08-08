import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Privacy from "../Privacy/Privacy";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Main />
              <Footer />
            </>
          }
          />
          <Route
          path="/privacy"
          element={
            <>
              <Header />
              <Privacy />
            </>
          }
        />
      </Routes>
    </div>
  );
}
