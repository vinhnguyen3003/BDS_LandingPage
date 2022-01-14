import { BrowserRouter} from 'react-router-dom';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import AllRoute from './All-Route';
import './stylesheets/app.scss';
import RegisterButton from './components/register-button/register-button';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="wrapper">
          <Header />
          <div className="container">
              <AllRoute />
          </div>
          <Footer />
          <RegisterButton />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
