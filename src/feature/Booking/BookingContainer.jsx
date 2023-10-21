import StandardBookingCard from "../BookingRoomType/StandardBookingCard";
import SuperiorBookingCard from "../BookingRoomType/SuperiorBookingCard";
import DeluxeBookingCard from "../BookingRoomType/DeluxeBookingCard";
import JuniorSuiteBookingCard from "../BookingRoomType/JuniorSuiteBookingCard";

export default function BookingContainer() {
    const allRoom = [
        {
            "id": 1,
            "roomtype": "Standard - no window 1",
            "bed": "2 twin beds",
            "picture": null,
            "roomSize": "29 m²/312 ft²",
            "veiw": "Street view",
            "price": 2450
        },
        {
            "id": 2,
            "roomtype": "Standard - no window 2",
            "bed": "1 king bed",
            "picture": null,
            "roomSize": "29 m²/312 ft²",
            "veiw": "Street view",
            "price": 2450
        },
        {
            "id": 3,
            "roomtype": "Standard with balcony",
            "bed": "1 king bed",
            "picture": null,
            "roomSize": "29 m²/312 ft²",
            "veiw": "City View",
            "price": 2450
        },
        {
            "id": 4,
            "roomtype": "Superior room 1",
            "bed": "2 twin beds",
            "picture": null,
            "roomSize": "32 m²/344 ft²",
            "veiw": "Street View",
            "price": 3640
        },
        {
            "id": 5,
            "roomtype": "Superior room 2",
            "bed": "1 king bed",
            "picture": null,
            "roomSize": "32 m²/344 ft²",
            "veiw": "Street View",
            "price": 3640
        },
        {
            "id": 6,
            "roomtype": "Superior Doubleroom with balcony",
            "bed": "1 king bed",
            "picture": null,
            "roomSize": "32 m²/344 ft²",
            "veiw": "City View",
            "price": 3990
        },
        {
            "id": 7,
            "roomtype": "Deluxe Doubleroom with balcony",
            "bed": "1 king bed",
            "picture": null,
            "roomSize": "34 m²/366 ft²",
            "veiw": "City View",
            "price": 4340
        },
        {
            "id": 8,
            "roomtype": "Junior Suite",
            "bed": "1 king bed",
            "picture": null,
            "roomSize": "34 m²/366 ft²",
            "veiw": "City View",
            "price": 6090
        }
    ]
    return (
        <div>
            {allRoom.map((room) => <StandardBookingCard price={room.price} />)}
            {allRoom.map((room) => <SuperiorBookingCard price={room.price} />)}
            {allRoom.map((room) => <DeluxeBookingCard price={room.price} />)}
            {allRoom.map((room) => <JuniorSuiteBookingCard price={room.price} />)}


            <div className="bg-[#21395D] py-20 ">
            </div>
        </div>
    )
}

// ไปทำ relative modal ที่  schema ตาม ER diagram ดูตัวอย่าง facebook
