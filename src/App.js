import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./Components/MyNavbar";
import MyFooter from "./Components/MyFooter";
import Movies from "./Components/movies";

function App() {
  return (
    <div className="bg-dark">
      <main className="container-fluid my-2 mx-0 text-light container-fluid bg-dark">
        <MyNavbar />
        <Movies title="Harry Potter" query="Harry Potter" />
        <Movies title="Star Wars" query="Star Wars" />
        <Movies title="Marvel" query="Marvel" />
        <MyFooter className="al" />
      </main>
    </div>
  );
}

export default App;
