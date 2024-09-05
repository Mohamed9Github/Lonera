const CartItem = document.getElementById("cartItem");
const CartCount = Cart.length + 1;


    if (CartCount <= 1){
        CartItem.classList.add("displaynone");
        CartItem.id = "";
    }
    else if(CartItem.classList.contains("displaynone")){
        CartItem.classList.remove("displaynone");
        CartItem.id = "cartItem";
    }




// Add The Products On the html file:


const CartCategorey = [...new Set(Cart.map((Item)=>
    {return Item}))]
    let QTY=0;
document.getElementById("CProducts").innerHTML = CartCategorey.map((Item)=>{
    var{id, ProductName, ProductDesc, ProductImage, ProductPrice} = Item;
    return(
        `<div id="CartProduct">
                            <img src="${ProductImage}" alt="" width="200px" align="left">
                            <div id="CartProductDesc">
                                <h1>${ProductName}</h1>
                                <h2 id="CartProductDescrption">${ProductDesc}</h2>
                                <div id="bottomdetails" align="center">
                                    <h2 id="CartProductPrice">${ProductPrice}</h2>
                                    <input type="number" id="QTY" min="1" max="3" value="1">
                                    <button id="RemoveButton"onclick="Remove(id=${id})">Remove</button>
                                </div>
                            </div>
                        </div>
                    <div id="space-400px">

                    </div>`
    )
}).join('');
