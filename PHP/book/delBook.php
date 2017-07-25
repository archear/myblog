<?php
/**
 * Created by IntelliJ IDEA.
 * User: archer
 * Date: 2017/7/16
 * Time: 18:22
 */
//功能五：删除当前所选元素
header("content-type:application/json;charset=utf-8");
//接收参数
$bid = $_REQUEST['bid'];
require("../init.php");
//创建Sql
$sql = "delete from book where bid= $bid";
$result = mysqli_query($conn, $sql);
//$output = ["msg" => $result];
if ($result) {
    echo json_encode($result);
} else {
//    $output = ["msg" => "删除失败"];
    echo '删除失败';
}
?>