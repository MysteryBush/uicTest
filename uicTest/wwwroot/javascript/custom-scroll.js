// https://developer.chrome.com/blog/custom-scrollbar

const scroller = document.querySelector('.container');
const thumb = document.querySelector('.box');
const scrollerHeight = scroller.getBoundingClientRect().height;

thumb.style.height =
    scrollerHeight * scrollerHeight / scroller.scrollHeight + 'px';
// Accommodate for native scrollbars
thumb.style.right =
    (scroller.clientWidth - scroller.getBoundingClientRect().width) + 'px';

// ... code from above...
const factor =
    (scrollerHeight - thumbHeight) / (scroller.scrollHeight - scrollerHeight);
thumb.style.transform = `
    matrix3d(
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, -1
    )
    scale(${1 / factor})
    translateZ(${1 - 1 / factor}px)
    translateZ(-2px)
    `;

// https://github.com/GoogleChromeLabs/ui-element-samples/blob/gh-pages/custom-scrollbar/scrollbar.js#L5-L25
function dragStart(event) {
    dragging = true;
    this.style.pointerEvents = 'none';
    this.style.userSelect = 'none';

    lastY = (event.clientY || event.clientY === 0) ? event.clientY : event.touches[0].clientY;
}

function dragMove(event) {
    if (!dragging) return;
    var clientY = (event.clientY || event.clientY === 0) ? event.clientY : event.touches[0].clientY;
    this.scrollTop += (clientY - lastY) / this.thumb.scaling;
    lastY = clientY;
    event.preventDefault();
}

function dragEnd(event) {
    dragging = false;
    this.style.pointerEvents = 'initial';
    this.style.userSelect = 'initial';
}