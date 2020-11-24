
/* //https://icanhazdadjoke.com/
 maak hier ook een functie expression waaruit de output wordt teruggestuurd
naar de functie die aan het wachten is.
  */
/*  const getDataDadJokes = async () => {
  //get data of "API" can be used as API without a API key icanhazdadjoke.com
  let dataLink = `https://icanhazdadjoke.com/`;
  console.log(dataLink);

}*/

const getDataDadJokes = async () => {
  //get data of "API" can be used as API without a API key icanhazdadjoke.com
  let dataLink = "https://icanhazdadjoke.com/";
  try {
    const dadJoke = await fetch(dataLink, {
      method: 'Get', headers: {
        // wanneer je in Postman de key bij de headers Accept noteert 
        //dan geeft postman zelf de verschillende values aan die je kan kiezen.
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
    return await dadJoke.joke;
    //console.log(dadJoke.joke);
  }
  catch (error) {
    alert("Catch" + error);
  }
};
getDataDadJokes();

