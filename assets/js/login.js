document.write("<script language=javascript src='/assets/js/util.js?v=318'></script>");

/**
 * 登录界面中“登录”按钮会调用的js方法
 */

$(document).ready(function() {
	var url = getUrl();
	// window.setTimeout(function () { location.reload();}, 0);
	$("#sub").click(function() {
		let userName = $("input[name='userName']").val();
		let userPassword = $("input[name='userPassword']").val();
		if (userName == "" || userName == undefined || userName == null || (userName.length > 0 && userName.trim().length ==
				0)) {
			$('#tips').show();
			$('#pswtips').hide();
			return true;
		};
		if (userPassword == "" || userPassword == undefined || userPassword == null || (userPassword.length > 0 &&
				userPassword.trim().length == 0)) {
			$('#pswtips').show();
			$('#tips').hide();
			return true;
		};

		//请求公钥
		var newPassword;
		var getPublicKeyUrl = url + "user/getPublicKey";
		$.ajax({
			url: getPublicKeyUrl,
			dataType: 'json',
			type: 'get',
			//async:false 可以让ajsx顺序执行
			async: false,
			contentType: 'application/json; charset=utf-8',
			success: function(result) {
				var encrypt = new JSEncrypt();
				encrypt.setPublicKey(result.data);
				newPassword = encrypt.encrypt(userPassword);
				// alert(newPassword);
			}
		})

		//RSA加密
		// $(function () {
		//     var encrypt = new JSEncrypt();
		//     encrypt.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCwjDm1HXDw8QH5ZtGMQIl2h/I8E+chOQA8aQ8xCR/+aHnROaN/ZU5Vmd2Zz7g6cAacR9BSm60+iSCYtvEGJKl0WqvbPGJkc8tedjNF1QqgWqkkuE6Udgw2OkEKJCxDg6PrAniR7Cc0io9G8bW4P8JDJjSbbafvMPDDFbVVUWJxxwIDAQAB");
		//     var data = encrypt.encrypt(userPassword);
		//     alert(data);
		// });
		var loginURL = url + "user/login"; //Tomcat中服务的地址和接口
		$.ajax({
			url: loginURL,
			type: "post", // 采用post方法
			dataType: "json", // 请求和返回的参数格式；如果是非json格式需要使用text格式
			contentType: 'application/json; charset=utf-8',
			async: false,
			// 获取id=loginForm的form表单中的参数
			data: JSON.stringify({
				"userName": userName,
				"userPassword": newPassword
			}),
			// 当接口调用成功时，执行success中的方法，result参数指的是接口返回的信息
			success: function(result) {
				if (result.code == 0) {
					manageCookie.setCookie("token", result.data.token)
					if (window.localStorage) {
						var storage = window.localStorage;
						storage.setItem('userData', JSON.stringify(result.data));
						window.location.href = "../index.html";
					} else {
						alert("浏览器不支持localStorage,请选择其他浏览器！");
					}

				} else {
					alert(result.msg);
				}

			},
			error: function() {
				alert("服务器忙……请稍后重试！");
			}
		});
	});
});
