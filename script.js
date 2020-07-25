var items = [
    ['001', 'Keyboard Logitek', 60000, 'Keyboard yang mantap untuk kantoran', 'logitek.jpg'], 
    ['002', 'Keyboard MSI', 300000, 'Keyboard gaming MSI mekanik', 'msi.jpg'],
    ['003', 'Mouse Genius', 50000, 'Mouse Genius biar lebih pinter', 'genius.jpeg'],
    ['004', 'Mouse Jerry', 30000, 'Mouse yang disukai kucing', 'jerry.jpg']
]

var keranjang = []
function addToCart(item){
    keranjang.push(item)
    console.log(keranjang)
}

function printItems(arr){
    var listCard = ""
for (var i = 0; i <arr.length; i++){
    listCard += `
    <div class="card" style="width: 22rem;">
        <img src="img/${arr[i][4]}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title" id="itemName">${arr[i][1]}</h5>
            <p class="card-text" id="itemDesc">${arr[i][3]}</p>
            <p class="card-text">Rp ${arr[i][2]}</p>
            <a href="#" class="btn btn-primary" onclick="y()" id="addCart">Add to Cart</a>
            </div>
        </div>`
}
    return listCard
}
document.getElementById('listBarang').innerHTML = printItems(items)

var formsSearch = document.getElementById("formItem")
formsSearch.addEventListener("submit", function(event){
    //mencegah reload
    event.preventDefault()
    //dapetin value dari input keyword
    var keyword = document.getElementById("keyword").value
    var filteredItems = filtering(keyword)
    console.log(filteredItems)
    document.getElementById("listBarang").innerHTML=printItems(filteredItems)
})

function filtering(string){
    var filteredItems = []
    for(var j=0; j < items.length; j++){
        var itemNameLowerCase = items[j][1].toLowerCase()
        var stringToLowerCase = string.toLowerCase()
        if (itemNameLowerCase.includes(stringToLowerCase)){
            filteredItems.push(items[j])
        }
    }
    return filteredItems
}

//release2
var cartText = document.getElementById("cart")
var cartButton = document.getElementById("addCart")
//var cartbutton1 = cartButtons[0]
var cartSum = 0
function y(){
    cartSum = cartSum + 1
    cartText.innerHTML = '<button class="btn btn-primary" id="cart"><i class="fas fa-shopping-cart"></i></button>('+cartSum+')'
}





