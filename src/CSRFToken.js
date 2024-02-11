function CSRFToken(){
    function getCookie(name) {
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


    const csrftoken = getCookie('csrftoken');

    return (
        <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />
    );
}
export default CSRFToken;

// This class is from the tutorial at 
// https://medium.com/analytics-vidhya/how-to-use-react-in-django-the-hard-way-6ef2bf8c5d6f
// and slightly modified