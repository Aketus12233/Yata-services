
document.addEventListener("DOMContentLoaded", function () {
    const reservations = [];
    const orders = [];
    const services = [];

    // Gestion de la réservation d'hôtel
    const reservationForm = document.getElementById("reservation-form");
    if (reservationForm) {
        reservationForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const reservation = {
                name: reservationForm.name.value,
                email: reservationForm.email.value,
                date: reservationForm.date.value,
                nights: reservationForm.nights.value
            };
            reservations.push(reservation);
            alert(`Réservation confirmée pour ${reservation.name}.\nEmail: ${reservation.email}\nArrivée: ${reservation.date}\nNuits: ${reservation.nights}`);
            reservationForm.reset();
        });
    }

    // Gestion des achats de quincaillerie
    const purchaseForm = document.getElementById("purchase-form");
    if (purchaseForm) {
        purchaseForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const product = purchaseForm.product.value;
            const quantity = purchaseForm.quantity.value;
            alert(`Achat confirmé : ${quantity} x ${product}`);
            purchaseForm.reset();
        });
 // Gestion des achats de quincaillerie
    const purchaseForm = document.getElementById("purchase-form");
    if (purchaseForm) {
        purchaseForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const order = {
                product: purchaseForm.product.value,
                quantity: purchaseForm.quantity.value,
                email: purchaseForm.email.value
            };
            orders.push(order);
            alert(`Achat confirmé : ${order.quantity} x ${order.product}`);
            purchaseForm.reset();
        });
    }

    // Gestion des locations immobilières
    const rentalForm = document.getElementById("rental-form");
    if (rentalForm) {
        rentalForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const rental = {
                name: rentalForm.name.value,
                email: rentalForm.email.value,
                startDate: rentalForm.startDate.value,
                duration: rentalForm.duration.value
            };
            alert(`Location confirmée pour ${rental.name}.\nEmail: ${rental.email}\nDébut: ${rental.startDate}\nDurée: ${rental.duration} jours`);
            rentalForm.reset();
        });
    }
});
nst rental = {
                name: rentalForm.name.value,
                email: rentalForm.email.value,
                startDate: rentalForm.startDate.value,
                duration: rentalForm.duration.value
            };
            alert(`Location confirmée pour ${rental.name}.\nEmail: ${rental.email}\nDébut: ${rental.startDate}\nDurée: ${rental.duration} jours`);
            rentalForm.reset();
        });
    }
});
