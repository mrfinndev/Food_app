import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./../src/App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Feature from "./components/Feature";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Feature />
    </div>
  );
};

export default App;
