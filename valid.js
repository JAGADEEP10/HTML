function valid() {
    const name=document.getElementById("name").value;
    const phone=document.getElementById("phone").value;
    const email=document.getElementById("email").value;
    const address=document.getElementById("address").value;

    const nameError=document.getElementById("name-error");
    const addressError=document.getElementById("address-error");
    const phoneError=document.getElementById("phone-error");
    const emailError=document.getElementById("email-error");
    
    nameError.textContent="";
    phoneError.textContent="";
    addressError.textContent="";
    emailError.textContent="";

    let v=true;

    if (name==""||/\d/.test(name))
    {
        nameError.textContent="Please enter your name properly.";
        v=false;
    }
    if(phone==""||/\d/.test(phone))
    {
        phoneError.textContent="Please enter your number.";
        v=false;
    }
    if (address=="") 
    {
        addressError.textContent="Please enter your address.";
        v=false;
    }

    if (email==""||!email.includes("@")) 
    {
        emailError.textContent="Please enter a valid email address.";
        v=false;
    }
    return v;
}

let slideIndex = 0;
showSlides();
function showSlides() 
{
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) 
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000);
}