import React from "react";

import { useStore } from "../store";

import Container from "@/components/Container";
import MainContent from "@/components/MainContent";
import Navbar from "@/components/Navbar";

const Checkout = () => {
    const { totalPrice, selectedSeats } = useStore();
    return (
        <Container>
            <Navbar />
            <MainContent>
                <h1>Checkout</h1>
                <h2>Selected Seats: {selectedSeats.map(seat => `Seat-${seat.row}-${seat.column}`).join(', ')}</h2>
                <h3>Total Price: {totalPrice}</h3>
            </MainContent>
        </Container>
    );
}

export default Checkout;