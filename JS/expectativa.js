function showImage() {
    const input = document.getElementById('input').value;
    const noExpectations = document.getElementById('noExpect');
    if (input == 'miles') {
        noExpectations.hidden = !noExpectations.hidden;
    }
    else{
        noExpectations.hidden = true;
    }
}
