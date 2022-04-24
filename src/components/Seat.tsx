import React, { useState } from 'react';
import styled from 'styled-components';

// Seat icons created by Bartama Graphic - Flaticon : https://www.flaticon.com/free-icons/seat
import SeatIcon from '@/assets/car-seat.svg';
import { COLORS } from '../constants';
import { SeatProps } from 'src/customTypes';
import { useStore } from 'src/store';

const Seat = ({row, column, isSelected, isReserved, adminMode}: SeatProps) => {
    const { reserveSeat, unreserveSeat, selectSeat, deselectSeat } = useStore();
    const [selected, setSelected] = useState(isSelected ?? false);

    const handleSeatChoice = () => {
        if(!isReserved) {
            if(adminMode) {
                reserveSeat({row, column});
            } else {
                if(!selected) {
                    selectSeat({row, column});
                }
                else {
                    deselectSeat({row, column});
                }
                setSelected(!selected);
            }
        }
        else {
            if(adminMode) {
                unreserveSeat({row, column});
            }
        }
    }

    return (
        <StyledSeatIcon 
            id={`seat-${row}-${column}`}
            isReserved={isReserved} 
            onClick={handleSeatChoice} 
            isSelected={selected}
            />
    )
}

interface SeatStyleProps extends SeatProps {
    isSelected?: boolean;
}

const StyledSeatIcon = styled(SeatIcon)<SeatStyleProps>`
    width: 48px;
    height: 48px;
    fill: ${({isReserved, isSelected}) => isReserved ? COLORS.SEAT_RESERVED : isSelected ? COLORS.SEAT_SELECTED : COLORS.SEAT_AVAILABLE};
    cursor: pointer;
`

export default Seat;