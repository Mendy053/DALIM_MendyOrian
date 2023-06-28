const Users = [
    {
        firstName: "Meir",
        username: "Meir123",
        password: "12345"
    },
    {
        firstName: "David",
        username: "David456",
        password: "23456"
    },
    {
        firstName: "Shlomo",
        username: "Shlomo789",
        password: "34567"
    }
]

const SubmitBtn = document.getElementById("login");
SubmitBtn.addEventListener("click", Login);

function Login() {
    let username = document.getElementById("username");
    let password = document.getElementById("password");


    let UserInfo = null;

    Users.forEach(user => {
        if (username.value === user.username && password.value === user.password) {
            UserInfo = user;
        }
    })

    if (UserInfo) {
        const Container = document.getElementById("inner-container");
        const Form = document.getElementById("form")

        let h1 = document.createElement("h1");
        h1.innerText = "Welcome " + UserInfo.firstName;

        Container.removeChild(Form)
        Container.style.backgroundColor = "greenyellow";
        Container.append(h1)
    } else {
        alert("Invalid username or password, Please try again.")
        username.value = "";
        password.value = "";
    }
}