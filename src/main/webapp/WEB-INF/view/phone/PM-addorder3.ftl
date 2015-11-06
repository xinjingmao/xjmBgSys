<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>广州卓训科技网络有限公司</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <link href="css/bootstrap.css" rel="stylesheet" type="text/css">
    <link href="css/base.css" rel="stylesheet" type="text/css">
    <link href="css/content.css" rel="stylesheet" type="text/css">
</head>
<body>
<div class="container">
    <div class="myhead row">
        <div class="col-xs-2 mh-1"><a href="agent-order.html"><img src="img/left.jpg"/></a></div>
        <div class="col-xs-8 mh-2"><strong>添加学生/订单</strong></div>
        <div class="col-xs-2 mh-3"></div>
    </div>
    <!-- ------------------------学生导航开始--------------------------- -->
    <div class="row" id="sa-nav">
        <a href="PM-addorder1.html"><div class="col-xs-4 sa-nav">基本信息</div></a>
        <a href="PM-addorder2.html"><div class="col-xs-4 sa-nav">添加订单</div></a>
        <a href="PM-addorder3.html"><div class="col-xs-4 sa-nav sa-nav-actived">其它资料</div></a>
    </div>
    <!-- ------------------------学生导航结束--------------------------- -->
    <form>
        <div class="input-group password-input1">
            <span class="input-group-addon" style="padding-right: 20px;">相片资料1</span>
            <input type="text" class="form-control" id="liulan1">
            <span class="input-group-addon liulan1">浏览</span>
        </div>
        <input type="file" style="display: none;" id="wenjian1"  onchange="document.getElementById('liulan1').value=this.value.substring(12);">
        <div class="input-group password-input1">
            <span class="input-group-addon" style="padding-right: 20px;">相片资料2</span>
            <input type="text" class="form-control" id="liulan2">
            <span class="input-group-addon liulan2">浏览</span>
        </div>
        <input type="file" style="display: none;" id="wenjian2"  onchange="document.getElementById('liulan2').value=this.value.substring(12);">
        <div class="input-group password-input1">
            <span class="input-group-addon" style="padding-right: 20px;">相片资料3</span>
            <input type="text" class="form-control" id="liulan3">
            <span class="input-group-addon liulan3">浏览</span>
        </div>
        <input type="file"  style="display: none;" id="wenjian3"  onchange="document.getElementById('liulan3').value=this.value.substring(12);">
        <div class="input-group password-input1">
            <span class="input-group-addon" style="padding-right: 20px;">相片资料4</span>
            <input type="text" class="form-control"  id="liulan4">
            <span class="input-group-addon liulan4">浏览</span>
        </div>
        <input type="file" style="display: none;" id="wenjian4"  onchange="document.getElementById('liulan4').value=this.value.substring(12);">
        <div class="input-group password-input1">
            <span class="input-group-addon" style="padding-right: 55px;">备注</span>
            <input type="text" class="form-control">
        </div>
        <div class="row">
            <div class="col-xs-12">
                <button href="agent-order-dateadd.html" class="btn btn-lg" style="width:100%; margin-top: 35px; background: #44b549; color: #fff; ">确定</button>
                <a href="#" class="btn btn-lg"
                   style="width:100%; margin-top: 10px; background: #b1b6b2; color: #fff; margin-bottom: 20px; ">取消</a>
            </div>
        </div>
    </form>
</div>
</body>
<script type="text/javascript" src="js/jquery-1.7.2.min.js"></script>
<script type="text/javascript" src="js/bootstrap.js"></script>
<script>
    $(function(){
        $('.liulan1').click(function(){
            $('#wenjian1').click();
        });
        $('.liulan2').click(function(){
            $('#wenjian2').click();
        });
        $('.liulan3').click(function(){
            $('#wenjian3').click();
        });
        $('.liulan4').click(function(){
            $('#wenjian4').click();
        });
    });
</script>
</html>