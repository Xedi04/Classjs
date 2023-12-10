let name = document.querySelector("#name");
let price = document.querySelector("#price");
let stock = document.querySelector("#stock");
let newbtn = document.querySelector("#new");
let Xana = document.querySelector(".xana");



newbtn.addEventListener("click", () => {
    let nm = name.value;
    let pr = price.value;
    let st = stock.value;
   

    if (nm.trim() === "" || pr.trim() === "" || st.trim() === "") {
        Xana.innerHTML = "Zehmet olmasa bosluqu doldurun!";
        Xana.style.color="red"
    } else {
        Xana.innerHTML='<img src="./Spinner.gif" width="50" height="50" >';

        axios.post('https://northwind.vercel.app/api/products', {
            name: nm,
            unitPrice: pr,
            unitsInStock: st,

        })
            .then(res => {
                let ID=res.data.id;
                
                Xana.innerHTML=`Melumatlar ugurla elave olundu. Esas sehifeye yonlendirilir...ID nomresi${ID}`;
               setTimeout(()=>{
                window.location.href = './index.html';
               }, 3000);
            })

            .catch(error => {
                console.log(error);
            }
                
            );
    }
})



