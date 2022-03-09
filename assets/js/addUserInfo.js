/**
 * 添加用户页面调用的js方法
 */

$(document).ready(function() {

    document.onreadystatechange = subSomething;

    subSomething();

});

function subSomething() {
    if (document.readyState == "complete") //当页面加载状态
    {
        $.ajax({
            url: getAllDepartmentAndPostUrl(),
            type: "get", // 采用get方法
            dataType: "json", // 请求和返回的参数格式；如果是非json格式需要使用text格式
            contentType: 'application/json; charset=utf-8',
            async: true,
            // 当接口调用成功时，执行success中的方法，result参数指的是接口返回的信息
            success: function(result) {
                if (result.code == 0) {
                    var datas = result.data;
                    console.log(datas);
                    if (datas.length > 0) {
                        $("#department").empty(); //清空下拉框
                        $("#department").append("<option value='' selected='selected'>请选择</option>");
                        for (var i = 0; i < datas.length; i++) {
                            var item = datas[i];
                            $("#department").append("<option value=" + item.departmentId + ">" + item.departmentName + "</option>");
                        } 
                    } else {
                        $("#department").empty(); //清空下拉框
                        $("#department").append("<option value=''>请新建部门</option>");
                    }
                    layui.use('form', function() {
                        var form = layui.form;
                        form.render(); //注意渲染页面表单，否则不显示数据

                        form.on('select(department)', function(data) {

                            if (!isEmpty(data.value)) {
                                // alert(JSON.stringify(datas[0].postModels));
                                var postModels;
                                for (var i = 0; i < datas.length; i++) {
                                    if (datas[i].departmentId == data.value) {
                                        postModels = datas[i].postModels;
                                    }
                                }
                                if (postModels.length > 0) {
                                    $("#post").empty(); //清空下拉框
                                    $("#post").append("<option value='' selected='selected'>请选择</option>");
                                    for (var i = 0; i < postModels.length; i++) {
                                        var item = postModels[i];
                                        $("#post").append("<option value=" + item.postId + ">" + item.postName + "</option>");
                                    } 
                                } else {
                                    $("#post").empty(); //清空下拉框
                                    $("#post").append("<option value=''>请新建岗位</option>");
                                }
                            } else {
                                $("#post").empty(); //清空下拉框
                            }
                            form.render(); //注意渲染页面表单，否则不显示数据
                        });
                    });
                } else {
                    alert(result.msg);
                }
            },
            error: function() {
                alert("服务器忙……请稍后重试！");
            }
        });
    }
}

//判断字符是否为空的方法
function isEmpty(obj) {
    if (typeof obj == "undefined" || obj == null || obj == "") {
        return true;
    } else {
        return false;
    }
}