window.addEventListener('load', function() {
    var clock = document.getElementById('footer-clock');
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    var UTC2HST_OFFSET = 10,

    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    clock.textContent = hours + ':' + minutes + ':' + seconds + ' ' + ampm;

    setInterval(function() {
        var date = new Date();
        //date.setHours(date.getHours() + UTC2HST_OFFSET);
        var hours = date.getHours() + UTC2HST_OFFSET;
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var ampm = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        clock.textContent = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    }, 1000);
});