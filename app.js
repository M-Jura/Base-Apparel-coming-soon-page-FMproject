document.getElementById("subscription-form").addEventListener("submit", () => {

    let email = document.forms["subscription-form"]["email"];
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.value.match(regexEmail)) {
        alert("Thank you for your subscription");       
    } else {
        document.querySelector(".email").style.border = "1px solid var(--Soft-Red)";
        document.querySelector(".icon-error").classList.toggle("display-warning");
        document.querySelector(".warning").classList.toggle("display-warning");
    } 
  });