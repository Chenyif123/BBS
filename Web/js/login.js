$(document).ready(function () {
    $("#BtnOK").click(function () {
        var txtUsername = $("#username").val;
        var txtPassword = $("#pwd").val;
        if ("" != txtUsername && "" != txtPassword) {
            $.ajax({
                type: "post",
                url: "ashx/login.ashx",
                data: { "UserName": txtUsername, "UserPwd": txtPassword },
                dataType: "text",
                success: function (data) {
                    var json = eval('(' + data + ')');
                    alert(json.info + "您的编号为：" + json.ID);
                    window.location.href = "index.html";
                },
                error: function (err) {
                    alert(err);
                }
            });
        }
        else {
            alert('非法输入。');
        }
    });
})