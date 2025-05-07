document.addEventListener('DOMContentLoaded', function() {
    const cars = [
        {
            id: 1,
            year: 2022,
            make: 'Porsche',
            model: '911 Carrera ',
            price: 15000000,
            mileage: 1000,
            fuelType: 'Gasoline',
            bodyType: 'Track Toy',
            image: 'car1.jpg',
            isNew: true
        },
        {
            id: 2,
            year: 2018,
            make: 'Mercedes-Benz',
            model: 'CLS 550',
            price: 8500000,
            mileage: 68000,
            fuelType: 'Gasoline',
            bodyType: 'Coupe',
            image: 'car2.jpg',
            isNew: false
        }, {
            id: 3,
            year: 2024,
            make: 'BMW',
            model: 'M4',
            price: 10000000,
            mileage: 0,
            fuelType: 'Gasoline',
            bodyType: 'Sport',
            image: 'car3.jpg',
            isNew: false
        }, {
            id: 4,
            year: 2022,
            make: 'Mercedes-Benz',
            model: 'GLS 550 Maybach',
            price: 15000000,
            mileage: 15000,
            fuelType: 'Gasoline',
            bodyType: 'SUV',
            image: 'car4.jpg',
            isNew: false
        },
    ];
    const loadCars = () => {
        const grid = document.querySelector('.cars-grid');
        grid.innerHTML = '';
        
        cars.forEach(car => {
            const carCard = document.createElement('div');
            carCard.className = 'car-card';
            carCard.innerHTML = `
                <div class="car-image">
                    <img src="images/${car.image}" alt="${car.year} ${car.make} ${car.model}">
                    ${car.isNew ? '<span class="badge">New</span>' : ''}
                </div>
                <div class="car-details">
                    <h3>${car.year} ${car.make} ${car.model}</h3>
                    <div class="specs">
                        <span><i class="fas fa-tachometer-alt"></i> ${car.mileage.toLocaleString()} mi</span>
                        <span><i class="fas fa-gas-pump"></i> ${car.fuelType}</span>
                        <span><i class="fas fa-car"></i> ${car.bodyType}</span>
                    </div>
                    <div class="price">$${car.price.toLocaleString()}</div>
                    <div class="actions">
                        <a href="contact.html?car=${encodeURIComponent(car.year + ' ' + car.make + ' ' + car.model)}&price=${car.price}" 
                           class="btn btn-primary btn-contact">
                           <i class="fas fa-envelope"></i> Contact About This Car
                        </a>
                    </div>
                </div>
            `;
            grid.appendChild(carCard);
        });
    };

    loadCars();
});