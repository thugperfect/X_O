const root = document.getElementById('root')
const err = document.getElementById('err')
const table = document.createElement('table')
let count = 0
const valXArr = []
const valOArr = []
for(i=0;i<3;i++){
 
    const tr = document.createElement('tr')
    tr.id = i
    for(j = 0;j<3;j++){
        const td = document.createElement('td')
        td.id = j
        tr.appendChild(td)
        td.addEventListener('click',()=>{
            if(count % 2 === 0){
                if(td.innerText ==='X' ||td.innerText ==='O'){
                    err.innerText = 'place Somewhere'
                }else{
                    err.innerText = ''
                    td.innerText = 'X'
                    valXArr.push(['X',Number(tr.id),Number(td.id)])
                    console.log(valXArr);
                
                    count++ 
                }
                
               
            }else{
                if(td.innerText ==='X' ||td.innerText ==='O'){
                    err.innerText = 'place Somewhere'
                }else{
                    err.innerText = ''
                    td.innerText = 'O'
                    valOArr.push(['O',Number(tr.id),Number(td.id)])
                 
                console.log(valOArr);
                    count++
                }
            }
           
        })

    }
    table.appendChild(tr)
}

root.appendChild(table)

