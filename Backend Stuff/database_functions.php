<?php
//mao ni ang naga add og data sa database
include("database_connection.php");

if (isset($_POST["btn-submit"])) {
  $brand = $_POST["brand-input"];
  $modelName = $_POST["model-name-input"];
  $price = addComma($_POST["price-input"]);
  $price = "₱" . $price;

  $imgName = $_FILES['image-input']['name'];
  $imgSize = $_FILES['image-input']['size'];
  $tmpName = $_FILES['image-input']['tmp_name'];
  $imgExtension = strtolower(pathinfo($imgName, PATHINFO_EXTENSION));

  $newImgName = uniqid("IMG-", true) . '.' . $imgExtension;
  $imgUploadPath = 'temp/' . $newImgName;
  move_uploaded_file($tmpName, $imgUploadPath);

  if ($imgSize < 1000000)
    addProducts($brand, $modelName, $newImgName, $price, $dbConnection);
  else
    echo "<script>alert('File must not exceed 1MB')</script>";

  displayForm();
}

if (isset($_POST["btn-submit-update"])) {
  $currentModelName = $_POST['current-model-name'];
  $newModelName = $_POST['new-model-name'];
  $newBrandName = $_POST['new-brand'];
  $newPrice = addComma($_POST['new-price']);
  $newPrice = "₱" . $newPrice;

  $imgName = $_FILES['image-input']['name'];
  $imgSize = $_FILES['image-input']['size'];
  $tmpName = $_FILES['image-input']['tmp_name'];
  $imgExtension = strtolower(pathinfo($imgName, PATHINFO_EXTENSION));

  $newImgName = uniqid("IMG-", true) . '.' . $imgExtension;
  $imgUploadPath = 'temp/' . $newImgName;
  move_uploaded_file($tmpName, $imgUploadPath);

  if ($imgSize < 1000000 && $imgSize > 0)
    updateProducts($currentModelName, $newBrandName, $newModelName, $newImgName, $newPrice, $dbConnection);
  else if ($imgSize == 0)
    echo "<script>alert('Please input an image')</script>";
  else
    echo "<script>alert('File must not exceed 1MB')</script>";

  displayUpdateForm();
}

if (isset($_POST['btn-delete'])) {
  $modelName = $_POST['model-name'];
  deleteProducts($modelName, $dbConnection);
  displayDeleteForm();
}

include("catalog.php");

if ((isset($_POST['btn-delete']) || isset($_POST["btn-submit-update"]) || isset($_POST["btn-submit"]))) {
  echo "<script>
  var buttonElement = document.getElementById('unlock-button');
  buttonElement.remove();
  </script>";
  echo"<script>scrollForm()</script>";
}

//the same as displayFormInput, can't have both the same name
function displayForm()
{
  echo "<script>addAddField();</script>";
}

function displayUpdateForm()
{
  echo "<script>addUpdateField();</script>";
}

function displayDeleteForm()
{
  echo "<script>addDeleteField();</script>";
}

function addComma($price)
{
  $length = strlen($price);
  $starting = $length % 3;
  $numOfCommas = (int)($length / 3);

  if ($starting == 0) {
    $numOfCommas--;
    $starting = 3;
  }

  for ($i = 0; $i < $numOfCommas; $i++) {
    $price = substr_replace($price, ",", $starting, 0);
    $starting += 4;
  }

  return $price;
}

function addProducts($brand, $modelName, $imageName, $price, $dbConnection)
{
  if (empty($brand) || empty($modelName) || empty($imageName) || $price == '₱') {
    echo "<script>alert('Please fill all the fields')</script>";
    disableButton();
    return;
  }
  $query = "INSERT INTO products (Brand, Model_Name, Product_img, Price) VALUES('$brand', '$modelName', LOAD_FILE('C:\\\\xampp\\\\htdocs\\\\CLC Sportshaus Landing Page\\\\temp\\\\$imageName'), '$price');";
  try {
    $dbConnection->query($query);
    echo "<script>alert('Product added')</script>";
  } catch (mysqli_sql_exception $e) {
    echo "<script>alert('Please enter a unique model name or input an image')</script>";
  }
}

function updateProducts($currentModelName, $newBrand, $newModelName, $newImageName, $newPrice, $dbConnection)
{
  if (empty($currentModelName) || empty($newBrand) || empty($newModelName) || empty($newImageName) || $newPrice == '₱') {
    echo "<script>alert('Please fill all the fields')</script>";
    disableButton();
    return;
  }

  $query = "UPDATE products SET Brand = '$newBrand', model_name = '$newModelName', price = '$newPrice', product_img = LOAD_FILE('C:\\\\xampp\\\\htdocs\\\\CLC Sportshaus Landing Page\\\\temp\\\\$newImageName') WHERE model_name = '$currentModelName'";
  try {
    $dbConnection->query($query);
    echo "<script>alert('Product updated')</script>";
  } catch (mysqli_sql_exception $e) {
    echo "<script>alert('Please enter a unique model name or input an image')</script>";
  }
}

function deleteProducts($modelName, $dbConnection)
{
  if (empty($modelName)) {
    disableButton();
    echo "<script>alert('Please fill all the fields')</script>";
    return;
  }

  $query = "DELETE FROM products WHERE model_name = '$modelName'";
  $dbConnection->query($query);
  echo "<script>alert('Product deleted')</script>";
}

function disableButton()
{
  echo "<script>
  var buttonElement = document.getElementById('unlock-button');
  buttonElement.remove();
  </script>";
}
