const CartItem = document.getElementById("cartItem");
const CartCount =  + 1;




function getCookies() {
    if (!document.cookie) {
        // Return an empty array if there are no cookies
        return [];
    }

    return document.cookie.split('; ').map(cookieString => {
        const [name, ...valueParts] = cookieString.split('=');
        return { name, value: valueParts.join('=') };
    });
}





// Add The Products On the html file:

const CartyMap = getCookies();
console.log(CartyMap);

const CartCategorey = [...new Set(CartyMap.map((Item)=>
    {return Item}))]
    let QTY=0;
document.getElementById("CProducts").innerHTML = CartCategorey.map((Item)=>{
    var{name, value} = Item;
        return(
            `<div id="CartProduct" align="center">
                                <div id="CartProductDesc">
                                    <h1>${name}</h1>
                                    <div id="bottomdetails" align="center">
                                        <h2 id="CartProductPrice">${value} sar</h2>
                                        <input type="number" id="QTY" min="1" max="3" value="1">
                                        <button id="RemoveButton"onclick="Remove(id=)">Remove</button>
                                    </div>
                                </div>
                            </div>`
        )
}).join('');
