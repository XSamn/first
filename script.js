
var text = document.querySelector("textarea");
var btn = document.querySelector("#btn");
var name1 = document.querySelector("#name");
var phone = document.querySelector("#phone");
var ul = document.querySelector("ul");
var input = document.querySelector("input");
var ss = document.querySelector("#ss_input");


btn.onclick = function () {
    if (text.value == "" || name1.value == "" || phone.value == "") {
        alert("您还有地方没有输入内容")
    } else {
        //创建元素li作为留言区
        var li = document.createElement("li");
        var i;
        var txt = '';
        var ss=document.forms[0].ss;
        for (i = 0; i < ss.length; i++) {
            if (ss[i].checked) {
                txt = txt + ss[i].value + " ";
            }}
            //将文本框中的内容放到li中,a标签中href中的内容代表什么都不执行
            li.innerHTML = name1.value + "   " + "感觉" + txt + "<br>" + "<br>" + text.value + "<br>" + "<a href='javascript:;'>删除</a>"


            text.value = "";
            name1.value = "";
            phone.value = "";
            //添加之后文本框的内容清空
            //将留言添加到ul中，而且在最上方
            ul.insertBefore(li, ul.children[0]);
            //当点击删除时删除ul中的li
            var as = document.querySelectorAll("a");
            //循环给每个删除绑定事件
            for (var i = 0; i < as.length; i++) {
                as[i].onclick = function () {
                    //删除当前a标签所在位置的父节点li
                    ul.removeChild(this.parentNode);
                }
            }
        }
    }

    const inputs = document.querySelectorAll(".input");

    function focusFunc() {
        let parent = this.parentNode;
        parent.classList.add("focus");
    }

    function blurFunc() {
        let parent = this.parentNode;
        if (this.value == "") {
            parent.classList.remove("focus")
        }
    }
    inputs.forEach((input) => {
        input.addEventListener("focus", focusFunc);
        input.addEventListener("blur", blurFunc);
    })

    function choose(obj) {
        var ss = document.getElementsByName("ss");
        var i;
        var txt = '';
        for (var i = 0; i < ss.length; i++) {
            ss[i].checked = false;

        }

        obj.checked = true;

    }