import create from "zustand";

import { SeatProps, SeatLayoutProps } from "src/customTypes";

interface TheaterState {
    selectedSeats: SeatProps[] | [];
    reservedSeats: SeatProps[] | [];
    seatLayout: SeatLayoutProps;
    totalPrice: number;
    selectSeat: (seat: SeatProps) => void;
    deselectSeat: (seat: SeatProps) => void;
    reserveSeat: (seat: SeatProps) => void;
    unreserveSeat: (seat: SeatProps) => void;
    setReservedSeats: (seats: SeatProps[]) => void;
    setSeatLayout: (seatLayout: SeatLayoutProps) => void;
    setTotalPrice: () => void;
}

export const useStore = create<TheaterState>((set, get) => ({
    // initial state
    selectedSeats: [],
    reservedSeats: [],
    seatLayout: {
        rows: 0, 
        columns: 0, 
        prices: [], 
        selectedSeats: [],
        reservedSeats: []
    },
    totalPrice: 0,
    // methods for manipulating state
    selectSeat: (seat: SeatProps) => {
        set((state: TheaterState) => ({
            selectedSeats: [...state.selectedSeats, seat],
        }));
        get().setTotalPrice();
    },
    deselectSeat: (seat: SeatProps) => {
        set((state: TheaterState) => ({
            selectedSeats: state.selectedSeats.filter((s) => (s.row !== seat.row || s.column !== seat.column))
        }));
        get().setTotalPrice();
    },
    reserveSeat: (seat: SeatProps) => {
        set((state: TheaterState) => ({
            reservedSeats: [...state.reservedSeats, seat],
        }));
    },
    unreserveSeat: (seat: SeatProps) => {
        set((state: TheaterState) => ({
            reservedSeats: state.reservedSeats.filter((s) => (s.row !== seat.row || s.column !== seat.column))
        }));
    },
    setReservedSeats: (seats: SeatProps[]) => {
        set((_) => ({
            reservedSeats: seats,
        }));
    },
    setSeatLayout: (seatLayout: SeatLayoutProps) => {
        set((_) => ({
            seatLayout: seatLayout,
            reservedSeats: seatLayout.reservedSeats,
        }));
    },
    setTotalPrice: () => {
        set((state: TheaterState) => ({
            totalPrice: (state.selectedSeats.map(seat => seat.row)).reduce((acc: number, currentRow: number) => acc + state.seatLayout.prices[currentRow], 0)
        }));
    },
}));