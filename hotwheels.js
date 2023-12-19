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

                data.car.forEach(car => {

                    const carDiv = document.createElement('div');
                    carDiv.classList.add('car');
            
                    const carColor = document.createElement('p');
                    carColor.textContent = `Color: ${car.color}`;
            
                    const carYear = document.createElement('p');
                    carYear.textContent = `Year: ${car.year}`;
            
                    const carBrand = document.createElement('p');
                    carBrand.textContent = `Brand: ${car.brand}`;
            
                    const carImage = document.createElement('img');
                    carImage.src = car.image;

                    const carName = document.createElement('p');
                    carName.textContent = `${car.name}`;

                    carDiv.appendChild(carName);
                    carDiv.appendChild(carImage);
                    carDiv.appendChild(carColor);
                    carDiv.appendChild(carYear);
                    carDiv.appendChild(carBrand);
                    carButtons(carDiv)
                    
                    carListContainer.appendChild(carDiv);

                })


            }
        })
    }
})

function carButtons() {
    const carDopeButton = document.createElement('button');
        carDopeButton.textContent = 'dope';

    const dopeCountSpan = document.createElement('span');
        dopeCountSpan.textContent = '0 hope  ';

    let dopeCount = 0;

    carButton.addEventListener('click', function () {
        dopeCount++;
        dopeCountSpan.textContent = dopeCount === 1 ? '1 dope ' : `${dopeCount} dope`;

                   
    })

}