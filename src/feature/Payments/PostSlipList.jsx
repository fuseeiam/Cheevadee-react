import PostSlipItem from "./PostSlipItem";

export default function PostSlipList({ allPost, deletePost }) {
    return (
        <div className="flex flex-col gap-4">
            {allPost.map(el => (
                <PostSlipItem key={el.id} postObj={el} deletePost={deletePost} />
            ))}
        </div>
    )
}