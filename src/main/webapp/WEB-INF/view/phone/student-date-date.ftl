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
        <div class="col-xs-2 mh-1"><a href="student-date.html"><img src="img/left.jpg"/></a></div>
        <div class="col-xs-8 mh-2"><strong>相片资料上传</strong></div>
        <div class="col-xs-2 mh-3"></div>
    </div>
    <div class="row">
        <div class="col-xs-12 add-content1">请上传jpeg/jpg/png格式的图片网上报名时需上传电子照片。</div>
        <div class="col-xs-12 add-content2">
            要求如下：
            <p>1. 照片必须是近半年来的免冠蓝色背景彩色电子相片。</p>
            <p>2.照片大小为大一寸电子版（可直接和相馆老板说明），390像素（宽）×567像素（高），jpg格式。</p>
            <p>3.上传的照片不清晰或不能反映本人特征，可能影响本人考试或证书使用，对此考生责任自负。</p>
            <p>4.请尽可能到专业照相馆拍摄符合规格的电子相片。</p>
        </div>
    </div>
    <form>
        <div style="width:328px; margin:0 auto;">
            <div style="width:80px;height: 30px; margin-top: 20px; float: left;text-align: center; ">证件照</div>
            <div style="width:80px;height: 30px; margin-top: 20px;float: left; text-align: center;">身份证正面</div>
            <div style="width:80px;height: 30px; margin-top: 20px;float: left; text-align: center;">学生证反面</div>
            <div style="width:80px;height: 30px; margin-top: 20px;float: left; text-align: center;">学生证正面</div>
        </div>
        <div style="width:328px; margin:0 auto;">
        <div style="width:80px;height: 80px;float: left; border: 1px solid #ddd;" id="localImag">
            <img id="preview">
        </div>
        <input type="file" name="file" id="doc" style="width:150px; display: none;" onchange="javascript:setImagePreview();">
        <div style="width:80px;height: 80px;float: left;  border: 1px solid #ddd;" id="localImag1"><img id="preview1"></div>
        <input type="file" name="file" id="doc1" style="width:150px; display: none;" onchange="javascript:setImagePreview1();">
        <div style="width:80px;height: 80px;float: left;  border: 1px solid #ddd;" id="localImag2"><img id="preview2"></div>
        <input type="file" name="file" id="doc2" style="width:150px; display: none;" onchange="javascript:setImagePreview2();">
        <div style="width:80px;height: 80px;float: left;  border: 1px solid #ddd;" id="localImag3"><img id="preview3"></div>
        <input type="file" name="file" id="doc3" style="width:150px; display: none;" onchange="javascript:setImagePreview3();">
        </div>
        <div style="width:328px; margin:0 auto;">
            <div style="width:80px;height: 30px; margin-top: 10px; float: left; text-align: center; ">点击浏览</div>
            <div style="width:80px;height: 30px; margin-top: 10px;float: left; text-align: center;">点击浏览</div>
            <div style="width:80px;height: 30px; margin-top: 10px;float: left; text-align: center;">点击浏览</div>
            <div style="width:80px;height: 30px; margin-top: 10px;float: left; text-align: center;">点击浏览</div>
        </div>
    </form>
    <div class="row">
        <div class="col-xs-12">
            <button class="btn denglu-btn1" type="submit">上传</button>
            <a href="cpassword.html" class="btn denglu-btn2">取消</a>
        </div>
    </div>
</div>
</body>
<script type="text/javascript" src="js/jquery-1.7.2.min.js"></script>
<script type="text/javascript" src="js/bootstrap.js"></script>
<script type="text/javascript" src="js/yulan.js"></script>
<script>
    $(function(){
        $('#localImag').click(function(){
            $('#doc').click();
        });
        $('#localImag1').click(function(){
            $('#doc1').click();
        });
        $('#localImag2').click(function(){
            $('#doc2').click();
        });
        $('#localImag3').click(function(){
            $('#doc3').click();
        });
    });
</script>
</html>