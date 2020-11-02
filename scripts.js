 window.onload = function(){
    const submitbtn = document.querySelector("button");

    function generateMessage() {

        submitbtn.addEventListener("click", function(e){
            e.preventDefault();
            e.stopImmediatePropagation();
            console.log("button clicked!");
    
            if (document.getElementById("email").value === "") {
                document.getElementsByClassName("message")[0].innerHTML = 'Please enter a valid email address.';
            } else {
                var email = document.getElementById("email").value;
                document.getElementsByClassName("message")[0].innerHTML = `Thank you! Your email address ${email} has been added to our mailing list!`;
            }
        });
    }

    generateMessage();
}