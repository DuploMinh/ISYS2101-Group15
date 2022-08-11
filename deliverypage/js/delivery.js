//This function updates the badge number every time user clicks
function cartUpdate() {
    let badge = document.getElementById("badge").innerHTML;
    badge = Number(badge);
    if (badge == 10) {
        alert("Too Much Items Added");
        return;
    } 
    badge += 1;
    document.getElementById("badge").innerHTML = badge;
}