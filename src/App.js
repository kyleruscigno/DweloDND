import logo from './dwelo.png';
import strings from './resources/strings.js'
import './App.css';
import SmartDeviceBoard from './components/SmartDeviceBoard';

function App() {
  return (
    <div className="app d-flex flex-column">
      <header className="app-header container-fluid">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-4">
            <img className="app-logo" src={logo} alt="dwelo logo"></img>
          </div>
          <div className="col-12 col-md-4">
            <h1 className="app-heading text-center">{ strings.APP_HEADING }</h1>
          </div>
          <div className="col-md-4"></div>
        </div>
      </header>

      <div className="app-main container-fluid">
        <SmartDeviceBoard />
      </div>

      <footer className="app-footer container-fluid">
        <div className="row justify-content-center">
          <div className="col-4">
            <h6 className="text-center">{ strings.APP_COPYWRITE }</h6>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
