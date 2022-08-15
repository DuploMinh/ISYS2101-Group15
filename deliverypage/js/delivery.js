var data = [];
//This function updates the badge number every time user clicks
function cartUpdate() {
    let badge = document.getElementById("badge").innerHTML;
    badge = Number(badge);
    badge += 1;
    document.getElementById("badge").innerHTML = badge;
}



function addItem(x) {

  fetch("./js/menu.json")
      .then(response => response.json())
      .then(data => {
          adder(data,x);
      })
      .catch((error) => {
        console.error(error);
      })
}

function adder(data, x) {

    let index = 0;
    for (key of data) {
        if(key.id == x) {
          document.getElementById("cart-list").innerHTML += 
          '<li class="list-group-item cart-item d-flex mt-2 mb-2">'+
          '<div class="d-block">'+
              '<div class="cart-item-name justify-content-center text-center p-2 mb-2">'+
                  '<h4 class="h4">' + key.name + '</h4>' +
              '</div>'+
              '<div class="d-flex w-100 gap-2">'+
                  '<div class="cart-item-image w-50">'+
                      '<img class="img-fluid" alt="item_image" src="./' + key.image + '">'+
                  '</div>'+ 
                  '<div class="w-50 d-block m-auto gap-4 justify-content-center cart-item-button" id="cart-item-button">'+
                      '<div class="d-flex gap-4 h-50 justify-content-center">'+
                          '<div class="subtract-item">'+
                              '<button type="button" class="btn btn-dark btn-sm item-button overflow-hidden" id="subtract">'+
                                  '<i class="bi bi-dash-lg overflow-auto">'+'</i>'+
                              '</button>'+
                          '</div>'+

                          '<div class="cart-item-amount">'+
                              '<h2 class="h2">'+ '1' + '</h2>'+
                          '</div>'+

                          '<div class="add-item">'+
                              '<button type="button" class="btn btn-dark btn-sm item-button" id="add">'+ 
                                  '<i class="bi bi-plus-lg"></i>'+
                              '</button>'+
                          '</div>'
                      +'</div>'+
                      '<div class="d-flex h-50 justify-content-center mt-3 p-auto">'+
                          '<h4 class="h4">'+ 'Price: ' + '</h4>'+
                          '<h4 class="h4" id="amount"> ' + key.price + '$ </h4>'+
                      '</div>'+
                  '</div>'+ 
              '</div>'+
          '</div>'+
      '</li>';
          break;
        }

    }
}