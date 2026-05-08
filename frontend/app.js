async function checkBackend(){

  try{

    const response = await fetch("http://localhost:5001");

    const data = await response.text();

    document.getElementById("result").innerText = data;

  }catch(error){

    document.getElementById("result").innerText =
      "Backend Not Running";

  }

}