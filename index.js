function startCheckingDeviceOrientation() {
    window.DeviceOrientationEvent.requestPermission().then(res => {
		//alert(res);
  		console.log('permission', res);
  		if (res === 'granted') {
    		window.addEventListener('deviceorientation', (e) => {
				let vol = e.gamma / 90 * 100;
				vol = Math.min(500, Math.abs(Math.round(vol)));
				document.getElementById("slider-bar").style.width = vol + "%";
	  			document.getElementById('output').innerHTML = 'Volume at ' +  vol + '%';
			});	
  		}
	});
}

// if (window.DeviceOrientationEvent) {
//     window.addEventListener("deviceorientation", function(event) {
//         // alpha: rotation around z-axis
//         var rotateDegrees = event.alpha;
//         // gamma: left to right
//         var leftToRight = event.gamma;
//         // beta: front back motion
//         var frontToBack = event.beta;

//         handleOrientationEvent(frontToBack, leftToRight, rotateDegrees);
//     }, true);
// } else {
// 	alert('no orientation');
// }

// var handleOrientationEvent = function(frontToBack, leftToRight, rotateDegrees) {
//     // do something amazing
//     document.getElementById('output').innerHTML = frontToBack + ', ' + leftToRight + ', ' + rotateDegrees;
// };