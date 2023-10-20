import StandardBookingCard from "../BookingRoomType/StandardBookingCard";
import SuperiorBookingCard from "../BookingRoomType/SuperiorBookingCard";
import DeluxeBookingCard from "../BookingRoomType/DeluxeBookingCard";
import JuniorSuiteBookingCard from "../BookingRoomType/JuniorSuiteBookingCard";

export default function BookingContainer() {
    const allRoom = [
        {
            "id": 1,
            "roomtype_id": 1,
            "bed": "2 twin beds",
            "picture": null,
            "room_size": "29 m²/312 ft²",
            "veiw": "Street view",
            "amount_room": 1,
            "price": 2450
        },
        {
            "id": 2,
            "roomtype_id": 2,
            "bed": "1 king bed",
            "picture": null,
            "room_size": "29 m²/312 ft²",
            "veiw": "Street view",
            "amount_room": 1,
            "price": 2450
        },
        {
            "id": 3,
            "roomtype_id": 3,
            "bed": "1 king bed",
            "picture": null,
            "room_size": "29 m²/312 ft²",
            "veiw": "City View",
            "amount_room": 1,
            "price": 2450
        },
        {
            "id": 4,
            "roomtype_id": 4,
            "bed": "2 twin beds",
            "picture": null,
            "room_size": "32 m²/344 ft²",
            "veiw": "Street View",
            "amount_room": 1,
            "price": 3640
        },
        {
            "id": 5,
            "roomtype_id": 5,
            "bed": "1 king bed",
            "picture": null,
            "room_size": "32 m²/344 ft²",
            "veiw": "Street View",
            "amount_room": 1,
            "price": 3640
        },
        {
            "id": 6,
            "roomtype_id": 6,
            "bed": "1 king bed",
            "picture": null,
            "room_size": "32 m²/344 ft²",
            "veiw": "City View",
            "amount_room": 1,
            "price": 3990
        },
        {
            "id": 7,
            "roomtype_id": 7,
            "bed": "1 king bed",
            "picture": null,
            "room_size": "34 m²/366 ft²",
            "veiw": "City View",
            "amount_room": 1,
            "price": 4340
        },
        {
            "id": 8,
            "roomtype_id": 8,
            "bed": "1 king bed",
            "picture": null,
            "room_size": "34 m²/366 ft²",
            "veiw": "City View",
            "amount_room": 4,
            "price": 6090
        }
    ]
    return (
        <div>
            {allRoom.map((room) => <StandardBookingCard price={room.price} />)}
            {allRoom.map((room) => <SuperiorBookingCard price={room.price} />)}
            {allRoom.map((room) => <DeluxeBookingCard price={room.price} />)}
            {allRoom.map((room) => <JuniorSuiteBookingCard price={room.price} />)}

            {/* <SuperiorBookingCard /> */}
            {/* <DeluxeBookingCard /> */}
            {/* <JuniorSuiteBookingCard /> */}
            <div className="bg-[#21395D] py-20 ">
            </div>
        </div>
    )
}

// ไปทำ relative modal ที่  schema ตาม ER diagram ดูตัวอย่าง facebook
