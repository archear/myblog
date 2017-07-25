<?php
/**
 * Created by IntelliJ IDEA.
 * User: archer
 * Date: 2017/7/16
 * Time: 15:31
 */

//功能四：给分页按钮添加点击事件
header("content-type:application/json;charset=utf-8");
//接收参数
$pno=$_REQUEST['pno'];
//转换数据库分页偏移量 0
$pno=($pno-1)*5;
require("../init.php");
//创建Sql，并发送
$sql="select * from book LIMIT $pno,5";
$result=mysqli_query($conn,$sql);
$rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
//转换为json类型并输出
echo json_encode($rows);

?>