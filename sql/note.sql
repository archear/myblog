set names GBK;

create database cloudNote charset utf8;
use cloudNote;

create table book(
bid int primary key auto_increment,
bName varchar(50),
bTime datetime
);
insert into book values(null,'HTML5',now());
insert into book values(null,'CSS3',now());
insert into book values(null,'JavaScript',now());

create table note(
nid int primary key auto_increment,
nName varchar(200),
nTime datetime,
bid int
);
insert into note values(null,'HTML样式',now(),1);
insert into note values(null,'HTML段落',now(),1);
insert into note values(null,'css文本',now(),2);
insert into note values(null,'css选择器',now(),2);
insert into note values(null,'JS语句',now(),3);
insert into note values(null,'JS变量',now(),3);
insert into note values(null,'HTML样式1',now(),1);
insert into note values(null,'HTML段落1',now(),1);
insert into note values(null,'css文本1',now(),1);
insert into note values(null,'css选择器1',now(),1);
insert into note values(null,'JS语句1',now(),1);
insert into note values(null,'JS变量1',now(),1);
insert into note values(null,'HTML样式2',now(),2);
insert into note values(null,'HTML段落2',now(),2);
insert into note values(null,'css文本2',now(),2);
insert into note values(null,'css选择器2',now(),2);
insert into note values(null,'JS语句2',now(),2);
insert into note values(null,'JS变量2',now(),2);
insert into note values(null,'HTML样式3',now(),3);
insert into note values(null,'HTML段落3',now(),3);
insert into note values(null,'css文本3',now(),3);
insert into note values(null,'css选择器3',now(),3);
insert into note values(null,'JS语句3',now(),3);
insert into note values(null,'JS变量3',now(),3);


create table content(
cid int primary key auto_increment,
cText LONGTEXT,
cTime datetime,
nid int
);
insert into content values(null,'HTML 的 style 属性 style 属性的作用：
提供了一种改变所有 HTML 元素的样式的通用方法。
样式是 HTML 4 引入的，它是一种新的首选的改变 HTML 元素样式的方式。通过 HTML 样式，能够通过使用 style 属性直接将样式添加到 HTML 元素，或者间接地在独立的样式表中（CSS 文件）进行定义。
您可以在我们的 CSS 教程中学习关于样式和 CSS 的所有知识。
在我们的 HTML 教程中，我们将使用 style 属性向您讲解 HTML 样式。',now(),1);
insert into content values(null,'段落是通过 <p> 标签定义的。',now(),2);
insert into content values(null,'CSS 文本属性可定义文本的外观。
通过文本属性，您可以改变文本的颜色、字符间距，对齐文本，装饰文本，对文本进行缩进，等等。',now(),3);
insert into content values(null,'可以为拥有指定属性的 HTML 元素设置样式，而不仅限于 class 和 id 属性。',now(),4);
insert into content values(null,'JavaScript 语句向浏览器发出的命令。语句的作用是告诉浏览器该做什么。',now(),5);
insert into content values(null,'变量是存储信息的容器。',now(),6);
