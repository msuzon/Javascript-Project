// var imageIndex = 1;
// openSlides(imageIndex);

//     function prevNextArrow(s) {
//         openSlides(imageIndex += s) 
//     }

//     function currentSlide (s) {
//         openSlides(imageIndex = s)
//     }

//     function openSlides(s){
//         var i;
//         var slides = document.getElementsByClassName('mySlides');
//         var aditionImg = document.getElementsByClassName('demo');
//         var captionText = document.getElementById('caption')

//         if(s > slides.length) {
//             imageIndex = 1
//         }
//         if(s < 1) {
//             imageIndex = slides.length
//         }

//         for(i=0; i < slides.length; i++){
//             slides[i].style.display = 'none'
//         }

//         for(i=0; i<aditionImg.length; i++){
//             aditionImg[i].className = aditionImg[i].className.replace(' active','');
//         }

//         slides[imageIndex - 1].style.display = 'block';
//         aditionImg[imageIndex - 1].className += ' active';
//             captionText.innerHTML = aditionImg[imageIndex - 1].alt;
//     }


    var imageIndex = 1;
    clickSlide(imageIndex)

    function prevNextArrow(a) {
        clickSlide(imageIndex += a)
    }

    function ThumbnailSlide(a) {
        clickSlide(imageIndex = a)
    }

    function clickSlide(a) {
        var i;
        var slides = document.getElementsByClassName('mySlides');
        var aditionImg = document.getElementsByClassName('demo');
        var captionText = document.getElementById('caption')

        if (a > slides.length) {
            imageIndex = 1
        }

        if ( a < 1) {
            imageIndex = slides.length
        }

        for (i = 0; i < slides.length; i++){
            slides[i].style.display = 'none'
        }

        for (i = 0; i < aditionImg.length; i++) {
            aditionImg[i].className = aditionImg[i].className.replace(' active', '');
        }

        slides[imageIndex - 1].style.display = 'block';
        aditionImg[imageIndex - 1].className += ' active';
        captionText.innerHTML = aditionImg[imageIndex - 1].alt;
    }

