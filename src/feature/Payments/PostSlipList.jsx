import { useReserve } from "../../contexts/ReserveRoomContext";
import PostSlipItem from "./PostSlipItem";

export default function PostSlipList() {
    const { allPost } = useReserve()

    return (
        <div className="flex flex-col gap-4">
            {allPost.map(el => (
                <PostSlipItem key={el.id} postObj={el} />
            ))}
        </div>
    )
}