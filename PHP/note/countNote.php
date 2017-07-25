<?php
    //功能二:计算笔记的总页数
    header("content-type:application/json;charset=utf-8");
    //接收参数bid
    $bid=$_REQUEST['bid'];
    require("../init.php");
    //创建sql,并发送
    $sql="select count(*) from note where bid=$bid";
    $result=mysqli_query($conn,$sql);
    //抓取
    $row=mysqli_fetch_row($result);
    //将$row[0]向上取整
    $num=ceil(intval($row[0])/10);
    $output=["page"=>$num];
    echo json_encode($output);
?>