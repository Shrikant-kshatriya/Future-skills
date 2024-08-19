import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleCard = () => {
    const { title } = useParams(); // get the card ID from the URL
    const [card, setCard] = useState(null);

    useEffect(() => {
        const fetchCard = async () => {
            try {
                const response = await axios.get(`http://localhost:3050/cards/${title}`);
                if (response.data) {
                    setCard(response.data);
                }
            } catch (error) {
                console.error("Error fetching the card details:", error);
            }
        };

        fetchCard();
    }, [title]);

    if (!card) {
        return <div>Loading...</div>;
    }

    return (
        <div className="max-w-2xl mx-auto bg-white p-8 mt-10 shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold mb-4">{card.title}</h2>
            <p className="text-gray-700">{card.desc}</p>
        </div>
    );
};

export default SingleCard;
