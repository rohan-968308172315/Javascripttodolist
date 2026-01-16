const btn = document.querySelector("button")
const ul = document.querySelector("ul")
const inp = document.querySelector("input")

btn.addEventListener("click",function(){
    const item = document.createElement("li")
    item.innerText = inp.value

    let delbtn = document.createElement("button");
    delbtn.innerText = "delete"
    delbtn.classList.add("delete")
    item.appendChild(delbtn)
    ul.appendChild(item)
    inp.value = ""
})

ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let itemlist = event.target.parentElement;
        itemlist.remove()
        console.log("deleted")
    }
})

// let deleteBtn = document.querySelectorAll(".delete");
// for(detbtn of deleteBtn){
//     detbtn.addEventListener("click",function(){
//         let par = this.parentElement;
//         console.log(par)
//         par.remove()
//     })
// }