
window.setElementText = (element, text) => {
    console.log(element);
    element.innerText = text;
}

function toggleNavDropDown(dropdown) {
    var element = dropdown;
    element.classList.toggle("dropdown-show");
}

function toggleNavDropDownChild(child,parent) {
    var element = child;
    var element2 = parent;
    //why is classList.add not recognized?
    /*element2.classList.add("dropdown-show");*/
    element2.classList.toggle("dropdown-show");
    element.classList.toggle("dropdown-show");
}

function hideNavDropDown(dropdown)
{
    var element = dropdown;
    element.classList.remove("dropdown-show");
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