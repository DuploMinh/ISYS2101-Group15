// Update More Work For 
window.setInterval(function() {
    var target = document.getElementById('chat-body');
    target.scrollTop = target.scrollHeight;
  }, 1000);


//Show ChatBox
function showChat() {
    if (document.getElementById('chat-container').style.display == 'flex') {
        document.getElementById('chat-container').style.display = 'flex';
        document.getElementById('chat-container').style.flexDirection = 'column';
    }
    else {
        document.getElementById('chat-container').style.display = 'flex';
        document.getElementById('chat-container').style.flexDirection = 'column';        
        startChat();
    }
}
// Hide ChatBox
function hideChat() {
    document.getElementById('chat-container').style.display = 'none';
    var sender = document.querySelectorAll('.chat-body-sender');
    var receiver = document.querySelectorAll('.chat-body-receiver');
    var info = document.querySelectorAll('.chat-body-info');
    sender.forEach(x => {
        x.remove();
    });
    receiver.forEach(x => {
        x.remove();
    });
    info.forEach(x => {
        x.remove();
    });
    sessionStorage.removeItem('chat-body-info');
}

function startChat() {
    if (sessionStorage.getItem('chat-body-info')) {        
        sessionStorage.removeItem('chat-body-info');
        var target = document.getElementById('chat-info');
        target.innerHTML = '<i class="bi bi-info-circle"></i> Info';
        var sender = document.querySelectorAll('.chat-body-sender');
        var receiver = document.querySelectorAll('.chat-body-receiver');
        var info = document.querySelectorAll('.chat-body-info');
        sender.forEach(x => {
            x.remove();
        });
        receiver.forEach(x => {
            x.remove();
        });
        info.forEach(x => {
            x.remove();
        });
    }
    document.getElementById('chat-chat').className = 'btn btn-primary mt-1 ms-1 fw-bold';
    var target = document.getElementById('chat-body');
    target.innerHTML += 
    '<div class="container-fluid d-flex gap-3 chat-body-receiver" id="chat-body-info">' +
    '<div class="server-icon">' +
    '<i class="bi bi-server"></i>'+
    '</div>'+
    '<div class="chat-body-receiver-message mt-2 mb-2 bg-warning text-start">'+
    '<span> Welcome Back To Avenger Chat ٩(^‿^)۶' + '</span>'+
    '</div>'+
    '</div>';
}


function answerValidMessage() {
    var target = document.getElementById('chat-body');
    var index = 0;
    var message = sessionStorage.getItem('message');
    console.log(message);
    for (key of qa) {
        if (message == key.id) {
            target.innerHTML += 
            '<div class="container-fluid d-flex gap-3 chat-body-receiver" id="chat-body-info">' +
            '<div class="server-icon">' +
                '<i class="bi bi-server"></i>'+
            '</div>'+
            '<div class="chat-body-receiver-message mt-2 mb-2 bg-warning text-start">'+
                '<span>' + qa[index].answer + '</span>'+
            '</div>'+
            '</div>';
            index++;
        }
        else {
            index++;
            if (message > qa.length) {
                answerInvalidMessage();
            }
        }
    }
    sessionStorage.removeItem('message');
}

function answerInvalidMessage() {
    var target = document.getElementById('chat-body');
    target.innerHTML += 
    // Intro
    '<div class="container-fluid d-flex gap-3 chat-body-receiver" id="chat-body-info">' +
    '<div class="server-icon">' +
        '<i class="bi bi-server"></i>'+
    '</div>'+
    '<div class="chat-body-receiver-message mt-2 mb-2 bg-danger text-start">'+
        '<span>Invalid Input! Please type in correct digit for your question... </span>'+
    '</div>'+
    '</div>';     
}

