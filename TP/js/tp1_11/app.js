/*
///////////////TP1

const nbr1 = 2;
const nbr2 = 3;
const nbr3 = nbr1 + nbr2;

alert("Bienvenue sur la page de formulaire ");

console.log(nbr1, nbr2);
console.log("Le résultat est " + nbr3);

///////////////////////////////






//////////////TP2


let tp2 = () => {

const distance = parseFloat(prompt("TP2:\ndistance")); ;

const temps = parseFloat(prompt("TP2:\ntemps")); ;

const res1 = `TP:\nvotre vitesse est de ${distance / temps}m/s`;

console.log(res1);
alert(res1);

//RC = O(1)

}

/////////////////////////




/////////////TP3 

let tp3 = ( ) =>{

const age = prompt("TP2: votre age");
age = parseInt(age)
const res2 = "TP2: "
if ((7 <= age) & (age <= 9)) {
res2 += "Poussin";
} else if ((10 <= age) & (age <= 11)) {
res2 += "Pupille"; 
}else if ((12 <= age) & (age <= 13)) {
     res2 += "Benjamin";

}else if ((14 <= age) & (age <= 15)) {
   res2 += "Minime";    

}else{
    res2 = "pas de categorie";
}

console.log(res2);
alert(res2);

//RC = O(1)

}

///////////////////////////////////






//////////////TP4-5


let tp45 = ( ) =>{



const email = prompt("TP4:\nemail");

const mdp = prompt("TP4:\nmdp");

let newEmai = prompt("TP4:\nnewEmail");
let newMdp = prompt("TP4:\nnewMdp");

let counter = 0;
let maxCount = 5;

while ((email !== newEmai) && (mdp !== newMdp) && (counter<maxCount)) {
 
alert("Identifiants incorrect devra s’afficher");

  newEmai = prompt("TP4:\nnewEmail");

  newMdp = prompt("TP4:\nnewMdp");


  
counter++;

console.log(counter);

}

let res5 = "";
if (counter == maxCount ){
res5 = `Vous avez saisi des mauvais identifiants ${maxCount} fois, votre compte est bloqué`;
}else{
res5 = "Bienvenu dans votre espace client";
}

alert(res5)

//RC = O(1)
}


tp45()



///////////////////////////////



*/
/////////TP6

let tp6 = () => {
  let nbr = undefined;
  const valMin = 1;
  const valMax = 3;
  while (nbr <= valMin || nbr >= valMax || typeof nbr != typeof valMin) {
    nbr = parseFloat(prompt(`TP6:\nun nombre entre ${valMin} et ${valMax} `));
  }

  // RC = inf
};

//tp6()

/////////////////

///////////tp7

let tp7 = () => {
  const valMin = 10;
  const valMax = 20;
  let nbr = undefined;
  let res7 = "";
  while (nbr <= valMin || nbr >= valMax || typeof nbr != typeof valMin) {
    nbr = parseFloat(prompt(`TP7:\nun nombre entre ${valMin} et ${valMax} `));

    alert(nbr <= valMin ? "Plus grand" : "plus petit");
  }
};

//tp7();

////////////////

/////tp8
let tp8 = () => {
  const lenNbr = 10;

  const nbr = parseInt(prompt(`TP8:\nun nombre`));

  for (let i = 1; i < lenNbr + 1; i++) {
    console.log(nbr + i);
  }
};

//tp8()

//////////

//////////tp 9

let tp9 = () => {
  let int2str = (aInt) => {
    const fizzNum = 3;
    const fizzTxt = "fizz";
    const buzzNum = 5;
    const buzzTxt = "buzz";

    if (!(aInt % fizzNum) && !(aInt % buzzNum)) {
      return fizzTxt + buzzTxt;
    } else if (!(aInt % fizzNum)) {
      return fizzTxt;
    } else if (!(aInt % buzzNum)) {
      return buzzTxt;
    }

    return aInt;
  };

  const nbr = parseInt(prompt(`TP9:\nun nombre`));
  //const nbr = 15;

  for (let i = 1; i < nbr + 1; i++) {
    console.log(int2str(i));
  }
};

// RC = O(n)
//tp9()

//////////////

////////////tp10

let tp10 = () => {
  //const nbr = parseInt(prompt(`TP10:\nun nombre`));
  const nbr = 7;
  const maxFacteur = 10;
  const minFacteur = 1;

  let output = "";
  for (let i = minFacteur; i <= maxFacteur; i++) {
    output = `${nbr} x ${i} = ${nbr * i}\n`;
    console.log(output);
  }
};

//tp10();

///////////////////////////////

let tp11 = () => {
  /*
  //const nbr = parseInt(prompt(`TP10:\nun nombre`));

    const minFacteur1 = parseInt(prompt(`TP11:\n facteurs dont vous voulez la table \minFacteur1`));
    const maxFacteur1 = parseInt(prompt(`TP11:\nmaxFacteur1`));

    const minFacteur2 = parseInt(prompt(`TP11:\nminFacteur2`));
    const maxFacteur2 = parseInt(prompt(`TP11:\nmaxFacteur2`));

    */

  const minFacteur1 = 3;
  const maxFacteur1 = 8;

  const minFacteur2 = 3;
  const maxFacteur2 = 7;

  let output = "";

  for (let j = minFacteur2; j <= maxFacteur2; j++) {
    for (let i = minFacteur1; i <= maxFacteur1; i++) {
      output += `${i} x ${j} = ${j * i}\t`;
    }
    output += "\n";
  }

  console.log(
    `Tables de ${minFacteur1} à ${maxFacteur1} par de ${minFacteur2}  à ${maxFacteur2}`
  );
  console.log(output);
};

//tp11();

///////////////

let miniTp1 = () => {
  let name = "Christian Lisangola";
  name = name.toLowerCase();
  name = name.replace(/\s/g, "");

  const listVoyelles = ["a", "e", "i", "o", "u", "y"];

  let consonnes = "";
  let voyelles = "";

  for (let i = 0; i < name.length; i++) {
    console.log(`${i} => ${name[i]}`); //name[0]

    listVoyelles.includes(name[i])
      ? (voyelles += name[i])
      : (consonnes += name[i]);
  }

  console.log(consonnes);
  console.log(voyelles);

  const age = 12;
  age === 12 ? console.log("egal à 12") : console.log("different de 12");
};

//////////////////////////

const assert = function (condition, message) {
  if (!condition) throw Error("Assert failed: " + (message || ""));
};

let tp12_13 = () => {
  const array = [0, 1, 2, 3, 4, 5, 6];

  const arraySum = array.reduce((total, elt) => total + elt);
  const arrayMean = arraySum / array.length;

  return { sum: arraySum, mean: arrayMean };
};

//console.log(tp12_13());
