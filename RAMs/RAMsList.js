const RamProduct = [
    {
        id: 1,
        ProductImage: "Images/Corsiar Vengeance RGB DDR5.jpg",
        ProductName: "CORSAIR Vengeance RGB",
        ProductHref: "",
        ProductDescription: "32GB (2 x 16GB) 288-Pin PC RAM DDR5 6400 (PC5 51200) Desktop Memory Model CMH32GX5M2N6400C36",
        ProductPrice: 455.39
    },
];
const RamCategories = [...new Set(RamProduct.map((item)=>
    {return item}))]
document.getElementById("RamRoot").innerHTML = RamCategories.map((item)=>
{
    var {id, ProductImage, ProductName, ProductHref, ProductDescription, ProductPrice} = item;
    return(
        `<div class="ProductCard">
            <button id="PBTN">
                <a href="${ProductHref}">
                    <img src="${ProductImage}" align="left"></img>
                    <h3>${ProductName}</h3>
                    <h4>${ProductDescription}</h4>
                    <h2 class="ProductPrice">${ProductPrice} SR</h2>
                </a>
                <button id='ATCBTN' onclick='addtocart(${id}, "${ProductName}", "${ProductHref}", "${ProductDescription}", "${ProductImage}", ${ProductPrice})'>Add to Cart</button>
            </button>
        </div>`
    )
}).join('');