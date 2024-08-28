import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./Components/MyNavbar";
import MyFooter from "./Components/MyFooter";
import Movies from "./Components/movies";
import PreMain from "./Components/preMAin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./Components/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-dark">
        <main className="container-fluid my-2 mx-0 text-light bg-dark">
          <MyNavbar />
          <Routes>
            <Route path="/tvShows" element={<PreMain />} />
            <Route path="/details/:movieId" element={<MovieDetails />} />
          </Routes>
          <Movies title="Harry Potter" query="Harry Potter" />
          <Movies title="Star Wars" query="Star Wars" />
          <Movies title="Marvel" query="Marvel" />
          <MyFooter />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
