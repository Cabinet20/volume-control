alert('running')

DeviceOrientationEvent.requestPermission().then(res => {
	alert(res);
  console.log(res);
  if (res === 'granted') {
    window.addEventListener('deviceorientation', (e) => {
	  document.getElementById('output').innerHTML = e;
      console.log(e);
    });
  }
});