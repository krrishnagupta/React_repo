function Test(){
  return <p>i am just testing this function by calling it to double called function</p>
}

function KK(){
  return <div>
    <p>this is kk component</p>
  </div>;
}

function Welcome({name, age}){
  return <div>
    <h4>Welcome {name} and you are {age}</h4>
    <KK></KK>
  </div>
}


export default Welcome;