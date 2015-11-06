/**
 * Created by hp on 2015/9/21.
 */

        //下面用于图片上传预览功能1
    function setImagePreview(avalue) {
        var docObj=document.getElementById("doc");

        var imgObjPreview=document.getElementById("preview");
        if(docObj.files &&docObj.files[0])
        {
//火狐下，直接设img属性
            imgObjPreview.style.display = 'block';
            imgObjPreview.style.width = '80px';
            imgObjPreview.style.height = '80px';
//imgObjPreview.src = docObj.files[0].getAsDataURL();

//火狐7以上版本不能用上面的getAsDataURL()方式获取，需要一下方式
            imgObjPreview.src = window.URL.createObjectURL(docObj.files[0]);
        }
        else
        {
//IE下，使用滤镜
            docObj.select();
            var imgSrc = document.selection.createRange().text;
            var localImagId = document.getElementById("localImag");
//必须设置初始大小
            localImagId.style.width = "80px";
            localImagId.style.height = "80px";
//图片异常的捕捉，防止用户修改后缀来伪造图片
            try{
                localImagId.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
                localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;
            }
            catch(e)
            {
                alert("您上传的图片格式不正确，请重新选择!");
                return false;
            }
            imgObjPreview.style.display = 'none';
            document.selection.empty();
        }
        return true;
    }

//下面用于图片上传预览功能2
function setImagePreview1(avalue) {
    var docObj=document.getElementById("doc1");

    var imgObjPreview=document.getElementById("preview1");
    if(docObj.files &&docObj.files[0])
    {
//火狐下，直接设img属性
        imgObjPreview.style.display = 'block';
        imgObjPreview.style.width = '80px';
        imgObjPreview.style.height = '80px';
//imgObjPreview.src = docObj.files[0].getAsDataURL();

//火狐7以上版本不能用上面的getAsDataURL()方式获取，需要一下方式
        imgObjPreview.src = window.URL.createObjectURL(docObj.files[0]);
    }
    else
    {
//IE下，使用滤镜
        docObj.select();
        var imgSrc = document.selection.createRange().text;
        var localImagId = document.getElementById("localImag1");
//必须设置初始大小
        localImagId.style.width = "80px";
        localImagId.style.height = "80px";
//图片异常的捕捉，防止用户修改后缀来伪造图片
        try{
            localImagId.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
            localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;
        }
        catch(e)
        {
            alert("您上传的图片格式不正确，请重新选择!");
            return false;
        }
        imgObjPreview.style.display = 'none';
        document.selection.empty();
    }
    return true;
}

//下面用于图片上传预览功能3
function setImagePreview2(avalue) {
    var docObj=document.getElementById("doc2");

    var imgObjPreview=document.getElementById("preview2");
    if(docObj.files &&docObj.files[0])
    {
//火狐下，直接设img属性
        imgObjPreview.style.display = 'block';
        imgObjPreview.style.width = '80px';
        imgObjPreview.style.height = '80px';
//imgObjPreview.src = docObj.files[0].getAsDataURL();

//火狐7以上版本不能用上面的getAsDataURL()方式获取，需要一下方式
        imgObjPreview.src = window.URL.createObjectURL(docObj.files[0]);
    }
    else
    {
//IE下，使用滤镜
        docObj.select();
        var imgSrc = document.selection.createRange().text;
        var localImagId = document.getElementById("localImag2");
//必须设置初始大小
        localImagId.style.width = "80px";
        localImagId.style.height = "80px";
//图片异常的捕捉，防止用户修改后缀来伪造图片
        try{
            localImagId.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
            localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;
        }
        catch(e)
        {
            alert("您上传的图片格式不正确，请重新选择!");
            return false;
        }
        imgObjPreview.style.display = 'none';
        document.selection.empty();
    }
    return true;
}

//下面用于图片上传预览功能3
function setImagePreview3(avalue) {
    var docObj=document.getElementById("doc3");

    var imgObjPreview=document.getElementById("preview3");
    if(docObj.files &&docObj.files[0])
    {
//火狐下，直接设img属性
        imgObjPreview.style.display = 'block';
        imgObjPreview.style.width = '80px';
        imgObjPreview.style.height = '80px';
//imgObjPreview.src = docObj.files[0].getAsDataURL();

//火狐7以上版本不能用上面的getAsDataURL()方式获取，需要一下方式
        imgObjPreview.src = window.URL.createObjectURL(docObj.files[0]);
    }
    else
    {
//IE下，使用滤镜
        docObj.select();
        var imgSrc = document.selection.createRange().text;
        var localImagId = document.getElementById("localImag3");
//必须设置初始大小
        localImagId.style.width = "80px";
        localImagId.style.height = "80px";
//图片异常的捕捉，防止用户修改后缀来伪造图片
        try{
            localImagId.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
            localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;
        }
        catch(e)
        {
            alert("您上传的图片格式不正确，请重新选择!");
            return false;
        }
        imgObjPreview.style.display = 'none';
        document.selection.empty();
    }
    return true;
}