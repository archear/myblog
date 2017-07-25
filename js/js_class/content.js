var content = {
    //功能一：对笔记内容进行更新
    updateContentText: function (_myNote_activeId) {
        console.log(_myNote_activeId);
        //获取参数
        var nid = _myNote_activeId;
        var cText = $("#myContent_t").val();
        $.ajax({
            url: '/wangxia/PHP/content/updateContent.php',
            type: 'post',
            data: {nid: nid, cText: cText},
            success: function (data) {
            },
            error: function () {

            }
        })
    },


    //功能二：查询nid对应的文本内容
    selectByNoteIdContentText: function (_myNote_activeId) {
        //console.log("info",_myNote_activeId);
        $("#myContent_t").val("");
        $.ajax({
            url: '/wangxia/PHP/content/selectNText.php',
            type: 'post',
            data: {nid: _myNote_activeId},
            success: function (data) {
                $("#myContent_t").val(data[0].Ntext);
            },
            error: function (data) {
                console.log("error", "myNote_activeId:" + _myNote_activeId);

            }
        });
    },
}



