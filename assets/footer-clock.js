window.addEventListener('load', function() {
  var clock = document.getElementById('footer-clock');
  
  // Function to get the current time in HST
  function getHSTTime() {
      var date = new Date();
      // Convert to UTC time
      var utcHours = date.getUTCHours();
      var utcMinutes = date.getUTCMinutes();
      var utcSeconds = date.getUTCSeconds();
      
      // Apply the UTC to HST offset (-10 hours)
      var hstHours = utcHours - 10;
      if (hstHours < 0) hstHours += 24; // Adjust for negative hours

      return {
          hours: hstHours,
          minutes: utcMinutes,
          seconds: utcSeconds,
      };
  }

  // Function to update the clock
  function updateClock() {
      var hstTime = getHSTTime();
      var hours = hstTime.hours;
      var minutes = hstTime.minutes;
      var seconds = hstTime.seconds;

      var ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // Convert 0 to 12 for 12-hour format
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;

      clock.textContent = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
  }

  // Initialize and update the clock every second
  updateClock();
  setInterval(updateClock, 1000);
});
