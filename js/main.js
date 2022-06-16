const booking_buttons = document.getElementsByClassName("room-item__button");
const reserved_overlays = document.getElementsByClassName("room-item__reserved-overlay");
const rooms = document.getElementsByClassName("room-item");
const paymentLinks = document.getElementsByClassName("room-item__reserved-payment-link");

function enableBooking(e){
    e.target.closest('.room-item').classList.remove('room-item--reserved')
}

function markAsBooked(e){
    e.target.closest('.room-item').dataset.booked = 1;
}

function setAsBooked(e){
    if(e.target.closest('.room-item').dataset.booked){
        delete e.target.closest('.room-item').dataset.booked
        e.target.closest('.room-item').classList.add('room-item--reserved')
    }
}

[...reserved_overlays].forEach((overlay) => {
    overlay.addEventListener('click', enableBooking)
});

[...booking_buttons].forEach((button) => {
    button.addEventListener('click', markAsBooked)
});

[...rooms].forEach((room) => {
    room.addEventListener('mouseleave', setAsBooked)
});

[...paymentLinks].forEach((link) => {
    link.addEventListener('click', (e) => {
        e.stopPropagation();
    })
});