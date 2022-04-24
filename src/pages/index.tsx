import type { NextPage } from 'next'

import Container from "@/components/Container";
import MainContent from "@/components/MainContent";
import Navbar from "@/components/Navbar";

const Home: NextPage = () => {
  return (
    <Container>
        <Navbar />
        <MainContent>
            {/* LANDING PAGE COMPONENT */}
        </MainContent>
    </Container>
)
}

export default Home
