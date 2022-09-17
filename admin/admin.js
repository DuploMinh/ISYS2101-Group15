//pagination parts
const foodElements = document.getElementById("dishes_info");
const userElements = document.getElementById("user_info");
const orderElements = document.getElementById("order_info");
const pageUserElement = document.getElementById("user_pagination");
const pageOrderElement = document.getElementById("order_pagination");
const pageFoodElement = document.getElementById("food_pagination");

let currentPage = 1;
let rows = 2;

//Fetch food api
let url_food = 'http://68.183.181.77:8080/food/all';
fetch(url_food)
.then(responseFood => responseFood.json())
.then(dataFood => {

let foods = displayList(dataFood.content, foodElements, rows, currentPage)
write_food(foods);
setupPagination(dataFood.content, pageFoodElement, rows);

})
.catch((errorFood) => {
console.error(errorFood);
})

//Function to write all food to page
function write_food(dataFood) {
    for (key of dataFood) {
        foodElements.innerHTML += 
        '<tr>' +
            '<!--Assign data for each element of the row -->'+
            '<td>' + key.name + '</td>'+
            '<td>'+ key.category +'</td>'+
            '<td>'+ key.description +'</td>'+
            '<td>'+ key.price +'</td>'+
            '<td class="profile_picture" ><img src="' + key.imgPath + '" alt=""></td>'+
            '<td>'+ key.id +'</td>'+
            '<td>'+
                '<button class="btn btn_primary">Edit</button>'+
                '<button class="btn btn_primary">Delete</button>'+
            '</td>'+
        '</tr>';
    }
}

//Fetch user api
let url_user = 'http://68.183.181.77:8080/userEs';
fetch(url_user)
.then(response => response.json())
.then(dataUser => {

let users = displayList(dataUser._embedded.userEs, userElements, rows, currentPage)
write_user(users);
setupPagination(dataUser._embedded.userEs, pageUserElement, rows);

})
.catch((error) => {
console.error(error);
})

function write_user(data) {
    for (key of data) {
        userElements.innerHTML += 
        '<tr>' +
            '<!--Assign data for each element of the row -->'+
            '<td>' + key.firstName + '</td>'+
            '<td>'+ key.lastName +'</td>'+
            '<td>'+ key.email +'</td>'+
            '<td>'+ key.password +'</td>'+
            '<td class="profile_picture" ><img src="' + key.imgPath + '" alt=""></td>'+
            '<td>'+ key.userName +'</td>'+
            '<td>'+
                '<button class="btn btn_primary">Edit</button>'+
                '<button class="btn btn_primary">Delete</button>'+
            '</td>'+
        '</tr>';
    }
}

//Fetch order api
let url_Order = 'http://68.183.181.77:8080/orderEntities';
fetch(url_Order)
.then(response => response.json())
.then(dataOrder => {

let orders = displayList(dataOrder._embedded.orderEntities, orderElements, rows, currentPage)
write_order(orders);
setupPagination(dataOrder._embedded.orderEntities, pageOrderElement, rows);

})
.catch((error) => {
console.error(error);
})

function write_order(data) {
    for (key of data) {
        let moreS = [];
        if(key.spoon === true) {
            moreS.push("Spoon")
        }
        if(key.silverPaper === true) {
            moreS.push("Silver Paper")
        }
        if(key.ketchup === true) {
            moreS.push("Ketchup")
        }
        if(key.chiliSauce === true) {
            moreS.push("Chili Sauce")
        }
        orderElements.innerHTML += 
        '<tr>' +
            '<!--Assign data for each element of the row -->'+
            '<td>' + key.id + '</td>'+
            '<td>' + key.user + '</td>'+
            '<td>'+ key.itemList +'</td>'+
            '<td>'+ key.address +'</td>'+
            '<td>'+ key.voucher +'</td>'+
            '<td>' + key.requirement + '</td>'+
            '<td>'+ moreS +'</td>'+
            '<td>' + key.totalCost + '</td>'+
            '<td>'+
                '<button class="btn btn_primary">Edit</button>'+
                '<button class="btn btn_primary">Delete</button>'+
            '</td>'+
        '</tr>';
    }
}


// Pagination part

function displayList(items, wrapper, rowperpage, page) {
    wrapper.innerHTML = "";
    page--;

    let start = rowperpage *page;
    let end = start + rowperpage;
    let paginatedItems = items.slice(start, end);

    console.log(paginatedItems)
    return paginatedItems;
}

function setupPagination (items, wrapper, rowperpage) {
    wrapper.innerHTML = "";
    let pageCount = Math.ceil(items.length / rowperpage);
    console.log(items.length)
    for (let i = 1; i < pageCount + 1; i++) {
        let btn = paginationButton(i, items);
        wrapper.appendChild(btn);
    }
}

function paginationButton (page, items) {
    let button = document.createElement('button');
    button.innerText = page;

    // if (currentPage === page) button.classList.add("active");

    button.addEventListener('click', function () {
        currentPage = page;
        if (document.getElementById("order").classList.contains("active")) {
            write_order(displayList(items, orderElements, rows, currentPage));
        }

        if (document.getElementById("food").classList.contains("active")) {
            write_food(displayList(items, foodElements, rows, currentPage));
        }

        if (document.getElementById("user").classList.contains("active")) {
            write_user(displayList(items, userElements, rows, currentPage));
        }
    })
    return button;
}