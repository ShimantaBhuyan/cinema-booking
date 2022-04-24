import React from 'react';
import { useRouter } from 'next/router'

import { useStore } from 'src/store';

import Container from "@/components/Container";
import MainContent from "@/components/MainContent";
import Navbar from "@/components/Navbar";
import SeatLayout from '@/components/SeatLayout';
import SeatLegend from "@/components/SeatLegend";
import Screen from '@/components/Screen';
import styled from 'styled-components';

// const DUMMY_SEAT_LAYOUT = {
//     rows: 5,
//     columns: 10,
//     reservedSeats: [
//         { row: 0, column: 1 },
//         { row: 1, column: 2 },
//         { row: 2, column: 3 },
//     ],
//     prices: [500, 400, 300, 250, 200]
// }

const CinemaLayout = () => {
    const {seatLayout, selectedSeats} = useStore();
    const router = useRouter();

    const checkoutBooking = () => {
        router.push('/checkout');
    }

    return (
        <Container>
            <Navbar />
            <MainContent>
                <SeatLegend />
                <SeatLayout 
                    rows={seatLayout.rows} 
                    columns={seatLayout.columns} 
                    selectedSeats={selectedSeats}
                    reservedSeats={seatLayout.reservedSeats}
                    prices={seatLayout.prices}
                />
                <Screen />
                {selectedSeats.length ? <StyledButton onClick={checkoutBooking} style={{width: '100px'}}>Checkout</StyledButton> : null}
            </MainContent>
        </Container>
    )
}


const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border: none;
    padding: 10px;
    border-radius: 5px;
    background-color: #fff;
    color: #000;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
        background-color: #ffffff80;
        color: #00000080;
    }
`

export default CinemaLayout;