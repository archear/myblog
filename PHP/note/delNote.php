<?php
    //������������note���ɾ����ť��ʱ��
    header("content-type:application/json;charset=utf-8");
    //���ղ���
    $nid=$_REQUEST['nid'];
    require("../init.php");
    //����sql,������
    $sql="delete from note where nid=$nid";
    $result=mysqli_query($conn,$sql);
    if($result==true){
        echo json_encode($result);
    }else{
        echo "ɾ��ʧ��";
    }
?>