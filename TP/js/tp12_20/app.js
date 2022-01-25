/////////////////

let paerseTab = (tabStr) => {


  tabStr = tabStr.toString().replace(/\s/g, "");

  const ndim = tabStr[1] == "[" ? 0 : 1;


  const subBlock = (tabStr) => {
    const idx0 = tabStr.indexOf("[") + 1;
    const idx1 = tabStr.indexOf("]");

    let subList = tabStr.substring(idx0, idx1);

    subList = subList.split(",");

    tabStr = tabStr.slice(idx1 + 1);

    const subArr = subList.map((elt) => parseFloat(elt));

    return [subArr, tabStr];
    
  };

  if (ndim == 0) {

    const output = [];
    tabStr = tabStr.slice(1, -1);

    let n = tabStr.search(/\[/gi);
    let k = 0;

    while (n != -1) {
      let resBlock = subBlock(tabStr);

      tabStr = resBlock[1];

      output.push(resBlock[0]);

      n = tabStr.search(/\[/gi);

      console.log(n);

      k++;
      if (k >= 1000) {
        break;
      }

    }

    return output;
  } else {
     
    return subBlock(tabStr)[0];
  }

  

};

const myTabArr = "[ [ 1, 3, 4], [5, 8, 9] ]";
//paerseTab(myTabArr);
//console.log(paerseTab(myTabArr));

///////////////////

let tp14 = (array) => {

  if (array == undefined) {
    array = prompt(`TP14:\n Entrez tableau au format [ [xxx], [xxxx, oooo]]`)
    array = paerseTab(array);
  }

  
  const maxArr = array.reduce((max, elt) => Math.max(max, elt));
  const minArr = Math.min(...array);

  return { min: minArr, max: maxArr };

  
};

//console.log(tp14());


let testTp14 = () => {
  const tableau = [3, 6, 2, 1, 7, 12, 32];
  let { min, max } = tp14(tableau);

  (min === 1 && max === 32) ? console.log(true) : console.log(false);
};

//testTp14()

/////////////



let tp15 = (array) =>{

    let n = undefined

    if (array == undefined) {
      array = prompt(`TP15:\n Entrez tableau 2D au format [ [xxx], [xxxx, oooo]]`);
      array = paerseTab(array);
    }

    

    const res = array[0].map((elt, idx)=>{
      return `${elt + array[1][idx]}(${elt}+${array[1][idx]})`;
    })

    return res;
}


let testTP15 = ()=>{

    const Liste1 = [ 2 , 4 , 5 , 7 ,8 ];
    const Liste2 = [ 3 , 7 , 2 , 5 , 6];
    const List3 = [ "5(2+3)" , "11(4+7)", "7(5+2)" , "12(7+5)", "14(8+6)" ]

   console.log(tp15([Liste1, Liste2]));

}

//testTP15()


////////////////




let tp16_17_19 = (array) => {
  let n = undefined;

  if (array == undefined) {
    array = prompt(
      `TP 16, 17 et 19:\n Entrez tableau 2D au format [ [xxx], [xxxx, oooo]]`
    );
    array = paerseTab(array);
  }

  let diag1 = 0;
  let diag2 = 0;

  
  for (let i = 0; i < array.length; i++) {
    diag1 += array[i][i];
    diag2 += array[i][array.length - 1 - i];
  }

  return {diag1: diag1, diag2:diag2, diag3: diag2 +diag1}

  
};

//     [[1, 2],  [3, 4]]


//console.log(tp16_17());

let testTP16_17 = () => {
  const Liste1 = [
    [2, 4, 5],
    [3, 7, 2],
    [1, 2, 3],
  ];

  let { diag1, diag2, diag3 } = tp16_17_19(Liste1);
  console.log(tp16_17_19(Liste1));

   ( diag1 == 12 && diag2 == 13 ) ? console.log(true) : console.log(false)
};

//testTP16_17()


////////////
let tp18 = (a, b) => a + b ;



////////////




let tp20 = (array,  nbrRotat = 2, sensRotat = "droite") => {

//// shift     = pop(0)   O(n)
//// push      = add(n)   O(1)

//// unshift() = add(0)   O(n)
//// pop       = pop(n)   O(1)

    if (sensRotat == "droite") {
      for (let i = 0; i < nbrRotat; i++) {
        array.unshift(array.pop());
      }
    }

    // nbrOps = nbrRotat * 1 + nbrRotat * n = nbrRotat(n+1) = O(n)
    else {
      for (let i = 0; i < nbrRotat; i++) {
        array.push(array.shift());
      }
    }

    return array;

}

// SC  = O(n)
// RTC = O(n)



 let testTP20 = () => {
    const Tableau = [1, 2, 3, 4];

    const res = tp20(Tableau, 2, "droite");
    console.log(res);

  // ( res == [3, 4, 1, 2]) ? console.log(true) : console.log(false);

 }

testTP20()




