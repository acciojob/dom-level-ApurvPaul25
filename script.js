let ele = document.getElementById('level')
let cnt = 0

while(ele){
  cnt++
  ele = ele.parentElement
}

alert("The level of the element is: " + cnt) 