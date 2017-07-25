<?php
    //功能四：对笔记内容进行更新
    header("content-type:application/json;charset=utf-8");
    require("../init.php");
    //接收参数
    $nid=$_REQUEST['nid'];
    //创建Sql语句，并发送
    $sql="select Ntext from note where nid =$nid" ;
    $result=mysqli_query($conn,$sql);

    $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
    //转换为json类型并输出
    echo json_encode($rows);

?>