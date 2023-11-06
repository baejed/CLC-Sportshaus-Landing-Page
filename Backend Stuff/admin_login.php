<?php
if (isset($_POST["submit-cred"]) && (!empty($_POST["user"]) && !empty($_POST["pass"]))) {
  $user = $_POST['user'];
  $passHash = hash('sha256', $_POST['pass']);

  $realUser1 = "bajed";
  $realPassHash1 = "4938a08a8e81a8a9e45b4ee887d4a2b3431a9d38ddb03ff1705c1b056bbf9be1";

  $realUser2 = "garcia";
  $realPassHash2 = "ffb7769094fb8959d5d4cb983f8bf5ce6c2bd0dff145c8365fb14ff744e4ced0";

  $realUser3 = "zecerah";
  $realPassHash3 = "08b0b98ea1118db3c7c1913f386a4ab620139fe6b76165f62981a43e198dc2ec";

  if (($user == $realUser1 && $passHash == $realPassHash1) || ($user == $realUser2 && $passHash == $realPassHash2) || ($user == $realUser3 && $passHash == $realPassHash3)) {
    displayOptions();
    echo "
    <script>
    alert('Admin privileges unlocked');
    window.scrollTo(0, 2800);
    var buttonElement = document.getElementById('unlock-button');
    buttonElement.remove();
    </script>
    ";
  }else{
    echo"<script>alert('Incorrect username or passord')</script>";
  }
}

function displayOptions(){
  echo"
  <script>document.getElementById('form-div').innerHTML += optionsElem;
  window.scrollTo(0, document.body.scrollHeight);

  var field = document.getElementById('field');
  field.remove();

  var buttonElement = document.getElementById('unlock-button');
  buttonElement.remove();</script>
  ";
}