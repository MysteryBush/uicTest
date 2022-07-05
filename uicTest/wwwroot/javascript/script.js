window.setElementText = (element, text) => {
    console.log(element);
    element.innerText = text;
}
//Trigger an onClick event outside the child element
//https://dev.to/hamsahn/trigger-an-onclick-event-outside-the-child-element-works-for-nested-child-components-too-abf
//This is to make the navbar dropdown close itself when clicking outside of it
/*useEffect(() => {
    //on component mount, click event listener is added to the parent div
    document.getElementById('NavbarParent').onclick = function (e) {
        var topLevelChild = document.getElementById('top-level-child')
        //Making sure to exclude the top-level child component
        if (topLevel && !topLevelChild.contains(e.target)) {
            closeNavDropdownDesktop()
        }
    }
    //On component will unmount, click event listener is removed on parent div
    return () => {
        document.getElementById("NavbarParent").removeEventListener('click', closeNavDropdownDesktop)
    }
}, [])*/

function toggleNavDropDown(dropdown) {
    var element = dropdown;
    //element.classList.toggle("dropdown-show");
    if (element.classList.contains("dropdown-show")) {
        element.classList.add("dropdown-hide");
        element.classList.remove("dropdown-show");
    }
    else {
        element.classList.add("dropdown-show");
        element.classList.remove("dropdown-hide");
    }
}

function toggleNavDropDownChild(child, parent) {
    var element = child;
    var element2 = parent;
    //why is classList.add not recognized?
    /*element2.classList.add("dropdown-show");*/
    //element2.classList.toggle("dropdown-show");
    //element.classList.toggle("dropdown-show");
    if (element.classList.contains("dropdown-show")) {
        element.classList.add("dropdown-hide");
        element.classList.remove("dropdown-show");
        element2.classList.toggle("dropdown-show");
    }
    else {
        element.classList.add("dropdown-show");
        element.classList.remove("dropdown-hide");
        element2.classList.toggle("dropdown-show");
    }
}

function hideNavDropDown(dropdown) {
    var element = dropdown;
    element.classList.add("dropdown-hide");
    element.classList.remove("dropdown-show");
}

function swipeUp(div) {
    var element = div;
}

function toggleNavDropdownDesktop(element, navClass) {
    var showDropdown = element;
    var hideDropdown = document.getElementsByClassName(navClass);

    if (showDropdown.classList.contains("dropdown-show")) {
        showDropdown.classList.add("dropdown-hide");
        showDropdown.classList.remove("dropdown-show");
    }
    else {
        for (i = 0; i < hideDropdown.length; i++) {
            if (hideDropdown[i].classList.contains("dropdown-show")) {
                hideDropdown[i].classList.remove("dropdown-show");
                hideDropdown[i].classList.add("dropdown-hide");
            }
        }
        showDropdown.classList.add("dropdown-show");
        showDropdown.classList.remove("dropdown-hide");
    }
}

//function to close dropdown, this is used when clicking outside the navbar
/*function closeNavDropdownDesktop(navClass) {
    var hideDropdown = document.getElementsByClassName(navClass);
    for (i = 0; i < hideDropdown.length; i++) {
        if (hideDropdown[i].classList.contains("dropdown-show")) {
            hideDropdown[i].classList.remove("dropdown-show");
            hideDropdown[i].classList.add("dropdown-hide");
        }
    }
}*/

//This one makes other unfocused child to hide themself
//function toggleNavDropdownDesktopChild(element, parent, navClass) {
//    var showDropdown = element;
//    var parentDropdown = parent;
//    var hideDropdown = document.getElementsByClassName(navClass);

//    if (showDropdown.classList.contains("dropdown-show")) {
//        parentDropdown.classList.toggle("dropdown-show");
//        showDropdown.classList.remove("dropdown-show");
//    }
//    else {
//        for (i = 0; i < hideDropdown.length; i++) {
//            hideDropdown[i].classList.remove("dropdown-show");
//        }
//        parentDropdown.classList.toggle("dropdown-show");
//        showDropdown.classList.add("dropdown-show");
//    }
//}

//This one still keeps other unfocused child
function toggleNavDropdownDesktopChild(element, parent, navClass) {
    var showDropdown = element;
    var parentDropdown = parent;
    var hideDropdown = document.getElementsByClassName(navClass);

    if (showDropdown.classList.contains("dropdown-show")) {
        parentDropdown.classList.toggle("dropdown-show");
        showDropdown.classList.add("dropdown-hide");
        showDropdown.classList.remove("dropdown-show");
    }
    else {
        parentDropdown.classList.toggle("dropdown-show");
        showDropdown.classList.add("dropdown-show");
        showDropdown.classList.remove("dropdown-hide");
    }
}

function toggleActivePage(page, pageClass, button, buttonClass) {
    var elementPage = document.getElementById(page);
    var elementButton = document.getElementsByClassName(button);
    var hidePage = document.getElementsByClassName(pageClass);
    var hideButton = document.getElementsByClassName(buttonClass);

    if (elementPage.classList.contains("active") || elementButton[0].classList.contains("active")) {

    }
    else {
        for (i = 0; i < hidePage.length; i++) {
            hidePage[i].classList.remove("active");
            hideButton[i].classList.remove("active");
        }
        elementPage.classList.add("active");
        elementButton[0].classList.add("active");
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