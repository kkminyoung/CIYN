var profile;
var user_id;
var user_name;
var user_image;
var user_email;
var is_ewhain;


function onSignIn(googleUser) {
    profile = googleUser.getBasicProfile();
    id_token = googleUser.getAuthResponse().id_token;

    user_id = profile.getId();
    user_name = profile.getName();
    user_image = profile.getImageUrl();
    user_email = profile.getEmail();

    // 이화인 메일인지 확인
    var findString = "ewhain.net";
    user_email = String(user_email);



    if (user_email.indexOf(findString) != -1) {
        is_ewhain = "이화인 계정입니다.";
    }
    else {
        is_ewhain = "이화인 계정이 아닙니다. 이화인 계정으로 로그인하세요.";
    }

    sessionStorage.setItem('user_email', user_email);


    console.log('ID: ' + user_id); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + user_name);
    console.log('Image URL: ' + user_image);
    console.log('Email: ' + user_email); // This is null if the 'email' scope is not present.

    //document.getElementById("user_id").innerHTML = user_id;
    document.getElementById("user_name").innerHTML = user_name;
    document.getElementById("user_email").innerHTML = user_email;
    //document.getElementById("user_email") = user_email;
    document.getElementById("is_ewhain").innerHTML = is_ewhain;
    //document.getElementById("user_image").innerHTML = String(user_image);

    //document.write('id:' + id + '<br>');

    ///////////////////////////////

    $.ajax({
        type: 'POST',
        url: 'http://example.com/storeauthcode',
        processData: false,
        data: id_token,
        contentType: 'application/octet-stream; charset=utf-8',
        success: function (result) {
            // Handle or verify the server response if necessary.
            if (result) {
                $('#result').html('Login Successful!</br>' + result + '</br>Redirecting...')
                setTimeout(function () {
                    window.location.href = "/";
                }, 3000);

            } else if (authResult['error']) {
                console.log('There was an error: ' + authResult['error']);
            } else {
                $('#result').html('Failed to make a server-side call. Check your configuration and console.');
            }
        }

    })


    ///////////////////////////////

}

function get_name() {
    //onSignIn(googleUser);
    console.log('ID: ' + user_id); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + user_name);
    console.log('Image URL: ' + user_image);
    console.log('Email: ' + user_email); // This is null if the 'email' scope is not present.

    document.getElementById("user_name").innerHTML = user_name;
    document.getElementById("user_email").innerHTML = user_email;
    document.getElementById("is_ewhain").innerHTML = is_ewhain;
}

function signOut() {

    var auth2 = gapi.auth2.getAuthInstance();

    auth2.signOut().then(function () {

        $.ajax({
            type: 'POST',
            url: '/googledisconnect',
            processData: false,
            contentType: 'application/octet-stream; charset=utf-8',
            success: function (result) {
                // Handle or verify the server response if necessary.

                if (result) {
                    $('#resultout').html('Logout Successful!</br>' + result + '</br>Redirecting...')
                    setTimeout(function () {
                        window.location.href = "/";
                    }, 3000);

                } else {
                    $('#resultout').html('Failed to make a server-side call. Check your configuration and console.');
                }
            }
        })
    });
}

var course_delivery = document.getElementById('course_delivery');
console.log(course_delivery);
if(course_delivery){
    course_delivery.addEventListener('click', subbb, false);
}
else{
    console.log('아니?');
}

function subbb() {
    //document.id.action = "subject-description.html";
    //document.acc.submit();
    console.log("되나");
}
