import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaHireAHelper } from "react-icons/fa6";
import axios from 'axios';
import { Link } from "react-router-dom";

const HelpCenter = () => {
    const [cards, setCards] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const getCards = async () => {
            try {
                const response = await axios.get('http://localhost:3050/cards');
                if (response.data) {
                    setCards(response.data);
                }
            } catch (error) {
                console.error("Error fetching the cards:", error);
            }
        };

        getCards();
    }, []);

    const filteredCards = cards.filter(card =>
        card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.desc.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <header className="bg-black text-white p-4 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <FaHireAHelper className="text-2xl" />
                    <span className="text-lg font-semibold">Abstract | Help Center</span>
                </div>
                <div>
                    <button className="bg-gray-800 text-white px-4 py-2 rounded">Submit a request</button>
                    <Link to='/post-card' className="bg-gray-400 px-4 py-2 rounded mx-2">Post Card</Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="bg-purple-100 py-12 text-center">
                <h1 className="text-4xl font-bold mb-4">How can we help?</h1>
                <div className="max-w-md mx-auto flex items-center justify-center">
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full p-3 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    />
                    <div className="cursor-pointer">
                        <FaArrowRight className="text-2xl -ml-10" />
                    </div>
                </div>
            </main>

            {/* Information Cards */}
            <section className="py-12">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCards.map((card, index) => (
                        <Link to={`/card/${card.title}`} key={index}>
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h2 className="text-xl font-semibold border-b-2">{card.title}</h2>
                                <p className="text-gray-700 mt-2">
                                    {card.desc}
                                </p>
                            </div>

                        </Link>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-white py-8">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                        <h3 className="font-semibold mb-4">Abstract</h3>
                        <ul>
                            <li>Branches</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Resources</h3>
                        <ul>
                            <li>Blog</li>
                            <li>Help Center</li>
                            <li>Release Notes</li>
                            <li>Status</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Community</h3>
                        <ul>
                            <li>Twitter</li>
                            <li>LinkedIn</li>
                            <li>Facebook</li>
                            <li>Dribbble</li>
                            <li>Podcast</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Company</h3>
                        <ul>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Legal</li>
                        </ul>
                    </div>
                </div>
                <div className="text-center mt-6">
                    <p>&copy; Copyright 2022 Abstract Studio Design, Inc. All rights reserved</p>
                    <p>Contact Us: info@abstract.com</p>
                </div>
            </footer>
        </div>
    );
};

export default HelpCenter;
