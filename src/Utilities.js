export function codeToLang(code) {
    switch(code) {
        case 'es':
            return 'Spanish';
        case 'th':
            return 'Thai';
        case 'ch-zh':
            return 'Chinese';
        case 'ja':
            return 'Japanese';
        default:
            return 'Unknown Language'
    }
}


export function getCookie(name) {      //Taken from Django docs
    let cookieValue = null;

    if(!document) {
        console.log("document doesn't exist")
    }

    else if(!document.cookie) {
        console.log("document.cookie doesn't exist")
    }

    else if(document.cookie === '') {
        console.log("document.cookie is the empty string")
    }

    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();

            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));

                break;
            }
        }
    }

    return cookieValue;
}

export function validUserPass(username, password) {
    username = username.trim();
    password = password.trim();
    let err_msg = [];
    if(username.length < 1) {
        err_msg.push("Username cannot be empty.");
    }
    if(username.length > 150) {
        err_msg.push("Username too long. Usernames may be up to 150 characters long.");
    }
    if(password.length < 8) {
        err_msg.push("Password too short. Passwords must be at least 8 characters long.");
    }
    return err_msg;
}