import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  let pronoun = ['the', 'our', 'your', 'my'];
  let adj = ['great', 'big', 'best', 'greatest',];
  let noun = ['player', 'programmer', 'finder', 'creator', 'coder'];

  for (let i = 0; i < pronoun.length; i++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        console.log(pronoun[i] + adj[a] + noun[n] + ".com")
      }
    }
  }
}
