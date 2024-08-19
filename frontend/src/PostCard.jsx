import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const PostCard = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3050/cards", { title, desc });
            if (response.status === 201) {
                toast.success("Card posted successfully!"); 
                setTitle("");
                setDesc("");
                navigate('/');
            }
        } catch (error) {
            toast.error("Failed to post the card. Please try again.");
            console.error("Error posting card:", error);
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white p-8 mt-10 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Post a New Card</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Description</label>
                    <textarea
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Post Card
                </button>
            </form>
        </div>
    );
};

export default PostCard;
