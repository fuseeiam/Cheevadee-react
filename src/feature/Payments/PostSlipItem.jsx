import PostSlipContent from './PostSlipContent'
import PostSlipHeader from './PostSlipHeader'

export default function PostSlipItem({ postObj }) {

    return (
        <div>
            <div className="bg-white px-4 py-3 border shadow rounded-lg gap-2">
                <PostSlipHeader postObj={postObj} />
                <PostSlipContent image={postObj.image} />
            </div>

        </div>
    )
}