function updateMessage() {
    var message = document.getElementById('message').value;
    var target = document.getElementById('chat-body');
    if (sessionStorage.getItem('chat-body-info') == 'true') {
        const reg = /^[0-9]{1}$/;
        if (reg.test(message)) {
            target.innerHTML += 
            '<div class="container-fluid d-flex gap-1 chat-body-sender">'+
            '<div class="chat-body-sender-message mt-2 mb-2 bg-info text-end">'+
                '<span>' + message + '</span>'+
            '</div>'+
            '<div class="profile-icon">'+
                '<i class="bi bi-person-square"></i>'+
            '</div>'+
            '</div>';
            document.getElementById('message').value = '';
            showAnimation();
            sessionStorage.setItem('message',message);
            setTimeout(deleteAnimation, 3000);
            setTimeout(answerValidMessage, 3500);
            document.getElementById('message').value = '';
            document.getElementById("reset").click();
        }
        else {
            target.innerHTML += 
            '<div class="container-fluid d-flex gap-1 chat-body-sender">'+
            '<div class="chat-body-sender-message mt-2 mb-2 bg-info text-end">'+
                '<span>' + message + '</span>'+
            '</div>'+
            '<div class="profile-icon">'+
                '<i class="bi bi-person-square"></i>'+
            '</div>'+
            '</div>';
            document.getElementById('message').value = '';
            showAnimation();
            setTimeout(deleteAnimation, 3000);       
            setTimeout(answerInvalidMessage, 3500);
            document.getElementById('message').value = '';
            document.getElementById("reset").click();
        }
    }
    else {
        target.innerHTML += 
        '<div class="container-fluid d-flex gap-1 chat-body-sender">'+
        '<div class="chat-body-sender-message mt-2 mb-2 bg-info text-end">'+
            '<span>' + message + '</span>'+
        '</div>'+
        '<div class="profile-icon">'+
            '<i class="bi bi-person-square"></i>'+
        '</div>'+
        '</div>';
        sessionStorage.setItem('message',message);
        document.getElementById("reset").click();
        setTimeout(showAnimation,3000);
        setTimeout(serverRespond,3500);
    }
}

function serverRespond() {
    deleteAnimation();
    var target = document.getElementById('chat-body');
    var message = sessionStorage.getItem('message');
    let condition = false;
    for (key of express) {
        const regexp = new RegExp(key.reg, 'g');
        if (regexp.test(message)) {
            target.innerHTML += 
            '<div class="container-fluid d-flex gap-3 chat-body-receiver" id="chat-body-info">' +
            '<div class="server-icon">' +
                '<i class="bi bi-server"></i>'+
            '</div>'+
            '<div class="chat-body-receiver-message mt-2 mb-2 bg-warning text-start">'+
                '<span>' + key.res + '</span>'+
            '</div>'+
            '</div>';
            condition = true;
        }
    }
    if(!condition) {
        target.innerHTML += 
        '<div class="container-fluid d-flex gap-3 chat-body-receiver" id="chat-body-info">' +
        '<div class="server-icon">' +
            '<i class="bi bi-server"></i>'+
        '</div>'+
        '<div class="chat-body-receiver-message mt-2 mb-2 bg-warning text-start">'+
            '<span>We are not sure about that, please try another question...' + '</span>'+
        '</div>'+
        '</div>';
    }
    sessionStorage.removeItem('message');
}

function showInfo() {
    if (sessionStorage.getItem('chat-body-info')) {
        var target = document.getElementById('chat-info');
        target.innerHTML = '<i class="bi bi-info-circle"></i> Info';
        var sender = document.querySelectorAll('.chat-body-sender');
        var receiver = document.querySelectorAll('.chat-body-receiver');
        var info = document.querySelectorAll('.chat-body-info');
        sender.forEach(x => {
            x.remove();
        });
        receiver.forEach(x => {
            x.remove();
        });
        info.forEach(x => {
            x.remove();
        });
        sessionStorage.removeItem('chat-body-info');
        return;
    }
    else {
        var sender = document.querySelectorAll('.chat-body-sender');
        var receiver = document.querySelectorAll('.chat-body-receiver');
        var info = document.querySelectorAll('.chat-body-info');
        sender.forEach(x => {
            x.remove();
        });
        receiver.forEach(x => {
            x.remove();
        });
        info.forEach(x => {
            x.remove();
        });
        var target = document.getElementById('chat-info');
        target.innerHTML = '<i class="bi bi-info-circle"></i> Exit Info';
    }
    document.getElementById('chat-chat').className = 'btn btn-success mt-1 ms-1 fw-bold';
    showAnimation();
    setTimeout(showQuestion, 3500);
}

