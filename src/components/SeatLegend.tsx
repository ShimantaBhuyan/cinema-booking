import React from "react";
import styled from "styled-components";

import { COLORS } from "src/constants";

const SEAT_LEGEND = {
    RESERVED: 0,
    AVAILABLE: 1,
    SELECTED: 2
}

const SeatLegend = () => {
    return (
        <SeatLegendContainer>
            <SeatLegendItem type={SEAT_LEGEND.RESERVED} title={"Reserved"} />
            <SeatLegendItem type={SEAT_LEGEND.SELECTED} title={"Selected"} />
            <SeatLegendItem type={SEAT_LEGEND.AVAILABLE} title={"Available"} />
        </SeatLegendContainer>
    )
}

const SeatLegendContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 45%;
    padding: 0 1rem;
    height: 4rem;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 2rem;
    margin: 20px 0;
`

const SeatLegendItem = styled.div<{ type: number, title: string }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({ type }) => type === 0 ? COLORS.SEAT_RESERVED : type === 1 ? COLORS.SEAT_AVAILABLE : COLORS.SEAT_SELECTED};
    width: 48px;
    height: 48px;
    border-radius: 50%;
    font-size: 9px;
    font-weight: 600;
    color: #bc16c2;
    &:before {
        text-transform: uppercase;
        content: '${({ title }) => title}';
    }
`

export default SeatLegend;