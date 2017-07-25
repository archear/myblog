<?php
    //功能四：给分页按钮添加点击事件
    header("content-type:application/json;charset=utf-8");
    //接收参数
    $bid=$_REQUEST['bid'];
    $pno=$_REQUEST['pno'];
    //转换数据库分页偏移量 0
    $pno=($pno-1)*10;
    require("../init.php");
    //创建sql,并发送
    $sql="select * from note where bid=$bid limit $pno,10";
    $result=mysqli_query($conn,$sql);
    //抓取
    $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);

    echo json_encode($rows);
?>