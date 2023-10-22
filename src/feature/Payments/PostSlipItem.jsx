import PostSlipContent from './PostSlipContent'

export default function PostSlipItem({ postObj, deletePost }) {
    return (
        <div>
            <div className="bg-white px-4 py-3 border shadow rounded-lg gap-2">
                <PostHeader postObj={postObj} deletePost={deletePost} />
                <PostSlipContent image={postObj.image} />
            </div>

        </div>
    )
}
