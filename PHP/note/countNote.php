<?php
    //���ܶ�:����ʼǵ���ҳ��
    header("content-type:application/json;charset=utf-8");
    //���ղ���bid
    $bid=$_REQUEST['bid'];
    require("../init.php");
    //����sql,������
    $sql="select count(*) from note where bid=$bid";
    $result=mysqli_query($conn,$sql);
    //ץȡ
    $row=mysqli_fetch_row($result);
    //��$row[0]����ȡ��
    $num=ceil(intval($row[0])/10);
    $output=["page"=>$num];
    echo json_encode($output);
?>