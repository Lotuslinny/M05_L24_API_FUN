// maak een expression functie die data haalt uit een andere functie waar hij moet wachten op de data.

const addDadJokeToDom = async () => {
  const dadJokesData = await getDataDadJokes();
  document.getElementById("joke").innerHTML = "";
  let j = document.createTextNode(dadJokesData);
  document.getElementById("joke").appendChild(j);
};

document.getElementById("knop").addEventListener("click", addDadJokeToDom);


const addImageToDom = () => {
  let img = document.createElement("img");
  img.src = "https://icanhazdadjoke.com/j/R7UfaahVfFd.png";
  document.getElementById("plaatje").appendChild(img);
  document.getElementById("verrassing").removeEventListener("click", addImageToDom);

};

document.getElementById("verrassing").addEventListener("click", addImageToDom);


