import axios from '../config/axios';

export const createBookingApi = (bookArrival, bookDeparture, paymentSlip, paymentStatus, roomId) =>
    axios.post('booking/reserve', { roomId: roomId, bookArrival, bookDeparture, paymentSlip, paymentStatus });

export const getRoomData = (roomId) => axios.get(`room/${roomId}`);

