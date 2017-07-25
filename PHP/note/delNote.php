<?php
    //功能六：当在note点击删除按钮的时候
    header("content-type:application/json;charset=utf-8");
    //接收参数
    $nid=$_REQUEST['nid'];
    require("../init.php");
    //创建sql,并发送
    $sql="delete from note where nid=$nid";
    $result=mysqli_query($conn,$sql);
    if($result==true){
        echo json_encode($result);
    }else{
        echo "删除失败";
    }
?>