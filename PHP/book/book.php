<?php
	//设置请求头消息
	header('content-type:application/json;charset=utf-8');
	//连接数据库
	require('../init.php');
	//接受参数
	$pno=$_POST['pno'];
	//创建sql语句并发送
	$sql="select * from book  order by bid desc  LIMIT $pno,10";
	$result=mysqli_query($conn,$sql);
	//抓取结果
	$rows=mysqli_fetch_all($result,MYSQLI_ASSOC);
	if($rows!==null){
		echo json_encode($rows);
	}else{
		echo "结果为空";
	}
?>
