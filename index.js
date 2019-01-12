function getFirstSelector(selector) {
 return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n){
  var lis = document.querySelectorAll('.ranked-list')
 for(var i=0; lis.length>i; i++){
   lis[i].innerHTML= (i+1).toString();
 }
 return lis
}

function deepestChild() {
  var lis = document.getElementById('grand-node').querySelectorAll('div');
  for (var i=0; lis.length>i; i++) {
 // loopBody
 var last = lis[i]
  }
  return last
}
