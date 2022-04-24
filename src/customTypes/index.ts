export interface SeatProps {
    row: number;
    column: number;
    isReserved?: boolean;
    isSelected?: boolean;
    adminMode?: boolean;
}

export interface SeatLayoutProps {
    rows: number;
    columns: number;
    prices: number[];
    selectedSeats?: SeatProps[];
    reservedSeats?: SeatProps[];
    adminMode?: boolean;
}