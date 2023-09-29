const root = document.getElementById('root')
const err = document.getElementById('err')
const table = document.createElement('table')
let count = 0
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
                   
                    count++ 
                }
               
            }else{
                if(td.innerText ==='X' ||td.innerText ==='O'){
                    err.innerText = 'place Somewhere'
                }else{
                    err.innerText = ''
                    td.innerText = 'O'
                    
                    count++
                }
            }
           
        })

    }
    table.appendChild(tr)
}

root.appendChild(table)

