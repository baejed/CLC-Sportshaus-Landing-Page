var loginElem =
  "<form method='post'><table><tr><td class = 'login-label'>Username:</td><td><input type='text' name='user' id='user'></td></tr><tr><td class = 'login-label'>Password:</td><td><input type='password' name='pass' id='pass'></td></tr></table><input type='submit' name='submit-cred' id='submit-cred' value='Submit' class = 'buttons'></input></form>";

var addElem =
  "<form method='post' enctype='multipart/form-data' id='field'><table><tr><td><select name='brand-input' id='brand-input' placeholder='Brand'><option value=''>Select Brand</option><option value='Nike'>Nike</option><option value='Nike | Jordan'>Nike | Jordan</option><option value='Converse'>Converse</option><option value='Puma'>Puma</option><option value='Adidas'>Adidas</option><option value='New Balance'>New Balance</option><option value='Fila'>Fila</option><option value='Vans'>Vans</option><option value='DC'>DC</option><option value='Onitsuka Tiger'>Onitsuka Tiger</option></select></td></tr><tr><td><input type='text' name='model-name-input' id='model-name-input' placeholder='Model Name' /></td></tr><tr><td><input type='number' name='price-input' id='price-input' placeholder='Price in Php' pattern = '[0-9]'/></td></tr><tr><td><input type='file' name='image-input' id='image-input' accept='image/png, image/jpeg' /></td></tr></table><ul><li><input type='submit' value='Submit' name='btn-submit' id='btn-submit' class='buttons' /></li><li><input type='submit' value='Done' name='btn-exit' id='btn-exit' class='buttons' /></li><li><input type='button' value='Back' id='btn-back' onclick='displayOptions()' class='buttons'></li></ul></form>";

var updateElem =
  "<form method='post' enctype='multipart/form-data' id='field'><table><tr><td><input type='text' name='current-model-name' placeholder='Model Name (Ex. Dunk Low Retro, Samba OG)' /></td></tr><tr><td><input type='text' name='new-model-name' placeholder='New model name' /></td></tr><tr><td><select name='new-brand' id='new-brand' placeholder='Brand'><option value=''>Select Brand</option><option value='Nike'>Nike</option><option value='Nike | Jordan'>Nike | Jordan</option><option value='Converse'>Converse</option><option value='Puma'>Puma</option><option value='Adidas'>Adidas</option><option value='New Balance'>New Balance</option><option value='Fila'>Fila</option><option value='Vans'>Vans</option><option value='DC'>DC</option><option value='Onitsuka Tiger'>Onitsuka Tiger</option></select></td></tr><tr><td><input type='number' name='new-price' placeholder='New price' /></td></tr><tr><td><input type='file' name='image-input' id='image-input' accept='image/png, image/jpeg' /></td></tr></table><ul><li><input type='submit' value='Submit' name='btn-submit-update' class='buttons' /></li><li><td><input type='submit' value='Done' name='btn-exit-update' class='buttons' /></td></li><li><input type='button' value='Back' id='btn-back' onclick='displayOptions()' class='buttons'></li></ul></form>";

var deleteElem =
  "<form method='post' id='field'><table><tr><td><input type='text' name='model-name' id='model-name' placeholder='Model name (Ex. Dunk Low Retro, Samba OG)' /></td></tr></table><ul><li><input type='submit' value='Delete' name='btn-delete' class='buttons'/></li><li><input type='submit' value='Done' name='btn-done-delete' class='buttons'></li><li><input type='button' value='Back' id='btn-back' onclick='displayOptions()' class='buttons'></li></ul></form>";

var optionsElem =
  "<div id='options'><ul><li><input type='button' value='Add Shoes' id='add-shoes' class='buttons' onclick='addAddField()'></li><li><input type='button' value='Update Shoes' id='update-shoes' class='buttons' onclick='addUpdateField()'></li><li><input type='button' value='Delete Shoes' id='delete-shoes' class='buttons' onclick='addDeleteField()'></li></ul></div>";

var unlockAdminClicked = false;

// var unlockButton = document.getElementById('unlock-button');
// unlockButton.addEventListener('click', function () {
//   unlockAdminClicked = true;
// })

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

function displayOptions() {
  document.getElementById("form-div").innerHTML += optionsElem;

  var field = document.getElementById("field");
  field.remove();

  var buttonElement = document.getElementById("unlock-button");
  buttonElement.remove();
}

function addLoginField() {
  document.getElementById("login-div").innerHTML += loginElem;

  var loginDiv = document.getElementById("login-div");
  loginDiv.style.borderWidth = "5px";

  var buttonElement = document.getElementById("unlock-button");
  buttonElement.remove();
  scrollBottom();
}

function addAddField() {
  document.getElementById("form-div").innerHTML += addElem;
  removeOptions();
}

function addUpdateField() {
  document.getElementById("form-div").innerHTML += updateElem;
  removeOptions();
}

function addDeleteField() {
  document.getElementById("form-div").innerHTML += deleteElem;
  removeOptions();
}

function removeOptions() {
  var options = document.getElementById("options");
  options.remove();
}

function removeFields() {
  var fields = document.getElementById("field");
  fields.remove();
}

function refresh() {
  location.reload();
  scrollBottom();
}

function scrollBottom() {
  window.scrollTo(0, document.body.scrollHeight);
}

function scrollForm() {
  window.scrollTo(0, 2800);
}
