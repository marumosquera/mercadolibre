import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { ErrorPage } from "./views/ErrorPage";
import { Home } from "./views/Home";
import { ProductDetails } from "./views/ProductDetails";
import { SearchResults } from "./views/SearchResults";
import CategoryProvider from "./context/CategoryContext";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <CategoryProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:query/:id" element={<ProductDetails />} />
            <Route path="/search/:query" element={<SearchResults />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </CategoryProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
