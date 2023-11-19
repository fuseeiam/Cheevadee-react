import CreateSlipButton from "../Payments/CreateSlipButton";
import PostSliptList from "../Payments/PostSlipList";


export default function PostSlipHomePage({ input, setInput, file, setFile }) {

    return (
        <div className="max-w-[44rem] mx-auto px-8 py-6 flex flex-col gap-4">
            <CreateSlipButton input={input} setInput={setInput} file={file} setFile={setFile} />
            <PostSliptList />
        </div>
    );
}