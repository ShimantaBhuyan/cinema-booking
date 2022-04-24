import React from 'react';

import Container from "@/components/Container";
import MainContent from "@/components/MainContent";
import Navbar from "@/components/Navbar";
import SeatLayout from '@/components/SeatLayout';
import SeatLegend from "@/components/SeatLegend";
import Screen from '@/components/Screen';

const DUMMY_SEAT_LAYOUT = {
    rows: 5,
    columns: 10,
    reservedSeats: [
        { row: 0, column: 1 },
        { row: 1, column: 2 },
        { row: 2, column: 3 },
    ],
    prices: [500, 400, 300, 250, 200]
}

const CinemaLayout = () => {
    return (
        <Container>
            <Navbar />
            <MainContent>
                <SeatLegend />
                <SeatLayout 
                    rows={DUMMY_SEAT_LAYOUT.rows} 
                    columns={DUMMY_SEAT_LAYOUT.columns} 
                    reservedSeats={DUMMY_SEAT_LAYOUT.reservedSeats}
                    prices={DUMMY_SEAT_LAYOUT.prices}
                />
                <Screen />
            </MainContent>
        </Container>
    )
}

export default CinemaLayout;