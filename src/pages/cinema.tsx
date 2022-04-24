import React from 'react';

import Container from "@/components/Container";
import MainContent from "@/components/MainContent";
import Navbar from "@/components/Navbar";
import SeatLayout from '@/components/SeatLayout';
import SeatLegend from "@/components/SeatLegend";


const reservedSeats = [
    { row: 0, column: 1 },
    { row: 1, column: 2 },
    { row: 2, column: 3 },
]

const CinemaLayout = () => {
    return (
        <Container>
            <Navbar />
            <MainContent>
                {/* <Seat/>
                <Seat isReserved={true}/>
                <Seat/>
                <Seat/> */}
                <SeatLegend />
                <SeatLayout rows={5} columns={10} reservedSeats={reservedSeats}/>
            </MainContent>
        </Container>
    )
}

export default CinemaLayout;