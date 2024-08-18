const faqs = document.querySelectorAll(".faq");
//click to drop down function
faqs.forEach((faq)=>{
    faq.addEventListener("click", ()=>{
        faq.classList.toggle("active");
    })
})