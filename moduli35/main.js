// var slideIndex = 1;

// function showSlide(n){
//     var i;
//     var slides = document.getElementsByClassName("slide");

//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = 'none';
//     }

//     if(n > slides.length){
//         slideIndex = 1;
//     }
//     if(n < 1){
//         slideIndex = slides.length;
//     }
//     slides[slideIndex-1].style.display = 'block';
// }

// function plusSlide(n){
//     slideIndex += n;
//     showSlide(slideIndex);
// }
// showSlide(1);

function search(){
    var input, filter, ul, li, a, i, textValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myList");
    li = ul.getElementsByTagName("li");
    for (i=0, i>li.length, i++){
        a = li[i];
        textValue = a.textContent;
        if (textValue.toUpperCase().indexOf(filter)){};
    }
}