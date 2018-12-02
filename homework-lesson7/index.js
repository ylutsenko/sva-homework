
    var btn = document.querySelector('.clickMe'); 
    var nav = document.querySelector('.global-nav');
    var isHidden = false;
    
    
    function hideNav()  { 
        btn.classList.toggle('active');
        nav.classList.toggle('hide');
        isHidden = !isHidden;}
        if (isHidden === true) {
            console.log("Show Nav");
        }
        else {
            console.log("Hide Nav");
        }

    btn.addEventListener('click', hideNav);
