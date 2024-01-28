document.addEventListener('DOMContentLoaded', () => {
    fetchAuto()
})

function fetchAuto() {
    fetch('http://localhost:3000/cars')
        .then(resp => resp.json())
        .then(data => {
            {
                console.log(data)
                const carListContainer = document.getElementById('car-container');

                data.forEach(car => {

                    const carDiv = document.createElement('div');
                    
                    carDiv.classList.add('car');
                    carDiv.draggable = true;

                    const carName = document.createElement('p');
                    carName.textContent = `${car.name}`;

                    const carColor = document.createElement('p');
                    carColor.textContent = `Color: ${car.color}`;

                    const carYear = document.createElement('p');
                    carYear.textContent = `Year: ${car.year}`;

                    const carBrand = document.createElement('p');
                    carBrand.textContent = `Brand: ${car.brand}`;

                    const carImage = document.createElement('img');
                    carImage.src = car.image;

                    carName.addEventListener('mouseover', () => {
                        carName.style.color = 'white';
                    });

                    carName.addEventListener('mouseout', () => {
                        carName.style.color = '';
                    });

                    carDiv.addEventListener('dragstart', (e) => {
                        e.dataTransfer.setData('text/plain', carName.textContent);
                    });

                    carDiv.addEventListener('dragover', (e) => {
                        e.preventDefault();
                    });
                    carDiv.addEventListener('drop', (e) => {
                        e.preventDefault();

                        const draggedCarName = e.dataTransfer.getData('text/plain');                       
                        const draggedCarElement = Array.from(carListContainer.children).find(element =>
                            element.classList.contains('car') && element.querySelector('p').textContent === draggedCarName
                        );
                            console.log(draggedCarElement)
                        if (draggedCarElement && draggedCarElement !== carDiv) {
                            const container = carDiv.parentNode;
                            const nextSibling = carDiv.nextSibling === draggedCarElement ? carDiv : carDiv.nextSibling;                          
                            container.insertBefore(draggedCarElement, nextSibling);
                        }

                    });


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

    function carButtons(parentElement) {

        const carDopeButton = document.createElement('button');
        carDopeButton.textContent = 'dope';

        const dopeCountSpan = document.createElement('span');
        dopeCountSpan.textContent = '0 hope  ';

        let dopeCount = 0;

        carDopeButton.addEventListener('click', () => {
            dopeCount++;
            dopeCountSpan.textContent = dopeCount === 1 ? '1 dope ' : `${dopeCount} dope`;


        });

        const carNopeButton = document.createElement("button")
        carNopeButton.textContent = "nope"

        const nopeCountSpan = document.createElement('span');
        nopeCountSpan.textContent = '  0 hope';

        let nopeCount = 0;

        carNopeButton.addEventListener('click', () => {
            nopeCount++;
            nopeCountSpan.textContent = nopeCount === 1 ? ' 1 nope' : `${nopeCount} nope`;


        });

        parentElement.appendChild(dopeCountSpan);
        parentElement.appendChild(carDopeButton);
        parentElement.appendChild(carNopeButton);
        parentElement.appendChild(nopeCountSpan);
    }
}

