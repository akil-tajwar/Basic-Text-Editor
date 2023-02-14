let text = document.getElementById('text-area');

//making bold
document.getElementById('bold').addEventListener('click', function(){
    text.classList.toggle('font-bold');    
})

//making italic
document.getElementById('italic').addEventListener('click', function(){
    text.classList.toggle('italic');
})

//making underline
document.getElementById('underline').addEventListener('click', function(){
    text.classList.toggle('underline');
})

//align left
document.getElementById('left').addEventListener('click', function(){
    text.style.textAlign = 'left';
})

//align center
document.getElementById('center').addEventListener('click', function(){
    text.style.textAlign = 'center';
})

//align right
document.getElementById('right').addEventListener('click', function(){
    text.style.textAlign = 'right';
})

//align justify
document.getElementById('justify').addEventListener('click', function(){
    text.style.textAlign = 'justify';
})

//font size
document.getElementById('size').addEventListener('change', function(){
    text.style.fontSize = document.getElementById('size').value+'px';
})

//uppercase
document.getElementById('capital').addEventListener('click', function(){
    text.value = text.value.toUpperCase();
})

//lowercase
document.getElementById('small').addEventListener('click', function(){
    text.value = text.value.toLowerCase();
})

//color change
document.getElementById('color').addEventListener('change', function(event){
    text.style.color = event.target.value;
})