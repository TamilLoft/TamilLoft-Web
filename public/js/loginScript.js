
document.addEventListener('DOMContentLoaded', () => {

    const username = document.querySelector('.name').value;
    const number = document.querySelector('.email').value;
    const email = document.querySelector('.whtnumber').value;
    const file = document.querySelector('.InPutFiles').value;
    ///event
    const errmsg = document.getElementById('errorMsa');

    console.log(username + "hello");

    const formEvent = document.getElementById('loginForm');
    formEvent.addEventListener('click', async function (event) {
        event.preventDefault();
        alert("hello js function")
        try {
            // const response1 = await fetch('', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({ username, number, email })
            // });

            const formData = new FormData(this); // Create FormData object from form
            const response = await fetch('/home/register/info/set', {
                method: 'POST',
                body: formData
            });
            const result = await response.json();
            alert(result)

            if (response.ok) {
                // Handle successful registration
                console.log('Registration successful:', result);
                alert(result.msg); // Display success message
                console.log(response);
                window.location.href = '/home/register/info/success';
            } else {
                // Handle errors
                console.error('Registration failed:', result);
                document.getElementById('errorMsa').textContent = result.msg || 'An error occurred';
            }



        } catch (err) {
            console.error('Error during registration:', error);
            document.getElementById('errorMsa').textContent = 'An unexpected error occurred';
        }



    });

});


