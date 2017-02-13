(function () {

    setTimeout(function () {
        alert('图片不见啦！');
        let images = document.querySelectorAll('img');
        Array.from(images).forEach( img => {
            img.style.display = 'none';
        });
    }, 3000);

})();