import React from "react";
import styled from "styled-components";

import Seat from "@/components/Seat";
interface ReservedSeatProps {
    row: number;
    column: number;
}

interface SeatLayoutProps {
    rows: number;
    columns: number;
    prices?: number[];
    reservedSeats?: ReservedSeatProps[];
}

const checkIfSeatIsReserved = (row: number, column: number, reservedSeats: ReservedSeatProps[] | undefined): boolean => {
    if(!reservedSeats) return false;
    return reservedSeats.some(({row: reservedRow, column: reservedColumn}) => row === reservedRow && column === reservedColumn);
}

const SeatLayout = ({rows, columns, reservedSeats}: SeatLayoutProps) => {
    return (
        <SeatLayoutContainer totalRows={rows} totalcolumns={columns}>
            {
                [...Array(rows)].map((_, rowIndex) => {
                    return [...Array(columns)].map((_, columnIndex) => {
                        return <Seat key={`seat-${rowIndex}-${columnIndex}`} row={rowIndex} column={columnIndex} isReserved={checkIfSeatIsReserved(rowIndex, columnIndex, reservedSeats)}/>
                    })
                })
            }
        </SeatLayoutContainer>
    )
}

const SeatLayoutContainer = styled.div<Pick<SeatLayoutProps, 'totalRows' | 'totalcolumns'>>`
    display: grid;
    grid-template-columns: repeat(${({totalcolumns}) => totalcolumns}, 50px);
    grid-template-rows: repeat(${({totalRows}) => totalRows}, 50px);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
`

export default SeatLayout;