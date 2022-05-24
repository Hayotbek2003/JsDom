let budget = document.querySelector(".budget")
let exname = document.querySelector(".exname")
let mount = document.querySelector(".mount")
let but = document.querySelector(".but")
let hred = document.querySelector(".hred")
let h1 = document.querySelector(".h1")


function save(state){
    if(state == "budget"){
    let bud = parseInt(but.textContent) + parseInt(budget.value)
    but.innerHTML = bud
    }
    else if(state == "expense"){
       let mou = parseInt(hred.textContent) + parseInt(mount.value)
    hred.innerHTML = mou
         
      let res =  parseInt(but.textContent) - parseInt(hred.textContent)

    h1.innerHTML = res

    
let ul = document.querySelector(".ul")
let div = document.querySelector(".div")
    let li = document.createElement("li")
    let a = document.createElement("a")
    ul.appendChild(li)
    li.innerHTML = exname.value
    div.appendChild(a)
     a.innerHTML = mount.value



    }
}