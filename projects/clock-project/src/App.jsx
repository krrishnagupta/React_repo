import './App.css'
import Heading from './components/timeHeading'
import Slogn from './components/timeSlogn'
import CurrentTime from './components/currentTime'

function App() {
  return <center classNameName='mt-5 border border-2 border-dark rounded p-5 w-50 mx-auto'>
    <Heading />
    <Slogn />
    <CurrentTime />
  </center>
}

export default App
