document.addEventListener('DOMContentLoaded', function() {
    // Set up interactive contact methods
    const phoneNumber = document.getElementById('phone-number');
    const callButton = document.getElementById('call-now');
    const directionsButton = document.getElementById('get-directions');
    const mapFrame = document.getElementById('location-map');
    
    // Phone number functionality
    callButton.addEventListener('click', function() {
        window.location.href = `tel:${phoneNumber.textContent}`;
    });
    
    // Address functionality
    const address = "26th corridor, El-Sheikh Zayed City";
    directionsButton.addEventListener('click', function() {
        const mapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}`;
        window.open(mapsUrl, '_blank');
    });
});