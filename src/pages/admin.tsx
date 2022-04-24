import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { SeatLayoutProps } from "src/customTypes";
import { useStore  } from "../store";
import useDebounce from "src/utils/useDebounce";

import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import MainContent from "@/components/MainContent";
import SeatLayout from "@/components/SeatLayout";

const INITIAL_SEAT_LAYOUT = {
    rows: 0,
    columns: 0,
    reservedSeats: [],
    prices: []
}

const Admin = () => {
    const {seatLayout, setSeatLayout, reservedSeats} = useStore();

    const [rows, setRows] = useState(seatLayout.rows);
    const [columns, setColumns] = useState(seatLayout.columns);
    const [prices, setPrices] = useState<number[]>(seatLayout.prices);
    const [priceString, setPriceString] = useState(seatLayout.prices.join(","));

    const debouncedPriceString = useDebounce(priceString, 500);

    const resetSeatLayout = () => {
        setSeatLayout(INITIAL_SEAT_LAYOUT);
    }

    useEffect(() => {
        let _prices = debouncedPriceString.split(",").map((price: string) => parseInt(price ?? "0"));
        if(_prices.length > 0 && _prices.length == rows) {
            setPrices(_prices);
        }
    }, [debouncedPriceString]);

    const handleRowChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let _rows = parseInt(e.target.value ?? "0");
        if(_rows > 0 && _rows <= 10) {
            setRows(_rows);
        }
    }

    const handleColumnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let _columns = parseInt(e.target.value ?? "0");
        if(_columns > 0 && _columns <= 10) {
            setColumns(_columns);
        }
    }

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPriceString(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const seatLayout = {
            rows,
            columns,
            reservedSeats: reservedSeats,
            prices
        } as SeatLayoutProps;
        setSeatLayout(seatLayout);
    }

    return (
        <Container>
            <Navbar />
            <MainContent>
                <StyledText>
                    Enter rows and columns to load layout. Then enter prices as comma separated values and select seats to reserve them
                </StyledText>
                <StyledText>
                    Prices are set per row. So if there are 5 rows, then 5 prices must be entered as comma separated values.
                </StyledText>
                {seatLayout.rows > 0 && seatLayout.columns > 0 ? 
                    <StyledButton onClick={resetSeatLayout} style={{width: '200px'}}>Reset Layout</StyledButton> 
                    : null
                }
                <StyledForm onSubmit={handleSubmit}>
                    <StyledGroup>
                        <StyledLabel>
                            Rows
                            <StyledInput type="text" name="rows" onChange={handleRowChange} value={rows}/>
                        </StyledLabel>
                    </StyledGroup>
                    <StyledGroup>
                        <StyledLabel>
                            Columns
                            <StyledInput type="text" name="columns" onChange={handleColumnChange} value={columns}/>  
                        </StyledLabel>
                    </StyledGroup>
                    <StyledGroup>
                        <StyledLabel>
                            Prices
                            <StyledInput type="text" name="prices" onChange={handlePriceChange} value={priceString}/>
                        </StyledLabel>
                    </StyledGroup>
                    {
                        rows && columns && priceString && prices.length > 0 ? 
                            <StyledButton>Submit</StyledButton> : null
                    }
                </StyledForm>
                <SeatLayoutWrapper pricesLength={prices.length} rows={rows}>
                    <SeatLayout rows={rows} columns={columns} reservedSeats={reservedSeats} prices={prices} adminMode={true}/>
                </SeatLayoutWrapper>
            </MainContent>
        </Container>
    )
}

const StyledText = styled.p`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
    margin-top: 0px
`

const SeatLayoutWrapper = styled.div<{pricesLength: number, rows: number}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: fit-content;
    margin-left: ${(props) => (props.pricesLength === props.rows) ? 'initial': '150px'};
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    gap: 20px;
    width: 30%;
    border-radius: 5px;
    box-shadow: 0 0 10px #ffffff7f;
    padding: 10px;
    margin-bottom: 40px;
`

const StyledGroup = styled.div`
    position: relative; 
    margin-bottom: 45px; 
`

const StyledLabel = styled.label`
    position: absolute;
    top: 0;
    left: 0;
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    width: 100%;
    transition: all 0.2s;
    /* &:after {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #fff;
        transform: translateY(-50%);
        transition: all 0.2s;
    }
    &:hover::after {
        height: 100%;
    } */
`

const StyledInput = styled.input`
    width: 100%;
    border: none;
    border-bottom: 1px solid #fff;
    background-color: transparent;
    outline: none;
    font-size: 1.2rem;
    font-weight: 600;
    color: #fff;
    &:focus {
        border-bottom: 2px solid #ffffff80;
    }
`

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

export default Admin;