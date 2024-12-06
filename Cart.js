const CartItem = document.getElementById("cartItem");
const CartCount =  + 1;




function getCookiesForPath(path) {
    if (!document.cookie) {
        return [];
    }

    // Parse cookies into objects
    const cookies = document.cookie.split('; ').map(cookieString => {
        const [name, ...valueParts] = cookieString.split('=');
        return { name, value: valueParts.join('=') };
    });

    // Filter cookies for the specified path
    return cookies.filter(cookie => {
        // Assuming path info is embedded in the cookie name, e.g., "path:/Lonera/Cart.html|key=value"
        if (cookie.name.startsWith('path:')) {
            const [cookiePath] = cookie.name.split('|');
            return cookiePath === `path:${path}`;
        }
        return false; // Exclude cookies without path info
    });
}

// Usage
const cookiesForCart = getCookiesForPath('/Lonera/Cart.html');
console.log(cookiesForCart);




// Add The Products On the html file:

const CartyMap = getCookiesForPath('/Lonera/Cart.html');
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