function showAnimation() {
    var target = document.getElementById('chat-body');
    target.innerHTML +=     
    '<div class="container-fluid d-flex gap-3 chat-body-receiver" id="typing">' +
    '<div class="server-icon">' +
        '<i class="bi bi-server"></i>'+
    '</div>'+
    '<div class="chat-body-receiver-message mt-2 mb-2 bg-warning text-start">'+
        '<span class="dot one"></span>'+
        '<span class="dot two"></span>'+
        '<span class="dot three"></span>'+
    '</div>'+
    '</div>';    
}

function deleteAnimation() {
    var typing = document.getElementById('typing');
    typing.remove();
}

function showQuestion() {
    deleteAnimation();
    var target = document.getElementById('chat-body');
    target.innerHTML += 
    // Intro
    '<div class="container-fluid d-flex gap-3 chat-body-receiver" id="chat-body-info">' +
    '<div class="server-icon">' +
        '<i class="bi bi-server"></i>'+
    '</div>'+
    '<div class="chat-body-receiver-message mt-2 mb-2 bg-warning text-start">'+
        '<span>Please type in correct digit for your question... </span>'+
    '</div>'+
    '</div>';

    // Question Generate
    var index = 0;
    for (key of qa) {
        target.innerHTML += 
        '<div class="container-fluid d-flex gap-3 chat-body-receiver" id="chat-body-info">' +
        '<div class="server-icon">' +
            '<i class="bi bi-server"></i>'+
        '</div>'+
        '<div class="chat-body-receiver-message mt-2 mb-2 bg-warning text-start">'+
            '<span>' + (index + 1) + '. ' + qa[index].question + '</span>'+
        '</div>'+
        '</div>';
        index++;
    }
    sessionStorage.setItem('chat-body-info', 'true');
}



// Switch Map Location Display
function showMap(data) {
    if (data == 'HCM') {
        document.getElementById('map').src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.897549572912!2d106.62903071532963!3d10.742378862757418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529e94594adcd%3A0x35cd5ec9e929d87c!2sMM%20Mega%20Market%20B%C3%ACnh%20Ph%C3%BA!5e0!3m2!1sen!2s!4v1659362001559!5m2!1sen!2s";
        document.getElementById('branch').innerHTML = 'Ho Chi Minh City';  
    }

    if (data == 'HN') {
        document.getElementById('map').src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.976584219373!2d105.82975670890245!3d21.02057435817134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9d33f5f6c1%3A0xabe31a39ff332353!2sSupermarket%20Electric%20Pico!5e0!3m2!1sen!2s!4v1661013526398!5m2!1sen!2s";
        document.getElementById('branch').innerHTML = 'Ha Noi City';  
    }

    if (data == 'NT') {
        document.getElementById('map').src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6947.363027702921!2d109.18432798136888!3d12.243168555523603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31705d5440d0021d%3A0xdf15c9f3343a3847!2sSi%C3%AAu%20th%E1%BB%8B%20Co.opmart%20Nha%20Trang!5e0!3m2!1sen!2s!4v1661013680229!5m2!1sen!2s";
        document.getElementById('branch').innerHTML = 'Nha Trang City';  
    }
}

