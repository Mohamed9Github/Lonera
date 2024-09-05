const Cart = 'cart.json';
function addtocart(id , image, name, href, Desc, price,){
    Cart.push({
        id: id,
        ProductName: name,
        ProductHref: href,
        ProductDesc: Desc,
        ProductImage: image,
        ProductPrice: price,
    },)
    console.log(Cart);
};