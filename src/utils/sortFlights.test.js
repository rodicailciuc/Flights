import sortFlights from "./sortFlights.js";

describe('sortFlights', () => {
    // Test case: It should sort flights by departure date in ascending order
    test('should sort flights by departure date in ascending order', () => {
        // Test data
        const flightData = {
            flights: [
                {
                    flightNumber: 'AA100',
                    departureDate: '2024-05-15T08:30:00',
                    arrivalDate: '2024-05-15T12:00:00'
                },
                {
                    flightNumber: 'AA200',
                    departureDate: '2024-04-20T09:00:00',
                    arrivalDate: '2024-04-20T12:30:00'
                },
                {
                    flightNumber: 'AA300',
                    departureDate: '2024-03-10T07:00:00',
                    arrivalDate: '2024-03-10T09:30:00'
                }
            ]
        };

        // Expected sorted data
        const expectedSortedData = [
            {
                flightNumber: 'AA300',
                departureDate: '2024-03-10T07:00:00',
                arrivalDate: '2024-03-10T09:30:00'
            },
            {
                flightNumber: 'AA200',
                departureDate: '2024-04-20T09:00:00',
                arrivalDate: '2024-04-20T12:30:00'
            },
            {
                flightNumber: 'AA100',
                departureDate: '2024-05-15T08:30:00',
                arrivalDate: '2024-05-15T12:00:00'
            }
        ];

        // Call sortFlights function and get the sorted result
        const sortedFlights = sortFlights(flightData);

        // Check that the sortedFlights match the expected sorted data
        expect(sortedFlights).toEqual(expectedSortedData);
    });
});
