async function consultar() {


  const resultado = await fetch("https://randomuser.me/api")

    .then(response => response.json())
    .then(data => data);
  console.log(resultado);
  let genero = "";
  genero = document.getElementById("gender").innerHTML = resultado.results[0].gender;
  let nombre = "";
  nombre = document.getElementById("name").innerHTML = resultado.results[0].name.first;

}
