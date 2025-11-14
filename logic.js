function checkFlag() {
    const params = new URLSearchParams(window.location.search);
    const flag = params.get('flag');
    if (flag === 'flag') {
        window.location.href = 'flag=flag.html';
    }
}
checkFlag();