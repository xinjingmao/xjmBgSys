/**
 * Created by hp on 2015/9/21.
 */

        //��������ͼƬ�ϴ�Ԥ������1
    function setImagePreview(avalue) {
        var docObj=document.getElementById("doc");

        var imgObjPreview=document.getElementById("preview");
        if(docObj.files &&docObj.files[0])
        {
//����£�ֱ����img����
            imgObjPreview.style.display = 'block';
            imgObjPreview.style.width = '80px';
            imgObjPreview.style.height = '80px';
//imgObjPreview.src = docObj.files[0].getAsDataURL();

//���7���ϰ汾�����������getAsDataURL()��ʽ��ȡ����Ҫһ�·�ʽ
            imgObjPreview.src = window.URL.createObjectURL(docObj.files[0]);
        }
        else
        {
//IE�£�ʹ���˾�
            docObj.select();
            var imgSrc = document.selection.createRange().text;
            var localImagId = document.getElementById("localImag");
//�������ó�ʼ��С
            localImagId.style.width = "80px";
            localImagId.style.height = "80px";
//ͼƬ�쳣�Ĳ�׽����ֹ�û��޸ĺ�׺��α��ͼƬ
            try{
                localImagId.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
                localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;
            }
            catch(e)
            {
                alert("���ϴ���ͼƬ��ʽ����ȷ��������ѡ��!");
                return false;
            }
            imgObjPreview.style.display = 'none';
            document.selection.empty();
        }
        return true;
    }

//��������ͼƬ�ϴ�Ԥ������2
function setImagePreview1(avalue) {
    var docObj=document.getElementById("doc1");

    var imgObjPreview=document.getElementById("preview1");
    if(docObj.files &&docObj.files[0])
    {
//����£�ֱ����img����
        imgObjPreview.style.display = 'block';
        imgObjPreview.style.width = '80px';
        imgObjPreview.style.height = '80px';
//imgObjPreview.src = docObj.files[0].getAsDataURL();

//���7���ϰ汾�����������getAsDataURL()��ʽ��ȡ����Ҫһ�·�ʽ
        imgObjPreview.src = window.URL.createObjectURL(docObj.files[0]);
    }
    else
    {
//IE�£�ʹ���˾�
        docObj.select();
        var imgSrc = document.selection.createRange().text;
        var localImagId = document.getElementById("localImag1");
//�������ó�ʼ��С
        localImagId.style.width = "80px";
        localImagId.style.height = "80px";
//ͼƬ�쳣�Ĳ�׽����ֹ�û��޸ĺ�׺��α��ͼƬ
        try{
            localImagId.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
            localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;
        }
        catch(e)
        {
            alert("���ϴ���ͼƬ��ʽ����ȷ��������ѡ��!");
            return false;
        }
        imgObjPreview.style.display = 'none';
        document.selection.empty();
    }
    return true;
}

//��������ͼƬ�ϴ�Ԥ������3
function setImagePreview2(avalue) {
    var docObj=document.getElementById("doc2");

    var imgObjPreview=document.getElementById("preview2");
    if(docObj.files &&docObj.files[0])
    {
//����£�ֱ����img����
        imgObjPreview.style.display = 'block';
        imgObjPreview.style.width = '80px';
        imgObjPreview.style.height = '80px';
//imgObjPreview.src = docObj.files[0].getAsDataURL();

//���7���ϰ汾�����������getAsDataURL()��ʽ��ȡ����Ҫһ�·�ʽ
        imgObjPreview.src = window.URL.createObjectURL(docObj.files[0]);
    }
    else
    {
//IE�£�ʹ���˾�
        docObj.select();
        var imgSrc = document.selection.createRange().text;
        var localImagId = document.getElementById("localImag2");
//�������ó�ʼ��С
        localImagId.style.width = "80px";
        localImagId.style.height = "80px";
//ͼƬ�쳣�Ĳ�׽����ֹ�û��޸ĺ�׺��α��ͼƬ
        try{
            localImagId.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
            localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;
        }
        catch(e)
        {
            alert("���ϴ���ͼƬ��ʽ����ȷ��������ѡ��!");
            return false;
        }
        imgObjPreview.style.display = 'none';
        document.selection.empty();
    }
    return true;
}

//��������ͼƬ�ϴ�Ԥ������3
function setImagePreview3(avalue) {
    var docObj=document.getElementById("doc3");

    var imgObjPreview=document.getElementById("preview3");
    if(docObj.files &&docObj.files[0])
    {
//����£�ֱ����img����
        imgObjPreview.style.display = 'block';
        imgObjPreview.style.width = '80px';
        imgObjPreview.style.height = '80px';
//imgObjPreview.src = docObj.files[0].getAsDataURL();

//���7���ϰ汾�����������getAsDataURL()��ʽ��ȡ����Ҫһ�·�ʽ
        imgObjPreview.src = window.URL.createObjectURL(docObj.files[0]);
    }
    else
    {
//IE�£�ʹ���˾�
        docObj.select();
        var imgSrc = document.selection.createRange().text;
        var localImagId = document.getElementById("localImag3");
//�������ó�ʼ��С
        localImagId.style.width = "80px";
        localImagId.style.height = "80px";
//ͼƬ�쳣�Ĳ�׽����ֹ�û��޸ĺ�׺��α��ͼƬ
        try{
            localImagId.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
            localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;
        }
        catch(e)
        {
            alert("���ϴ���ͼƬ��ʽ����ȷ��������ѡ��!");
            return false;
        }
        imgObjPreview.style.display = 'none';
        document.selection.empty();
    }
    return true;
}