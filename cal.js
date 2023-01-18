const divs=document.getElementsByClassName('div');
const input=document.getElementById('input-text');
const handleclick=()=>{

}
for(let i=0;i<divs.length;i++){
    divs[i].addEventListener('click',(e)=>{
            console.log(e.target.innerHTML);
    })
}