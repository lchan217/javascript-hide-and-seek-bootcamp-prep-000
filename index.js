function getFirstSelector(selector) {
 return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n){
  var lis = document.querySelectorAll('.ranked-list')
 for(var i=0; lis.length>i; i++){
   lis[i].innerHTML= (i+2).toString();
 }
 return lis
}

function deepestChild() {
  var lis = document.querySelectorAll('grand-node');
  return lis
}