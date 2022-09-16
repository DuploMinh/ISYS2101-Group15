
// Javascipt code to redirect admin to details page
document.addEventListener("DOMContentLoaded",  () => {
    const rows = document.querySelectorAll("tr[data-href]");//Read all rows with the links
    rows.forEach (row => { //each row add one event listener
        row.addEventListener('click', () => {
            window.location.href = row.dataset.href; //redirect window to the link
        });
    });
});

//Fetch food api
let url_food = 'http://68.183.181.77:8080/food/all';
fetch(url_food)
.then(responseFood => responseFood.json())
.then(dataFood => {
write_food(dataFood);
})
.catch((errorFood) => {
console.error(errorFood);
})

function write_food(dataFood) {
    for (key of dataFood.content) {
        document.getElementById("dishes_info").innerHTML += 
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
.then(data => {
write_user(data);
console.log(data)
})
.catch((error) => {
console.error(error);
})

function write_user(data) {
    for (key of data._embedded.userEs) {
        document.getElementById("user_info").innerHTML += 
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
.then(data => {
write_order(data);
console.log(data)
})
.catch((error) => {
console.error(error);
})

function write_order(data) {
    for (key of data._embedded.orderEntities) {
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
        document.getElementById("order_info").innerHTML += 
        '<tr>' +
            '<!--Assign data for each element of the row -->'+
            '<td>' + key.user + '</td>'+
            '<td>'+ key.itemList +'</td>'+
            '<td>'+ key.address +'</td>'+
            '<td>'+ key.voucher +'</td>'+
            '<td>' + key.requirement + '</td>'+
            '<td>'+ moreS +'</td>'+
            '<td>'+
                '<button class="btn btn_primary">Edit</button>'+
                '<button class="btn btn_primary">Delete</button>'+
            '</td>'+
        '</tr>';
    }
}