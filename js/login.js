window.onload = () => {

    document.getElementById("login_button").addEventListener("click", (e) => {
        const mail = document.getElementById("mail").value;
        const password = document.getElementById("password").value;

        const body = {
            mail: mail,
            password: password
        }

        const param = {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(body)
        };

        fetch("/login_account", param).then( (response) => response.json() ).then(
            (data) => {
                console.log(data);
            }
        );
    }, false);

}