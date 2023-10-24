import { useState } from "react";
import CreateSlipButton from "../Payments/CreateSlipButton";
import PostSliptList from "../Payments/PostSlipList";
import axios from "../../config/axios";


export default function PostSlipHomePage({ input, setInput }) {
    const [allPost, setAllPost] = useState([]);

    const createPost = async (data) => {
        const res = await axios.post('/post', data);
        const newPost = res.data.post;
        setAllPost([newPost, ...allPost]);
    };

    const deletePost = async (postId) => {
        try {
            await axios.delete(`/post/${postId}`);
            setAllPost(allPost.filter(el => el.id !== postId));
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="max-w-[44rem] mx-auto px-8 py-6 flex flex-col gap-4">
            <CreateSlipButton createPost={createPost} input={input} setInput={setInput} />
            <PostSliptList allPost={allPost} deletePost={deletePost} />
        </div>
    );
}