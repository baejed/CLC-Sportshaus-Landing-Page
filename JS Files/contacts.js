var email = document.getElementById('email');
email.addEventListener('click', copyEmail);

var facebook = document.getElementById('facebook');
facebook.addEventListener('click', goToFacebookPage);

var address = document.getElementById('address');
address.addEventListener('click', goToLocation);


function copyEmail() {
  var emailAddress = "clcsportshaus@gmail.com";
  navigator.clipboard.writeText(emailAddress);
  alert("Email copied to clipboard");
}

function goToFacebookPage() {
  window.location.href = "https://www.facebook.com/profile.php?id=100064052292791";
}

function goToLocation() {
  window.location.href = "https://www.google.com/maps/@7.307187,125.8542331,21z?entry=ttu";
}