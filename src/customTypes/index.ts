export interface SeatProps {
    row: number;
    column: number;
    isReserved?: boolean;
}

export interface SeatLayoutProps {
    rows: number;
    columns: number;
    prices: number[];
    reservedSeats?: SeatProps[];
}