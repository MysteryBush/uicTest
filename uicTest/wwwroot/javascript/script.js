
window.setElementText = (element, text) => {
    console.log(element);
    element.innerText = text;
}

function toggleNavDropDown(dropdown) {
    var element = dropdown;
    element.classList.toggle("dropdown-show");
}

function toggleNavDropDownChild(child, parent) {
    var element = child;
    var element2 = parent;
    //why is classList.add not recognized?
    /*element2.classList.add("dropdown-show");*/
    element2.classList.toggle("dropdown-show");
    element.classList.toggle("dropdown-show");
}

function hideNavDropDown(dropdown) {
    var element = dropdown;
    element.classList.remove("dropdown-show");
}

function swipeUp(div) {
    var element = div;
}

//function toggleActiveButton(button) {
//    var element = button
//    element.classList.add("active");
//}

//function toggleUnActiveButton(button) {
//    var element = button
//    element.classList.remove("active");
//}

function toggleActivePage(page) {
    document.getElementById(page).classList.add("active");
    //evt.currentTarget.classList.add("active");
}

function toggleUnActivePage(page) {
    document.getElementById(page).classList.remove("active");
}

function toggleActiveButton(button, buttonClass) {
    var element = document.getElementsByClassName(button);
    var hide = document.getElementsByClassName(buttonClass);

    if (element[0].classList.contains("active")) {
        
    }
    else {
        for (i = 0; i < hide.length; i++) {
            hide[i].classList.remove("active");
        }
        element[0].classList.add("active");
        element[0].classList.add("anim");
    }
}


/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        //document.getElementById("navbar").style.top = "0";
        document.getElementById("navbar").classList.add("navbar-show");
        document.getElementById("navbar").classList.remove("navbar-hide");
    } else {
        //document.getElementById("navbar").style.top = "-50px";
        document.getElementById("navbar").classList.add("navbar-hide");
        document.getElementById("navbar").classList.remove("navbar-show");
    }
    prevScrollpos = currentScrollPos;
}

/* On page loaded, scroll to top */
// https://stackoverflow.com/a/26837814
/*window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}*/

// https://stackoverflow.com/a/18633915
/*$(window).on('beforeunload', function () {
    $(window).scrollTop(0);
});*/