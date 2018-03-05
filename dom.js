//DOM元素选择器
function $(selector){
    if(!typeof selector === "string"){
        return false;
    }
    var doc = document;
    //复合选择器
    if(trim(selector).split(" ").length > 1){
        return doc.querySelectorAll(selector);
    }
    //ID选择器
    if(/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/.test(selector)){
        return doc.getElementById(selector.slice(1,selector.length));
    }
    //tag选择器
    if(/^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/.test(selector)){
        return doc.getElementsByTagName(selector);
    }
    //类选择器
    if(/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/.test(selector)){
        if(doc.getElementsByClassName){
            return doc.getElementsByClassName(selector.slice(1,selector.length));
        }
    }
    //属性选择器
    if(/^\[[A-Za-z0-9_-\S]+\]$/.test(selector)){
        return doc.querySelectorAll(selector);
    }
    return false;
}
// 判断siblingNode和dom是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
    return element.parentNode === siblingNode.parentNode;
}
// 判断arr是否为一个数组，返回一个bool值
function isArray(arr){
    return Array.isArray(arr)||Object.prototype.toString.call(arr) === "[object Array]";
}
// 对字符串头尾进行空格字符的去除、包括全角半角空格、Tab等，返回一个字符串
function trim(str){
    return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");
}
//把一个类数组转换成数组
function toArray(obj){
    if (obj.nodeType == 1 ) {
        return [obj];
    }
    var arr = [];
    for( var i = 0 ; i < obj.length ; i++){
        arr.push(obj[i]);
    }
    return arr;
}

function addClass(el , className) {
  if ($(el)[i].classList){
    $(el)[i].classList.add(className);
  }else{
    $(el)[i].className += ' ' + className;
  }
}

// Attributes
function attribute(tag, key, value) {
   var temp = tag , val=[];
   if (value) {
       $(tag).setAttribute(key , value);
   }else{
       val.push(temp.getAttribute(key));
   }
   return val;


}
// Has Class
function hasClass(ele, cls) {
    return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}
// Remove
function remove(el) {
 var toRemove = document.querySelector(el);
 toRemove.parentNode.removeChild(toRemove);
}
// Remove Class
function removeClass(ele, cls) {
    if (hasClass(ele, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        ele.className = ele.className.replace(reg, ' ');
    }
}
// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr, fn) {
    for (var i = 0, l = arr.length; i < l; i++) {
        fn(arr[i], i);
    }
}




