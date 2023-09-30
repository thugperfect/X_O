const root = document.getElementById('root')
const main = document.createElement('div')

main.classList.add('grid-container')
for(i = 1;i<10;i++){
  const div = document.createElement('div')
  div.className = 'grid-item'
  div.id = i
  main.appendChild(div)
}

root.appendChild(main)

let count = 0
const click = (e) =>{

  const clicked=e.target
  const err = document.getElementById('err')
  if(count%2 === 0){
    if(clicked.innerText !== 'X' || clicked.innerText !== 'O'){
      clicked.innerText = 'X'
      count++
    }
    
  }else{
    if(clicked.innerText !== 'X' || clicked.innerText !== 'O'){
      clicked.innerText = 'O'
      count++
    }
  }
  
}
const grid = document.getElementsByClassName('grid-item')
for(i = 0;i<grid.length;i++){
  grid[i].addEventListener('click',click)
}