//更改图片显示地址函数showPic
function showPic(whichpic) {
  //检查是否存在placeholder
  if (!document.getElementById("placeholder")) {
    return false;
  }
  //获取点击链接时的图片地址
  var source = whichpic.getAttribute("href");

  //获取图像占位符的元素
  var placeholder = document.getElementById("placeholder");

  //检查placeholder是否为图像
  if (placeholder.nodeName != "IMG") {
    return false;
  }

  //显示点击的图片
  placeholder.setAttribute("src", source);

  //检查是否存在title
  if (document.getElementById("description")) {

    //提取点击链接的文本
    var text = whichpic.firstChild.nodeValue;

    //将说明文字改为提取出的链接的title
    var discription = document.getElementById("description");
    discription.firstChild.nodeValue = "姓名：" + text;
  }
  return true;
}

//JS代码和HTML分离的函数prepareGallery
function prepareGallery() {

  //检查浏览器是否支持JS和是否存在ID
  if (!document.getElementsByTagName) {
    return false;
  }
  if (!document.getElementById) {
    return false;
  }
  if (!document.getElementById("imagegallery")) {
    return false;
  }

  //取得图片库ID
  var gallery = document.getElementById("imagegallery");
  //取得链接地址
  var links = gallery.getElementsByTagName("a");
  //给买个链接使用showPic函数，并组织默认连接
  for (var i = 0; i < links.length; i++) {
    links[i].onclick = function() {
      return !showPic(this);
    }
  }
}


//addLoadEvent 加载函数
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != "function") {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

//页面加载调用自动调用函数
addLoadEvent(prepareGallery);
addLoadEvent(preparePlaceholder);



//利用DOM增加图片的框和说明文字
function preparePlaceholder() {
  //检查浏览器是否支持，不支持返回false
  if (!document.createElement) return false;
  if (!document.createTextNode) return false;
  if (!document.getElementById) return false;
  if (!document.getElementById("imagegallery")) return false;


  var placeholder = document.createElement("img");
  placeholder.setAttribute("id", "placeholder");
  placeholder.setAttribute("src", "images/photoholder.png");
  placeholder.setAttribute("alt", "my image gallery");
  var description = document.createElement("p");
  description.setAttribute("id", "description");
  var desctext = document.createTextNode("Choose an image");
  description.appendChild(desctext);

  var gallery = document.getElementById("imagegallery");
  // gallery.parentNode.insertBefore(placeholder,gallery);
  // gallery.parentNode.insertBefore(description,gallery);


  insertAfter(description, gallery);
  insertAfter(placeholder, gallery);



  // document.getElementsByTagName("body")[0].appendChild(placeholder);
  // document.getElementsByTagName("body")[0].appendChild(description);

}


//用DOM写的insertAfter 函数
function insertAfter(newElement, targetElement) {
  var parent = targetElement.parentNode;
  if (parent.lastChild == targetElement) {
    parent.appendChild(newElement);
  } else {
    parent.insertBefore(newElement, targetElement.nextSibling);
  }
}