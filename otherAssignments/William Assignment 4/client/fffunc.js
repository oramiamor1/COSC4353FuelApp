function calculateTotal() {
    let x = ($("#suggestedp").val() * $("#gallonsreq").val()).toFixed(2);
    $("#totalamt").val(x);
}

$(function() {
    $("#gallonsreq").on("change keyup", calculateTotal);
})

let today = new Date().toISOString().substr(0, 10);
document.querySelector("#ddate").value = document.querySelector("#ddate").min = today;
