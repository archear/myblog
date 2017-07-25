/**
 *
 * @type {{}}
 */
var note = {
    //总页码
    myNote_page: 0,
    //当前被选中的页码
    myNote_activePage: 0,
    //当前选中的id,name
    myNote_activeId:0,
    myNote_activeName:"",


    /**
     * 计算笔记的总页数,并显示页码
     */
    myNote_count: function (book_activeId) {
        $.ajax({
            url: '/wangxia/PHP/note/countNote.php',
            type: 'post',
            data: {bid: book_activeId},
            success: function (data) {
                note.myNote_page = parseInt(data.page);
                $("#myNote_pageNote").empty();
                var html = "";
                html += `<li class="" id="myNote_notePageToLeft"><a href="#" aria-label="Previous"><span
			aria-hidden="true">&laquo;</span></a></li>`;
                for (var i = 1; i <= note.myNote_page; i++) {
                    if (i == 1) {
                        html += `
				<li class="active"><a href="#">${i}<span class="sr-only">(current)</span></a></li>
				`;
                    } else {
                        html += `
			<li class=""><a href="#">${i}<span class="sr-only">(current)</span></a></li>
				`;
                    }

                }
                html += ` <li id="myNote_notePageToRight"><a href="#" aria-label="Previous"><span aria-hidden="true">&raquo;</span></a></li>`;
                //将html追加到id为myNote_pageNote
                $("#myNote_pageNote").append(html);
                $("#myNote_pageNote li:nth-child(2)").click();
            }
        });
    },

    /**
     * 根据页码进行展示笔记列表
     * @param p
     */
    showNote: function (activeId, p) {
        $.ajax({
            url: '/wangxia/PHP/note/note.php',
            type: 'post',
            data: {bid: activeId, pno: p},
            success: function (data) {
                //创建html代码片段
                if (data.length) {

                    var html = "";
                    for (var i = 0; i < data.length; i++) {
                        var obj = data[i];
                        //console.log(myNote_activeId,myNote_activeName);
                        html += `
				<button type="button" class="list-group-item " id="${obj.nid}">${obj.nName}</button>
			`
                    }
                    //将html代码片段追加到id为note里面
                    $("#note").empty();
                    $("#note").append(html);
                    note.myNote_active();
                } else {
                    $("#note").empty();
                    //清空笔记内容区域
                    $("#myContent_nName").html("");
                    $("#myContent_t").val("");
                    myNote_activeId = -1;
                }
            }
        })
    },


    /**
     * 添加笔记
     */
    addNote: function (activeId) {
        //接收参数
        var nName = $("#myNote_newNoteName").val();
        $.ajax({
            type: 'post',
            url: '/wangxia/PHP/note/addNote.php',
            data: {bid: activeId, nName: nName},
            success: function (data) {
                $("#myNote_newNoteName").val("");
                $("#myNote_closeSaveANote").click();
                note.showNote(activeId,0);
                note.myNote_count();
            },
            error:function (data) {
                console.log("error","添加笔记本失败");
                $("#myNote_closeSaveANote").click();

            }
        })
    },

    /**
     * 删除笔记
     */
    delNote: function (book_id) {
        // console.log("info","执行删除方法");
        $.ajax({
            url: '/wangxia/PHP/note/delNote.php',
            type: 'post',
            data: {nid: note.myNote_activeId},
            success: function (data) {
                note.myNote_count(book_id);
                //console.log(myNote_activePage);
                note.showNote(book_id,(note.myNote_activePage - 1) * 10);

            },
            error:function (data) {
                console.log("error",data);
            }
        });
    },


    /**
     * 点击笔记列表响应
     */
    clickNoteLi: function (e, t) {
        $(e.target).addClass("active").siblings().removeClass("active");
        note.myNote_activeId = parseInt($(e.target).attr("id"));
        $("#myContent_nName").html("");
        $("#myContent_nName").html($(t).html());

        //调用content.js中的功能二
        content.selectByNoteIdContentText(note.myNote_activeId);
    },


    /**
     * 点击笔记页码响应
     * @param t
     */
    clickNotePage: function (t) {
        //如果有disabled属性值，就跳出方法，不执行
        if ($(t).hasClass("disabled")) {
            //console.log($(this));
            return;
        }
        var myNote_tar = $(t);
        var myNote_left = $('#myNote_notePageToLeft');
        var myNote_right = $('#myNote_notePageToRight');

        //获取到点击的页码
        var num = parseInt(myNote_tar.children().first().html());
        //console.log(num);
        var pno = parseInt(num) - 1;
        //console.log(pno);
        //console.log('page:' + page, 'num:' + num);
        if (!isNaN(num)) {
            //根据点击的页码判断左右箭头是否可用
            myNote_left.removeClass('disabled');
            myNote_right.removeClass('disabled');
            if (note.myNote_page == 1) {
                myNote_left.addClass("disabled");
                myNote_right.addClass("disabled");
            } else if (num == note.myNote_page) {
                myNote_right.addClass("disabled");
            } else if (num == 1) {
                myNote_left.addClass("disabled");
            }
        }

        //根据点击的内容进行具体操作
        if ($(t).attr("id") == "myNote_notePageToLeft") {
            //向左点击时，先找到当前active的所在位置，将active向前移动一个

            var s = $("#myNote_pageNote li.active ").prev();
            s.click();

        } else if ($(t).attr("id") == "myNote_notePageToRight") {
            //向右点击时
            var s = $("#myNote_pageNote li.active ").next();
            s.click();

        } else {

            //给当前点击的父元素添加class为active
            if (!myNote_tar.hasClass("active")) {
                myNote_tar.addClass("active").siblings().removeClass("active");
            }
            note.showNote(pno * 10);
            note.myNote_activePage = num;
        }

    },


    /**
     * 笔记列表的第一个笔记点击
     */
    myNote_active: function () {
        $("#note").children().first().click();

    },
}

