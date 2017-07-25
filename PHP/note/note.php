<?php
	header("content-type:application/json;charset=utf-8");
	//功能一：根据bid查询对应的note列表
	$bid=$_REQUEST['bid'];
	$pno=$_REQUEST['pno'];
	require("../init.php");
	//创建Sql，并发送
	$sql="select * from note where bid=$bid  order by nid desc limit $pno,10";
	$result=mysqli_query($conn,$sql);
	//抓取
	$rows=mysqli_fetch_all($result,MYSQLI_ASSOC);
	if($rows!==null){
		echo json_encode($rows);
	}else{
		echo "结果为空";
	}
?>