let mode = 1;

function changeModeView() {
    let sun = document.getElementById("sun");
    let moon = document.getElementById("moon");
    
    if(mode == 1) {
        sun.style.display = "none";
        moon.style.display = "block";
        document.body.style.backgroundColor = "var(--clr-light-primary-200)";
        mode = 0;
    } else {
        sun.style.display = "block";
        moon.style.display = "none";
        document.body.style.backgroundColor = "var(--clr-dark-primary-800)";
        mode = 1;
    }
}