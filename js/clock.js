
(function () {
    let clock = document.querySelector('#clock');
    let i = 0;

    let updateClock = function updateClock() {
        console.info(++i);
        clock.innerHTML = (new Date()).toString();
        window.requestAnimationFrame(updateClock);
    }

    updateClock();

})();