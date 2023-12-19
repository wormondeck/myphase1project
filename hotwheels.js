document.addEventListener('DOMContentLoaded', () => {
    fetchAuto()
    
    function fetchAuto() {
        fetch('http://127.0.0.1:5500/hotwheels.json')
        .then(resp => resp.json())
        .then(data => {
            if (Array.isArray(data.car)) {
                console.log(data.car)
                const carListContainer = document.getElementById('car-container');
                carListContainer.innerHTML = '';
            }
        })
    }
})