//Show Reservation Form
function showForm(id) {
    document.getElementById("form-column").style.display = 'block';
    var table = document.getElementById('table-reservation');
    table.innerHTML = 'Table ' + id + ' Reservation';
    if (sessionStorage['table']) {
        sessionStorage.removeItem('table');
        sessionStorage.setItem('table', id);
    }
    else {
        sessionStorage.setItem('table', id);
    }
}




var qa = [
    {
        "id" : 1,
        "question" : "Forgot Username & Password",
        "answer" : "Please check out <b>Find Passwords</b> feature on our <b>Login Page</b>"
    },
    {
        "id" : 2,
        "question" : "Wrong Order Delivered",
        "answer" : "Please come to our local branch to receive your refund and coupon code <3"
    },    
    {
        "id" : 3,
        "question" : "How to Make Reservation",
        "answer" : "Please choose your desired seat location, fill out the form. You can choose branch location, referring to view local branch for specific address. "
    },    
    {
        "id" : 4,
        "question" : "Cancel A Reservation",
        "answer" : "Please call our local branch to cancel your reservation."
    },    
    {
        "id" : 5,
        "question" : "How to Make Delivery Order",
        "answer" : "Log onto your account, and click <b>Delivery</b> located on top right of the page."
    },
    {
        "id" : 6,
        "question" : "Contact Information",
        "answer" : "<b>Email: abc123@gmail.com</b><br> <b>Phone: 0909999999</b>"
    }
]

var express = [
    {
        "reg" : 'H[a-zA-z]',
        "res" : "Hello, welcome to Avenger ( ͡❛ ͜ʖ ͡❛)"
    },
    {
        "reg" : 'I (love|Love)',
        "res" : "Yes, we love that too ٩̋(๑˃́ꇴ˂̀๑)"
    },
    {
        "reg" : 'order',
        "res" : "Please address your concern to use via our phone/email. Thank you（＾ ω＾）"
    },
    {
        "reg" : 'make [A-z a-z]+ reservation',
        "res" : "Please fill out our reservation form. Thank you（＾ ω＾）"
    },
    {
        "reg" : 'open (hours|hour|time)',
        "res" : "We are open from 10:00am to 18:00pm on business days o(^-^ o )"
    },
    {
        "reg" : '(open your restaurant|open restaurant)',
        "res" : "We are open from 10:00am to 18:00pm on business days o(^-^ o )"
    },
    {
        "reg" : 'time do you open',
        "res" : "We are open from <b>10:00am</b> to <b>18:00pm</b> on business days o(^-^ o )"
    },
    {
        "reg" : '(you open|you work)',
        "res" : "We are open from 10:00am to 18:00pm on business days o(^-^ o )"
    },
    {
        "reg" : 'cancel reservation',
        "res" : "Please address your concern to use via our phone/email. Thank you (╯ᆺ╰๑)"
    },
    {
        "reg" : 'menu',
        "res" : "Our menu can be visited via <b>Home Page</b> or <b>Delivery Page</b>. Thank you (⚈∇⚈ )"
    },
    {
        "reg" : '(food|seafood|pizza|chicken|beef|beverage|drink|dish|appetizer|salad|dessert|vegetable|protein|cheese)',
        "res" : "Please refer to our menu for these items. It can be visited via <b>Home Page</b> or <b>Delivery Page</b>. Thank you (⚈ᗜ⚈ )"
    },
    {
        "reg" : '(Food|Seafood|Pizza|Chicken|Beef|Beverage|Drink|Dish|Appetizer|Salad|Dessert|Vegetable|Protein|Cheese)',
        "res" : "Please refer to our menu for these items. It can be visited via <b>Home Page</b> or <b>Delivery Page</b>. Thank you (⚈ᗜ⚈ )"
    },
    {
        "reg" : 'location',
        "res" : "Please refer to our reservation page to view our available branches (oº‿ º )☆ﾟ.*･｡ﾟ"
    },
    {
        "reg" : 'new customer',
        "res" : "Please refer to our Home Page to view our available information and guidelines (oº‿ º )☆ﾟ.*･｡ﾟ"
    },
    
]