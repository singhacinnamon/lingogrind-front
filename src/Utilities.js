function codeToLang(code) {
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