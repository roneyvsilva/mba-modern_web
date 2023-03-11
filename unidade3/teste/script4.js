document.querySelector('input').addEventListener('click',
    function (event) {
        console.log(event);
    });

document.querySelector('input').addEventListener('keyup',
    function (event) {
        console.log(event);
        if (event.keyCode == 13) {
            console.log(this.value);
        }
    });

setTimeout(function () {
    console.log('12335...')
}, 2000);

setInterval(function () {
    console.log('12335... (repetindo...)')
}, 2500)
