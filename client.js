navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
        var videoElement = document.getElementById('live-cam');
        videoElement.srcObject = stream;

        var tracker = new tracking.ObjectTracker(['face']);
        tracker.on('track', function (event) {
            var detectionMessage = document.getElementById('detection-message');
            if (event.data.length > 0) {
                detectionMessage.textContent = 'Motion Detected: Human Face Detected';
            } else {
                detectionMessage.textContent = 'Motion Detection: No Motion Detected';
            }
        });
        tracking.track(videoElement, tracker);
    })
    .catch(function (error) {
        console.error("Error accessing camera: " + error);
    });
