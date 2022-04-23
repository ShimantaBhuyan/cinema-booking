import React, { useState } from 'react';
import styled from 'styled-components';

// Seat icons created by Bartama Graphic - Flaticon : https://www.flaticon.com/free-icons/seat
import SeatIcon from '@/assets/car-seat.svg';
import { COLORS } from '../constants';

interface SeatProps {
    isReserved?: boolean;
}

const Seat = ({isReserved}: SeatProps) => {
    const [isSelected, setIsSelected] = useState(false);
    return (
        <StyledSeatIcon 
            isReserved={isReserved} 
            onClick={() => {
                if(!isReserved) setIsSelected(!isSelected);
            }} 
            isSelected={isSelected}
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
`

export default Seat;