document.addEventListener('DOMContentLoaded', () => {

    function fetchAuto() {
        fetch('http://127.0.0.1:5500/hotwheels.json')
        .then(resp => resp.json())
        .then(data => console.log(data))

    }
})