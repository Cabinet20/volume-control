alert('running')

function startCheckingDeviceOrientation()() {
    window.DeviceOrientationEvent.requestPermission().then(res => {
	alert(res);
  console.log('permission', res);
  if (res === 'granted') {
    window.addEventListener('deviceorientation', (e) => {
	  document.getElementById('output').innerHTML = e;
      console.log(e);
    });
  }
});
}

if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", function(event) {
        // alpha: rotation around z-axis
        var rotateDegrees = event.alpha;
        // gamma: left to right
        var leftToRight = event.gamma;
        // beta: front back motion
        var frontToBack = event.beta;

        handleOrientationEvent(frontToBack, leftToRight, rotateDegrees);
    }, true);
} else {
	alert('no orientation');
}

var handleOrientationEvent = function(frontToBack, leftToRight, rotateDegrees) {
    // do something amazing
    document.getElementById('output').innerHTML = frontToBack + ', ' + leftToRight + ', ' + rotateDegrees;
};