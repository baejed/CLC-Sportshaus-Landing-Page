<?php
$server = "localhost";
$username = "root";
$password = "";
$port = "3306";
$database = "clc_database";

$dbConnection = mysqli_connect($server, $username, $password, $database, $port);

if($dbConnection -> connect_error){
  echo"<h1>Connection Error</h1>";
  die("Connection Error, Checl Database Credentials".$conUMTC->connect_error);
}