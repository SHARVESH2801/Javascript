const zero=document.getElementbyID("zero")
const dec=document.getElementbyID("dec")
const res=document.getElementbyID("res")
const inc=document.getElementbyID("inc")

let count=0;

inc.onclick=function{
    count++;
    zero.textContent=count;
}