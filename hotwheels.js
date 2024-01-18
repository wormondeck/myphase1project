document.addEventListener('DOMContentLoaded', () => {
    fetchAuto()
    
    function fetchAuto() {
        fetch('http://localhost:3000/car')
        .then(resp => resp.json())
        .then(data => {
              {
                console.log(data)
                const carListContainer = document.getElementById('car-container');
                carListContainer.innerHTML = '';
                
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

                    function dragCars() {
                    
                        carDiv.addEventListener('dragstart', function (event) {
                            
                            event.dataTransfer.setData('text/plain', carName.textContent);
                        });
                    
                        carDiv.addEventListener('dragover', function (event) {
                            event.preventDefault(); 
                        });
                    
                        carDiv.addEventListener('dragenter', function () {
                            carDiv.classList.add('dragged-over'); 
                        });
                    
                        carDiv.addEventListener('dragleave', function () {
                            carDiv.classList.remove('dragged-over'); 
                        });
                    
                        carDiv.addEventListener('drop', function (event) {
                            event.preventDefault();
                    
                            const draggedCarName = event.dataTransfer.getData('text/plain');
                    
                            
                            const draggedCarElement = Array.from(carListContainer.children).find(element =>
                                element.classList.contains('car') && element.querySelector('p').textContent === draggedCarName
                            );
                    
                            
                            if (draggedCarElement && draggedCarElement !== carDiv) {
                                const container = carDiv.parentNode;
                                const nextSibling = carDiv.nextSibling === draggedCarElement ? carDiv : carDiv.nextSibling;
                                container.insertBefore(draggedCarElement, nextSibling);
                            }
                            
                            carDiv.classList.remove('dragged-over');
                        });
                    
                    }

                    dragCars()

                    function createMouseOver(element) {
                        return function () {
                            element.style.color = 'white'; 
                        };
                    }

                    carName.addEventListener('mouseover', createMouseOver(carName));
                    
                    function createMouseOut(element) {
                        return function () {
                            element.style.color = ''; 
                        };
                    }

                    carName.addEventListener('mouseout', createMouseOut(carName));

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

    carDopeButton.addEventListener('click', function () {
        dopeCount++;
        dopeCountSpan.textContent = dopeCount === 1 ? '1 dope ' : `${dopeCount} dope`;
    
                   
    });

    const carNopeButton = document.createElement("button")
        carNopeButton.textContent = "nope"

    const nopeCountSpan = document.createElement('span');
        nopeCountSpan.textContent = '  0 hope';

    let nopeCount = 0;

    carNopeButton.addEventListener('click', function () {
        nopeCount++;
        nopeCountSpan.textContent = nopeCount === 1 ? ' 1 nope' : `${nopeCount} nope`;

                    
    });

    parentElement.appendChild(dopeCountSpan);
    parentElement.appendChild(carDopeButton);
    parentElement.appendChild(carNopeButton);
    parentElement.appendChild(nopeCountSpan);
}
    }})
