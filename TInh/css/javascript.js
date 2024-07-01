function validateForm() {
    // event.preventDefault();
    var username = document.getElementById("username").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();
    var password2 = document.getElementById("password2").value.trim();
    var fullName = document.getElementById("fullName").value.trim();
    var dob = document.getElementById("dob").value.trim();

    var paswTextShow = document.getElementById("passwordError");

    if (username === "" || email === "" || password === "" || password2 === "" || fullName === "" || dob === "") {
        document.getElementById("errorMessage").innerText = "Vui lòng điền đầy đủ thông tin.";
        return false;
    }
    if (!email.endsWith("@gmail.com")) {
        document.getElementById("errorMessage").innerText = "Email phải có định dạng @gmail.com.";
        return false;
    }

    if(password1.toLowerCase() != null &  password2.toLowerCase() != null){
        paswTextShow.classList.remove("green");
        paswTextShow.classList.add("red");
        return paswTextShow.innerText = "Vui lòng điền đầy đủ";
    }
    if(password1.toLowerCase() !==  password2.toLowerCase()){
        paswTextShow.classList.remove("green");
        paswTextShow.classList.add("red");
        return paswTextShow.innerText = "Mật khẩu không khớp";
    }
    paswTextShow.classList.remove("red");
    paswTextShow.classList.add("green");
    paswTextShow.innerText = "Thành Công";

    var userInfo = {
        username: username,
        email: email,
        password: password,
        fullName: fullName,
        dob: dob
    };

    console.log("Thông tin đăng ký:", userInfo);

    document.getElementById("errorMessage").innerText = "";

    return true;

}

