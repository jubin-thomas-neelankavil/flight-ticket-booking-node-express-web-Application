$(document).ready(function () {
    // Handle the click event to load flight information
    $('#load-flight').click(function () {
      $.ajax({
        type: 'GET',
        url: '/flights/all', // Replace with the actual route to get all flights
        success: function (data) {
          displayFlights(data.flights);
        },
        error: function (error) {
          console.log(error);
        },
      });
    });
  
    // Display flight information in the 'flight-info' div
    function displayFlights(flights) {
      const flightList = $('#flight-info');
  
      flightList.empty();
  
      if (flights && flights.length > 0) {
        const ul = $('<ul></ul>');
        flights.forEach(function (flight) {
          ul.append(
            `<li>
              <strong>Flight Number:</strong> ${flight.flightNumber}<br>
              <strong>Departure:</strong> ${flight.departure}<br>
              <strong>Arrival:</strong> ${flight.arrival}
            </li>`
          );
        });
  
        flightList.append(ul);
      } else {
        flightList.html('<p>No flights available.</p>');
      }
    }
  });
  