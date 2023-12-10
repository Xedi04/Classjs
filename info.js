let info=document.querySelector(".info1");


let id = new URLSearchParams(window.location.search).get('id')

fetch('https://northwind.vercel.app/api/products/'+id)
.then(res=>res.json())
.then(data=>{
    

 info.innerHTML=`
 <div class="info1">
 <h5>Mehsulun adi:${data.name}</h5>
 <h5>Mehsulun qiymeti:${data.unitPrice}</h5>
 <h5>Stokda var:${data.unitsInStock}</h5>
 <h5>Stokda Qablasdirmada:${data.quantityPerUnit}</h5>
 <button id="btn1"> <a id="b" href="./index.html">Back</a></button>
</div>

 `
})