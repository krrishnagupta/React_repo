import Welcome from "./welcome";
import Random from "./random";
function Hello(){
  return <p>Hello, i like to learn React</p>
}
function App(){
  
  let Arrow = (a) => a*2; 
  
  return <div>
    <h2>hello world {Arrow(90)} times</h2> 
    <Welcome name = "krishna" age = {21}></Welcome>
    <Welcome name = "naman" age = {22}></Welcome>
    <Hello></Hello>
    <Random></Random>
  </div>;
}

export default App;