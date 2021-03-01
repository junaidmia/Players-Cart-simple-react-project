import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Shop from './Component/Header/Shop/Shop';
import Players from './Component/Header/Players/Players';

function App() {
  return (
    <div className="row">
      <Header></Header>
      <div className="col-md-9">
        <Shop> </Shop>
      </div>
    </div>

  );
}

export default App;
