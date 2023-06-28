let main = document.getElementById('game');
let str = ''
const nums = [];
const blocks = document.getElementsByTagName('div');
const imgs = ['', 'baloon.png'];
let s = 0;
let out = document.getElementById('out')

for (let i = 0; i < 25; i++){
    str += '<div id=' + i + '></div>'
    nums.push(0);
}

main.innerHTML = str;


for (i in blocks){
    blocks[i].onclick = f1;
}

function f1(){
    let k = Number(this.id);
    nums[k] += 1
    if(nums[k]>1){
        nums[k]=0
        s += 100
        out.textContent = 'Счет: ' + s;
    }
    this.innerHTML = '<img src=' + imgs[nums[k]] + '>';
    console.log(s)
}
