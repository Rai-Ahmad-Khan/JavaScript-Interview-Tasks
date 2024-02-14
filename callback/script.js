function loadScript(src, callback) {

    let script = document.createElement('script');
    script.src = src;

    // till here src should be loaded so we can check it by setting a built-In method:"onload".

    script.onload = function() {
        alert("The scr is loaded successfully");
    };

    // Handling Error

    script.onerror = function() {
        alert("Error in loading the scr");
    };

    // callBack

    callback();



    document.body.appendChild(script);

};


// The function which is being called in callback.
function myCallBack() {
    document.write("Hello Sweetie")
}

// Calling my Main Function

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", myCallBack)
