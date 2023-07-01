// Tambahkan kode JavaScript kalian di file ini
	// Sticky Navbar
    let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
     
     
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
     
    menu.onclick = () => {
        navbar.classList.toggle('active');
    }
    window.onscroll = () => {
        navbar.classList.remove('active');
    }
     
    // Dark Mode
    let darkmode = document.querySelector('#darkmode');
     
    darkmode.onclick = () => {
        if(darkmode.classList.contains('bx-moon')){
            darkmode.classList.replace('bx-moon','bx-sun');
            document.body.classList.add('active');
        }else{
            darkmode.classList.replace('bx-sun','bx-moon');
            document.body.classList.remove('active');
        }
    }

function toPage(page){
    let elmntToView = document.getElementById(page);
    elmntToView.scrollIntoView(); 
}

function handleGetFormData(){
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let city = document.getElementById("city").value
    let zipCode = document.getElementById("zip-code").value
    let status = document.getElementById("status").checked
    return {
        name: name,
        email : email, 
        city : city, 
        zipCode : zipCode,
        status : status
    }
}

function isNumber(string){
    return !isNaN(string);
}

function checkboxIsChecked(){
     let status = document.getElementById("status").checked
     return status;
}

function validateFormData(objek){
    if(objek != null && isNumber(objek.zipCode) && checkboxIsChecked()){
        return true
    }
    return false
}

function submit(){
    let warning = document.getElementById("warning")
    if(validateFormData(handleGetFormData()) == false){
        warning.innerHTML = "Periksa form anda sekali lagi"
    }else{
         warning.innerHTML = ""
    }
    
}


document.getElementById("submit-form").addEventListener('click', function(event){
  event.preventDefault()
  submit()
});