const faqs = document.querySelectorAll('.faq-wrap')

faqs.forEach(faq => {
    faq.addEventListener('click',()=>{
        const currentActiveFaq = document.querySelector('.faq-wrap.active');
        if(currentActiveFaq && currentActiveFaq !== faq){
            currentActiveFaq.classList.toggle('active')
        }
        faq.classList.toggle('active'); 
    })
})