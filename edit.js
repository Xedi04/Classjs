let edit = document.querySelector(".edit");
let table = document.querySelector("#table1");
let id = new URLSearchParams(window.location.search).get('id');



fetch('https://northwind.vercel.app/api/products/' + id)
    .then(res => res.json())
    .then(element => {

        table.innerHTML = `
    <tr>
    <td> <input  type="text" value=${element.id}></td>
    <td><input type="text" id="name" value=${element.name}></td>
    <td><input type="text" id="price" value=${element.unitPrice}></td>
    <td><input type="text" id="stock" value=${element.unitsInStock}></td>
    <td><button id="save">Save</button>
   </tr>
 `
            let save = document.querySelector("#save");
            let nameInput = document.querySelector("#name");
            let priceInput = document.querySelector("#price");
            let stockInput = document.querySelector("#stock");
            save.addEventListener("click", () => {
                axios.patch('https://northwind.vercel.app/api/products/' + id, {
                    name: nameInput.value,
                    unitPrice: priceInput.value,
                    unitsInStock: stockInput.value

                }).then(res => window.location.href = './index.html')
            })
        
    })


