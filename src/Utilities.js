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