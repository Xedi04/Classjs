let table = document.querySelector("#table1");
let input = document.querySelector("#input");

fetch('https://northwind.vercel.app/api/products')
    .then(res => res.json())
    .then(data => {


        data.forEach(element => {
            table.innerHTML += `
     <tr>
     <td>${element.id}</td>
     <td> <a href="./info.html?id=${element.id}">${element.name}</a></td>
     <td>${element.unitPrice}</td>
     <td>${element.unitsInStock}</td>
     <td>
     <button id="edit"> <a href="./edit.html?id=${element.id}">Edit</a></button></td>
   <td><button id="delete">Delete</button>
 </td>
   </tr>
     `
        });
        input.addEventListener("input", (e) => {
         let Filter=   data.filter((el)=>{
              return  el.name.toLowerCase().startsWith(e.target.value)
            })
            table.innerHTML=`
            <tr>
            <th>id</th>
            <th>name</th>
            <th>price</th>
            <th>stock</th>
       
          </tr>
            `
            Filter.forEach(element=>{
                table.innerHTML += `
                <tr>
                <td>${element.id}</td>
                <td>${element.name}</td>
                <td>${element.unitPrice}</td>
                <td>${element.unitsInStock}</td>
                <td>
                <button id="edit">Edit</button>
              <button id="delete">Delete</button>
            </td>
              </tr>
                `
            })
        })
    })