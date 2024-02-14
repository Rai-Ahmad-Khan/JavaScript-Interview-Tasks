// Here an argument is passed to the callBack function also.

function loadScript(src, callback) {

    let script = document.createElement('script');
    script.src = src;

    // Till here src should be loaded so we can check it by setting a built-In method:"onload".

    script.onload = function() {
        alert("The scr is loaded successfully");
        // callBack Calling
        callback(null);
    };

    // Handling Error

    script.onerror = function() {
        alert("Error in loading the scr");
        // callBack Calling
        callback(new Error("This is new error"));
    };



    document.body.appendChild(script);

};


// The function which is being called in callback.

function myCallBack(error) {
    if(error) {
        document.write("Error"); 
        return;
    }else {
        document.write("Hello Sweetie");
    }

};

// Calling my Main Function

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", myCallBack); // To get an error you can manipulate the src from here.
