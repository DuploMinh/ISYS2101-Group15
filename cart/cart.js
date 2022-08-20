//Retrieve From Order Page
var list = JSON.parse(sessionStorage.getItem('list'));

function decrease(x) {


    var target = document.getElementById("amount" + x);
    if ((target.innerHTML - 1) == 0) {
        removeItem(x);
        return;
    }

    for (data of list) {
        if (data.id == x) {
            data.amount = target.innerHTML - 1;
        }
    }


    var price = document.getElementById("price" + x);
    var single_price = parseFloat(price.innerHTML) / parseInt(target.innerHTML);
    price.innerHTML = (parseInt(target.innerHTML) - 1) * single_price;
    target.innerHTML = parseInt(target.innerHTML) - 1;

}

function increase(x) {
    var target = document.getElementById("amount" + x);
    var price = document.getElementById("price" + x);

    
    for (data of list) {
        if (data.id == x) {
            data.amount = parseInt(target.innerHTML) + 1;
        }
    }

    var single_price = parseFloat(price.innerHTML) / parseInt(target.innerHTML);
    price.innerHTML = (parseInt(target.innerHTML) + 1) * single_price;
    target.innerHTML = parseInt(target.innerHTML) + 1;

}

function removeItem(x) {
    console.log(list);
    var target = document.getElementById("item" + x);
    var temp = [];
    for (data of list) { 
        if (data.id == x) {
            continue;
        }
        else {
            temp.push(data);
        }
    }
    list = temp;
    console.log(list);
    target.remove();
}

function addItem() {

    fetch("../deliverypage/js/menu.json")
        .then(response => response.json())
        .then(data => {
            adder(data);
        })
        .catch((error) => {
          console.error(error);
        })
  }

function adder(data) {
    var target = document.getElementById("cart");
    for (key of data) {
        for (item of list) {
            if (key.id == item.id) {
                target.innerHTML +=
                '<div class="shoppingCart__item row bg-light position-relative rounded-3 m-2 p-2 shadow" id="item' + key.id + '">' + 
                '<h4>Description: </h4>' +
                '<h6>' + key.description + '</h6>' + 
                '<img class="img-fluid col-md-3 rounded-3" src="./'+ key.image + '">' + 
                '<div class="col">' + 
                '<h4>' + key.name + '</h4>' +
                '<p>Tax: 10%</p>' +
                '<div class="adding__icon d-flex align-items-center">' +
                    '<i class="btn fa-regular fa-square-minus" onclick="decrease(' + key.id + ');"></i>' + 
                        '<span id="amount' + key.id + '">' + item.amount + '</span>' + 
                    '<i class="btn fa-regular fa-square-plus" onclick="increase(' + key.id + ');"></i>' +
                    '</div>' + 
                '</div>' +
                    '<i class="fa-regular fa-circle-xmark" id="close_btn" onclick="removeItem(' + key.id + ');"></i>' + 
                '<p class="price__item position-absolute bottom-0 w-50 text-end end-0" id="price' + key.id + '">' + (item.price * item.amount) + '</p>' + 
                '</div>';
            }
        }
    }
}

addItem();