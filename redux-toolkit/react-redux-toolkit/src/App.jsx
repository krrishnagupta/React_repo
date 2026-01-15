import './App.css'
import Controles from './components/controles';
import DisplayCounter from './components/displaycounter';
import Header from './components/header';
import Privacy from './components/privacy';
import { useSelector } from 'react-redux';

function App() {

   const privacy = useSelector(store => store.privacy);

  return (
    <>
      <div className="bg-dark text-secondary px-4 py-5 text-center">
        <div className="py-5">
          <Header />
          <div className="col-lg-6 mx-auto">
            {privacy ? <Privacy /> : <DisplayCounter />}
            <Controles />
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
