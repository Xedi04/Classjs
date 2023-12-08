let edit=document.querySelector(".edit");
let table = document.querySelector("#table1");
let id = new URLSearchParams(window.location.search).get('id')


fetch('https://northwind.vercel.app/api/products/'+id)
.then(res=>res.json())
.then(element=>{

    table.innerHTML=`
    <tr>
    <td> <input type="text" value=${element.id}></td>
    <td><input type="text" value=${element.name}></td>
    <td><input type="text" value=${element.unitPrice}></td>
    <td><input type="text" value=${element.unitsInStock}></td>
    <td><button id="save">Save</button>
   </tr>
    `
    let save =document.querySelector("#save");
    save.addEventListener("click", ()=>{
        
    }) 
})


