<?php
/**
 * Created by IntelliJ IDEA.
 * User: archer
 * Date: 2017/7/16
 * Time: 14:48
 */
    //功能：计算分页的总页数
    header("content-type:application/json;charset=utf-8");
    require("../init.php");
    //创建sql,并发送
    $sql="select count(*) from book";
    $result=mysqli_query($conn,$sql);
    //抓取结果
    $row=mysqli_fetch_row($result);
    //将$row[0]向上取整
    $num=ceil(intval($row[0])/10);
    //输出总页数 '{"page":5}'
    $output = ["page"=>$num];
    echo json_encode($output);
?>