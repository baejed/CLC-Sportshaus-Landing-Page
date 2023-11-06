<?php
include("database_connection.php");
$query = "SELECT Brand, Model_Name, Product_img, Price FROM products";
$result = $dbConnection->query($query);

echo "<link rel='stylesheet' href='Styles/CatalogStyles.css' />";
echo  "<div class = 'catalog-container'>";
echo "<h1 class = 'catalog-header'>POPULAR RIGHT NOW</h1>";
echo "<div class = 'catalog-cards-container' id = 'catalog-cards-container'>";
while ($product = $result->fetch_assoc()) {

  echo "
  <div class = 'catalog-cards'>
  <img src='data:image/jpeg;base64," . base64_encode($product['Product_img']) . "' alt='image not found' class='catalog-image'>
  <h3 class = 'model-name'>" . $product['Model_Name'] . "</h3>
  <p class = 'brand'>" . $product['Brand'] . "</p>  
  <p class = 'price'>".$product['Price']."</p>
  </div>
  ";
}
echo "</div>";
echo "</div>";

echo "<input type='button' style = 'margin-left: 1%' value='Unlock admin privileges' onclick='addLoginField()' id='unlock-button' name='unlock-button' class='buttons'>";