import { useEffect } from 'react';
import { BrowserRouter} from 'react-router-dom';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import AllRoute from './All-Route';
import './stylesheets/app.scss';

function App() {
  
  // useEffect(()=>{
  //   let currentPos = 0;
  //   document.documentElement.addEventListener('wheel', ()=>{
      
  //     const wrapperEl = document.getElementsByClassName('section-wrapper')[0];
  //     currentPos += wrapperEl.scrollHeight;
  //     document.documentElement.scrollTo(0, currentPos)
  //   })
  // },[])
  return (
    <div className="App">
      <BrowserRouter>
        <div className="wrapper">
          <Header />
          <div className="container">
              <AllRoute />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
