


function addFormHandling(){
    let myform = document.getElementById("emailform")
    myform.addEventListener("submit", e => {
        e.preventDefault()
        formData = new FormData(myform);
        fetch("http://localhost:8080/store",
        {
            body: formData,
            method: "post"
        }); 
    })  
    return true
}


var onloadCallback = function() {
    grecaptcha.ready(function() {
        console.log("READY")
        grecaptcha.execute('6Ldmh5wUAAAAAJpYngYHM2ugP8xpU9KJR1CJyWXs', 
            {action: 'homepage'})
            .then(function(token) {
                // add token value to form
                document.getElementById('g-recaptcha-response').value = token;
        });
    });
};

document.addEventListener('DOMContentLoaded', function () {
    console.log("parallax")
    var elems = document.querySelectorAll('.parallax');
    M.Parallax.init(elems, null);
    // addFormHandling()
});

