$(document).ready(function () {
//    main.js 执行
//     console.log("main.js 执行");

//  一加载笔记本区域{}
//    1.获取笔记本的总页数,并确定分页标注
    book.myBook_count();
//    2.显示第一页的笔记本列表limit 0  offset 10
    book.show(0);
//    3.给笔记本：分页按钮，笔记本列表按钮，笔记本增加删除按钮绑定单击事件
    $("#myBook_pageBook").on('click', 'li', function (e) {//分页按钮
        e.preventDefault();
        var _this = this;
        book.clickMyBook_pageBook(_this);
    });
    $("#book").on('click', 'button', function (e) {//笔记本列表
        book.clickMyBookLi(e);
    });
    $("#myBook_delABook").on('click', function () {//删除笔记本
        book.delBook();
    });
    $("#myBook_saveABook").on('click', function () {//增加笔记本
        book.addBook();
    });
//    4.给笔记：分页按钮，笔记列表按钮，笔记增加删除按钮绑定单击事件
    $("#myNote_pageNote").on("click", "li", function (e) {//分页按钮
        e.preventDefault();
        var _this = this;
        note.clickNotePage(_this);
    });
    $("#note").on("click", "button", function (e) {//笔记列表
        var _this = this;
        note.clickNoteLi(e, _this);
    });
    $("#myNote_delANote").on("click", function () {//删除笔记
        note.delNote(book.activeId);
    });
    $("#myNote_saveANote").on("click", function () {//增加笔记
        note.addNote(book.activeId);
    });
//    5.给笔记内容区域保存按钮添加单击事件
    $("#saveAContentText").on("click", function () {
        if (note.myNote_activeId > -1) {
            content.updateContentText(note.myNote_activeId);
        }

    })

});