import React from "react";
import styled from "styled-components";

import Seat from "@/components/Seat";
import { SeatProps, SeatLayoutProps } from "src/customTypes";

const checkIfSeatIsReserved = (row: number, column: number, seats: SeatProps[] | undefined): boolean => {
    if(!seats) return false;
    return seats.some(({row: reservedRow, column: reservedColumn}) => row === reservedRow && column === reservedColumn);
}

const checkIfSeatIsSelected = (row: number, column: number, seats: SeatProps[] | undefined): boolean => {
    if(!seats) return false;
    return seats.some(({row: selectedRow, column: selectedColumn}) => row === selectedRow && column === selectedColumn);
}

const SeatLayout = ({rows, columns, selectedSeats, reservedSeats, prices, adminMode}: SeatLayoutProps) => {
    return ( (rows && columns) ? <SeatLayoutWrapper>
            {prices && prices.length === rows ? 
                <SeatPriceContainer>
                    {
                        [...Array(rows)].map((_, rowIndex) => {
                            return (
                                <span key={`seat-price-row-${rowIndex}`}>&#8377;{prices[rowIndex]}</span>
                            )
                        })
                    }
                </SeatPriceContainer> : 
                null
            }
            <SeatLayoutContainer totalRows={rows} totalcolumns={columns}>
                {
                    [...Array(rows)].map((_, rowIndex) => {
                        return [...Array(columns)].map((_, columnIndex) => {
                            return <Seat key={`seat-${rowIndex}-${columnIndex}`} row={rowIndex} column={columnIndex} isReserved={checkIfSeatIsReserved(rowIndex, columnIndex, reservedSeats)} adminMode={adminMode} isSelected={checkIfSeatIsSelected(rowIndex, columnIndex, selectedSeats)}/>
                        })
                    })
                }
            </SeatLayoutContainer>
        </SeatLayoutWrapper> :  <p>Seat Layout not set yet!</p>)
        
    
}

const SeatLayoutWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 50px;
    margin-left: -150px;
`

const SeatLayoutContainer = styled.div<Pick<SeatLayoutProps, 'totalRows' | 'totalcolumns'>>`
    display: grid;
    grid-template-columns: repeat(${({totalcolumns}) => totalcolumns}, 50px);
    grid-template-rows: repeat(${({totalRows}) => totalRows}, 50px);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
`

const SeatPriceContainer = styled.div<Pick<SeatLayoutProps, 'totalRows'>>`
    display: grid;
    grid-template-columns: repeat(1, 100px);
    grid-template-rows: repeat(${({totalRows}) => totalRows}, 100px);
    grid-row-gap: 10px;
    justify-content: center;
    align-items: center;
`

export default SeatLayout;