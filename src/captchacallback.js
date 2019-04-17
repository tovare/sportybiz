window.onloadCallback = function () {
    grecaptcha.ready(function () {
        console.log("READY")
        grecaptcha.execute('6Ldmh5wUAAAAAJpYngYHM2ugP8xpU9KJR1CJyWXs',
            { action: 'homepage' })
            .then(function (token) {
                // add token value to form
                document.getElementById('g-recaptcha-response').value = token;
                console.log("Token added:", token)
            }, function (reason) {
                // rejection
                console.log("Failed to get token:", reason)
            });

    });
};