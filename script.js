const root = document.getElementById("root");
const err = document.getElementById("err");
const table = document.createElement("table");
let count = 0;
const valXArr = [];
const valOArr = [];

const pattern = [
  [
    [0, 0],
    [0, 1],
    [0, 2],
  ],
  [
    [1, 0],
    [1, 1],
    [1, 2],
  ],
  [
    [2, 0],
    [2, 1],
    [2, 2],
  ],

  [
    [0, 0],
    [1, 0],
    [2, 0],
  ],
  [
    [0, 1],
    [1, 1],
    [2, 1],
  ],
  [
    [0, 2],
    [1, 2],
    [2, 2],
  ],

  [
    [0, 0],
    [1, 1],
    [2, 2],
  ],
  [
    [0, 2],
    [1, 1],
    [2, 0],
  ],
];
const strPattern = JSON.stringify(pattern)

const validate =(sub,sup)=>{
  for(i=0;i<sup.length;i++){
    for(j = 0;j<sub.length;j++){
      if(sub[j] === sup[i]){
        return true
      }else{
        return false
      }
    }
  }
}

for (i = 0; i < 3; i++) {
  const tr = document.createElement("tr");
  tr.id = i;
  for (j = 0; j < 3; j++) {
    const td = document.createElement("td");
    td.id = j;
    tr.appendChild(td);
    td.addEventListener("click", () => {
      if (count % 2 === 0) {
        if (td.innerText === "X" || td.innerText === "O") {
          err.innerText = "place Somewhere";
        } else {
          err.innerText = "";
          td.innerText = "X";
          valXArr.push([Number(tr.id), Number(td.id)]);
          const d = validate(valXArr,pattern)
          console.log(d)
        // const val = JSON.stringify(valXArr)

        // if(strPattern.includes(val)){
        //     console.log(true);
        // }else{
        //     console.log(false)
        // }
          count++;
        }
      } else {
        if (td.innerText === "X" || td.innerText === "O") {
          err.innerText = "place Somewhere";
        } else {
          err.innerText = "";
          td.innerText = "O";
          valOArr.push(["O", Number(tr.id), Number(td.id)]);

          count++;
        }
      }
    });
  }
  table.appendChild(tr);
}

root.appendChild(table);


