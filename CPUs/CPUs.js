function search(){
    let searchBar = document.querySelector('.search-Input').value.toUpperCase();
    let productList = document.querySelector('.Products');
    let product = document.querySelectorAll('.ProductCard');
    let productName = document.getElementsByTagName('h3');

    for (let i = 0; i<productName.length; i++){
        if (productName[i].innerHTML.toUpperCase().indexOf(searchBar) >= 0){
            product[i].style.display = "";
        } else{
            product[i].style.display = "none";
        }
    }
}