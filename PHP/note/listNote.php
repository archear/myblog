<?php
    //�����ģ�����ҳ��ť��ӵ���¼�
    header("content-type:application/json;charset=utf-8");
    //���ղ���
    $bid=$_REQUEST['bid'];
    $pno=$_REQUEST['pno'];
    //ת�����ݿ��ҳƫ���� 0
    $pno=($pno-1)*10;
    require("../init.php");
    //����sql,������
    $sql="select * from note where bid=$bid limit $pno,10";
    $result=mysqli_query($conn,$sql);
    //ץȡ
    $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);

    echo json_encode($rows);
?>