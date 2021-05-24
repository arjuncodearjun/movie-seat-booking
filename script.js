const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row .seat:not(.occupied)')
const count = document.getElementById('count')
const total = document.getElementById('total')

const movieSelect = document.getElementById('movie')

let ticketPrice = +movieSelect.value; //changing string to number

// console.log(ticketPrice)

// Update total and count

function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected')

    // console.log(selectedSeats);

    const selectedSeatsCount = selectedSeats.length;

    // console.log(selectedSeatsCount)

    count.innerText = selectedSeatsCount;
    
    total.innerText = selectedSeatsCount * ticketPrice;
}


// Movie select element

movieSelect.addEventListener('change', e=>{
    ticketPrice = e.target.value
    updateSelectedCount()
})



// Seat Click event


container.addEventListener('click', (e)=>{
    // console.log(e.target)

    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        // console.log(e.target)
        e.target.classList.toggle('selected');

        updateSelectedCount();
    }
})

