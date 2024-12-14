let scrollSpy = new bootstrap.ScrollSpy(document.body, { target: '#navbar-main' })

function redirectLinkedIn( event )
{
    window.open("https://www.linkedin.com/in/josh-fitzgerald-profile-hello-there/");
}

function sendMessage() {
    document.getElementById("successEmail").style.display = "block";
    document.getElementById("phoneNumberInput"). value = "";
    document.getElementById("messageInput"). value = "";
    document.getElementById("categoryInput"). value = "";
    document.getElementById("emailAddressInput"). value = "";
}

function confirm() {
    alert("Message Sent!");
}

function redirectTUD( event )
{
    window.open("https://www.tudublin.ie/");
}

function redirectUTS( event )
{
    window.open("https://utstechnologies.ie/");
}