export default function PostSlipContent({ image }) {
    return (
        <div className="py-2 flex flex-col gap-4">
            {image && (
                <div className="-mx-4">
                    <img src={image} alt="post" />
                </div>
            )}
        </div>
    )
}