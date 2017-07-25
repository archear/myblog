<?php
    //功能四：对笔记内容进行更新
//    header("content-type:application/json;charset=utf-8");
    require("../init.php");
    //接收参数
    $nid=$_REQUEST['nid'];
    $cText=$_REQUEST['cText'];
    //创建Sql语句，并发送
    $sql="update note t set Ntext='$cText' where t.nid = $nid";
    $result=mysqli_query($conn,$sql);
    echo $sql;
?>