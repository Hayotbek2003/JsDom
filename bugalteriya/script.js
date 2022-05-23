let budget = document.querySelector(".budget")
let exname = document.querySelector(".exname")
let mount = document.querySelector(".mount")
let but = document.querySelector(".but")
let hred = document.querySelector(".hred")
let h1 = document.querySelector(".h1")
function save(state){
    if(state == "budget"){
    let s = but.textContent + budget.value
    but.innerHTML = s
    }
    else if(state == "expense"){
       let hre = hred.textContent + mount.value
       but - hre
        //  h1.innerHTML = but -hred
        console.log(hred)
           
      let li = document.createElement("li")
    //   li.innerHTML = 
    }
}