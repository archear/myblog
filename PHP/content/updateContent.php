<?php
    //�����ģ��Աʼ����ݽ��и���
//    header("content-type:application/json;charset=utf-8");
    require("../init.php");
    //���ղ���
    $nid=$_REQUEST['nid'];
    $cText=$_REQUEST['cText'];
    //����Sql��䣬������
    $sql="update note t set Ntext='$cText' where t.nid = $nid";
    $result=mysqli_query($conn,$sql);
    echo $sql;
?>