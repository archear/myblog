<?php
header("content-type:application/json;charset=utf-8");
$bid = $_REQUEST['bid'];
$nName = $_REQUEST['nName'];
require("../init.php");
$sql = "insert into note values(null,'$nName','',now(),$bid)";
//    $sql1="insert into content values($nid,)"
$result = mysqli_query($conn, $sql);
echo json_encode($result);

?>