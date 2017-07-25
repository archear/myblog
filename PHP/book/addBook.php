<?php
    //设置响应头消息
    header("content-type:application/json;charset=utf-8");
    //接收参数
    $bName=$_REQUEST['bName'];
    //连接数据库
    require("../init.php");
    //创建sql,并发送
    $sql="insert into book VALUES (NULL,'$bName',now())";
    $result=mysqli_query($conn,$sql);
    echo json_encode($result);
?>