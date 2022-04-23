import React from 'react';

import Container from "@/components/Container";
import MainContent from "@/components/MainContent";
import Navbar from "@/components/Navbar";
import Seat from '@/components/Seat';

const CinemaLayout = () => {
    return (
        <Container>
            <Navbar />
            <MainContent>
                <Seat/>
                <Seat isReserved={true}/>
                <Seat/>
                <Seat/>
            </MainContent>
        </Container>
    )
}

export default CinemaLayout;