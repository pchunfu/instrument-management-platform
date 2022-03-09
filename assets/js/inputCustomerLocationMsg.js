/**
 * 添加客户位置信息界面中“添加”按钮会调用的js方法
 */

 $(document).ready(function(){
   var url = getUrl();

   $("#addCustomerLocation").click(function(){
     var AjaxURL = url + "customer/location/msg/input"; //Tomcat中服务的地址和接口

     let customerName = $("input[id='customerName']").val()
     let customerCode = $("input[id='customerCode']").val()
     let location = $("input[id='suggestId']").val()
     let longitude = $("input[id='jing']").val()
     let latitude = $("input[id='wei']").val()
     //获取用户信息
     var storage = window.localStorage;
     var json = storage.getItem('userData');
     var data = JSON.parse(json);
     let operatorId = data.userId;
     $.ajax({
       url: AjaxURL,
       type: "post", // 采用post方法
       dataType: "json", // 请求和返回的参数格式；如果是非json格式需要使用text格式
       contentType:'application/json; charset=utf-8',

       data: JSON.stringify({
         "customerName": customerName,
         "customerCode": customerCode,
         "location": location,
         "longitude": longitude,
         "latitude": latitude,
         "operatorId": operatorId
       }) ,
       // 当接口调用成功时，执行success中的方法，result参数指的是接口返回的信息
       success: function(result) {
         if(result.code == 0){
           // window.location.href="../views/index.html"
           alert(result.msg);
           clear();
         }else{
           alert(result.msg);
         }

       },
       error: function() {
         alert("服务器忙……请稍后重试！");
       }
     });

   });

 });

 function clear(){
   var allInput = document.body.getElementsByTagName("input");
   for (var i = 0; i < allInput.length; i++) {
     var item = allInput[i];
     if(item.type == "text"){
       item.value = "";
     }
   }
 }
