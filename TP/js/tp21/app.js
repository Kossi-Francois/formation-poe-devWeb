
class Student {
  constructor( nom, prenom, age, genre, pays, opts, listeCours){
        this.nom = nom,
        this.prenom = prenom;
        this.age  = age;
        this.genre = genre;
        this.pays = pays;
        this.opts = opts;
        this.listeCours = listeCours;

  }
   
}





let tp21 = (info) =>{


    const student = new Student();

    let parseObj = (strObj) =>{

            strObj = strObj.toString();
            //info = info.replace(/\s/g, "");
            strObj = strObj.split(",");

            let map = new Map();

            for (elt of strObj) {
              let [att, val] = elt.split("=");
              att = att.replace(/\s/g, "");
              student[att] = val;
            }

    }


    let askUserInfo = `TP21:\nentrez vos infos au format\nnom=votreNom;      prenom=votrePrenom; \ngenre=VotreGenre;         pays=votrePays; \nopts=votreOption,         listeCours= votrListeCours `;

    let ask = false;
    if(info == undefined){
        info = prompt(askUserInfo);
        ask = true;
    }


    parseObj(info);
    console.log(student);
        
        
    

    while ((info != "q") && ask ){

          info = prompt(askUserInfo + "\nwant to change info ?\nto quit tape 'q'");

          parseObj(info);

          console.log(student);

    } 


    return student;
}


//tp21()

// nom=franfran, prenom=franfran, age= xx, genre=m, pays=tg, opts=ops, listeCours=[a;b]



let tp22_CreateUser = ( ) =>{

    const Strusers = [
      "nom=franfran,    prenom=kossi,        age= xx,     genre=m,    pays=tg,    opts=ops,   listeCours=[a;b]",
      "nom=Zhang,       prenom=Wang,         age= 109,    genre=f,    pays=ch,    opts=ops,   listeCours=[a;b]",
      "nom=Chun,        prenom=Li,           age= 0,      genre=f,    pays=ch,    opts=ops,   listeCours=[a;b]",
      "nom=Chen,        prenom=Wang,         age= 68,     genre=m,    pays=ch,    opts=ops,   listeCours=[a;b]",
      "nom=Wang,        prenom=ana,          age= 68,     genre=m,    pays=ch,    opts=ops,   listeCours=[a;b]",
      "nom=clark,       prenom=enora,        age= 555,    genre=f,    pays=en,    opts=ops,   listeCours=[a;b]",
      "nom=Ivanov,      prenom=Smirnova,     age= 18,     genre=m,    pays=ru,    opts=ops,   listeCours=[a;b]",
      "nom=Kuznetsova,  prenom=Petrova,      age= 18,     genre=f,    pays=ru,    opts=ops,   listeCours=[a;b]",
    ];
      

    return Strusers.map((elt) => tp21(elt));

}


let tp22 = ( usersArray)=>{


    if( usersArray == undefined){ usersArray =  tp22_CreateUser(); }


    

    
    const nbrChinoise     = usersArray.filter( (elt) => { return  elt.pays.toLowerCase() == "ch" && elt.genre == "f";} ).length;
    const prenomEndsWithA = usersArray.filter( (elt) => { return  elt.prenom.toLowerCase()[elt.prenom.length - 1] == "a"  ;}) ;
    const listeNom        = usersArray.map( (elt) => elt.nom);

    const listeHommeRusse = usersArray.filter( (elt) => {return elt.pays.toLowerCase() == "ru" && elt.genre == "m";} );

    const userWhereNameStartsWithKFemal = usersArray.filter( (elt) => { return elt.nom.toLowerCase()[0] == "k" && elt.genre == "f";} );

    const usersMaleNameStartsWithM = usersArray.filter( (elt) => { return elt.nom.toLowerCase()[0] == "m" && elt.genre == "m";} );


    

    console.log(usersArray);

  console.log("nombre des chinoise ", nbrChinoise);
  console.log("les personnes dont les prénoms se terminent par 'a' ",  prenomEndsWithA);
  console.log("liste tous toutes les noms ", listeNom);
  console.log("liste de tous les hommes russes",    listeHommeRusse);
  console.log("personnes dont les noms commencent par K et qui sont des femmes", userWhereNameStartsWithKFemal);
  console.log("les hommes dont les noms commencent par M", usersMaleNameStartsWithM);

}

tp22();