<?php
    //�����ģ��Աʼ����ݽ��и���
    header("content-type:application/json;charset=utf-8");
    require("../init.php");
    //���ղ���
    $nid=$_REQUEST['nid'];
    //����Sql��䣬������
    $sql="select Ntext from note where nid =$nid" ;
    $result=mysqli_query($conn,$sql);

    $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
    //ת��Ϊjson���Ͳ����
    echo json_encode($rows);

?>