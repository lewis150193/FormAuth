export const call = (password,email,history) => {
    if (password === '' || email === '') {
        alert('Please enter email or password');
    }
    return  fetch("/api/auth", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({password, email})

    }).then( call =>  {
        console.log(call);
        if (call.status === 200) {
            // Here you need to "send" the user to '/'
             history.push('/');
        }
    }).catch( err => err);


}