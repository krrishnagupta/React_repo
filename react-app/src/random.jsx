function Random(){

  let Number = Math.floor(Math.random()*10000);
  return <h2 style={{background:"#234567", color:"#ffff"}}> This is random number :{Number} </h2>
}

export default Random;