async function airtel() {
  let ddata = await fetch("https://catfact.ninja/fact")
    .then((a) => a.json())
    .catch((e) => {
      console.log(e);
    });
  console.log(ddata);
  document.getElementById("ffacts").innerHTML = ddata.fact;
}
