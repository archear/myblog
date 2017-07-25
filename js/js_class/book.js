//book类
var book = {

    //总页码
    page: 0,
    //当前被选中的页码
    activePage: 1,
    //当前选中的id
    activeId: -1,


    /**
     * 计算总的页码
     * 定义方法：计算笔记本的数量,并进行页码的展示
     */
    myBook_count: function () {
        $.ajax({
            type: 'post',
            url: './PHP/book/countBook.php',
            success: function (data) {
                book.page = parseInt(data.page);
                $("#myBook_pageBook").empty();
                var html = "";
                html += `<li class="" id="myBook_bookPageToLeft"><a href="#" aria-label="Previous"><span aria-hidden="true" >&laquo;</span></a></li>`;
                for (var i = 1; i <= data.page; i++) {
                    if (i == 1) {
                        html += `<li class=""><a href="#">${i}<span class="sr-only">(current)</span></a></li>`;
                    } else {
                        html += `<li><a href="#">${i}<span class="sr-only">(current)</span></a></li>`;
                    }

                }
                html += ` <li id="myBook_bookPageToRight"><a href="#" aria-label="Previous"><span aria-hidden="true" >&raquo;</span></a></li>`;
                //将html插入到id为myBook_pageBook的里面
                $("#myBook_pageBook").append(html);
                $("#myBook_pageBook li:nth-child(2)").click();
            },
            error: function (data) {
                console.log("error", data);
            }
        });
    },


    /**
     * 分页查询
     * @param p
     */
    show: function (p) {
        $.ajax({
            url: "/wangxia/PHP/book/book.php",
            type: "post",
            data: {pno: p},
            dataType: "json",
            success: function (data) {
                //将返回的结果拼接到id为book的下面
                //console.log(data);
                var html = "";
                for (var i = 0; i < data.length; i++) {
                    var obj = data[i];
                    html += `<button type="button" class="list-group-item " id="${obj.bid}">${obj.bName}</button>`;
                }
                $("#book").empty();
                $("#book").append(html);
                book.clickMyBookFirstLi();
            },
            error: function (data) {
                console.log('error', data);
            }
        });
    },


    /**
     * 点击分页按钮响应
     */
    clickMyBook_pageBook: function (t) {
        //如果有disabled属性值，就跳出方法，不执行
        if ($(t).hasClass("disabled")) {
            //console.log($(this));
            return;
        }
        var tar = $(t);
        var left = $('#myBook_bookPageToLeft');
        var right = $('#myBook_bookPageToRight');

        //获取到点击的页码
        var num = parseInt(tar.children().first().html());
        //console.log(num);
        var pno = parseInt(num) - 1;
        //console.log('page:' + page, 'num:' + num);
        if (!isNaN(num)) {
            //根据点击的页码判断左右箭头是否可用
            left.removeClass('disabled');
            right.removeClass('disabled');
            if (book.page == 1) {
                left.addClass("disabled");
                right.addClass("disabled");
            } else if (num == book.page) {
                right.addClass("disabled");
            } else if (num == 1) {
                left.addClass("disabled");
            }
        }


        //根据点击的内容进行具体操作
        if ($(t).attr("id") == "myBook_bookPageToLeft") {
            //向左点击时，先找到当前active的所在位置，将active向前移动一个

            var t = $("#myBook_pageBook li.active ").prev();
            t.click();

        } else if ($(t).attr("id") == "myBook_bookPageToRight") {
            //向右点击时
            var t = $("#myBook_pageBook li.active ").next();
            t.click();

        } else {

            //给当前点击的父元素添加class为active
            if (!tar.hasClass("active")) {
                tar.addClass("active").siblings().removeClass("active");
            }
            book.show(pno * 10);
            book.activePage = num;
        }

    },


    /**
     * 点击笔记本列表响应
     * @param e
     */
    clickMyBookLi: function (e) {
        $(e.target).addClass("active").siblings().removeClass("active");
        book.activeId = parseInt($(e.target).attr("id"));
        //note中的功能一方法
        note.myNote_count(book.activeId);
        //note中的功能二方法
        note.showNote(book.activeId, 0);
    },


    /**
     * 点击笔记本列表的第一个笔记本
     */
    clickMyBookFirstLi: function () {
        $("#book").children().first().click();
    },


    /**
     * 添加笔记本（添加完成后）
     */
    addBook: function () {
        //接收参数
        var bName = $("#myBook_newBookName").val();

        $.ajax({
            url: "./PHP/book/addBook.php",
            type: "post",
            data: {bName: bName},
            success: function (data) {
                //清空input 的原始内容
                $("#myBook_newBookName").val("");
                //添加一个列表在列表组的最上方
                $('#myBook_closeSaveABook').click();
                //清空笔记内容区域
                $("#myContent_nName").html("");
                $("#myContent_t").val("");
                //显示第一页的内容
                book.show(0);
                book.myBook_count();
            },
            error: function (data) {
                console.log(data);
            }
        });
    },

    /**
     * 删除笔记本
     */
    delBook: function () {
        //发起ajax请求
        $.ajax({
            type: 'post',
            url: '/wangxia/PHP/book/delBook.php',
            data: {bid: book.activeId},
            dataType: "json",
            success: function (data) {
                book.show((book.activePage - 1) * 10);
                book.myBook_count();
            },
            error: function () {
                console.log('error', ':错误');
            }
        })

    },

}

