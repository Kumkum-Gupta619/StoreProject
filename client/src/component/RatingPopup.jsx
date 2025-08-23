import React, { useState } from "react";
import { api } from "@/api/api";
import { useParams } from "react-router-dom";
const RatingPopup = ({ isOpen, onClose, storeId }) => {
    const [selectedRating, setSelectedRating] = useState(0);
    const [comment, setcomment] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    if (!isOpen) return null;

    const handleStarClick = (rating) => {
        setSelectedRating(rating);
    };

    const handleSubmit = async () => {
        if (selectedRating === 0) {
            setError("Please select a rating");
            return;
        }

        setLoading(true);
        setError(null);
        console.log(storeId);

        try {
            // Replace with your API base URL
            const token = localStorage.getItem("token"); // or your auth logic
            const response = await api.post(
                `/api/ratings/`,
                {
                    rating: selectedRating,
                    comment,
                    storeId
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            console.log("Rating submitted:", response.data);
            setLoading(false);
            onClose(); // close popup after success
        } catch (err) {
            console.error(err);
            setError("Failed to submit rating. Try again.");
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-auto">
            <div className="absolute inset-0 bg-transparent" onClick={onClose}></div>

            <div className="relative bg-white/80 backdrop-blur-md w-80 p-6 rounded-xl shadow-lg z-10 flex flex-col items-center">
                <h2 className="text-gray-800 text-2xl font-semibold mb-4">
                    Your opinion matters!
                </h2>

                <span className="text-gray-800 mb-3">Rate the quality:</span>

                <div className="flex space-x-2 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                            key={star}
                            onClick={() => handleStarClick(star)}
                            className={`w-8 h-8 cursor-pointer ${star <= selectedRating ? "text-red-500" : "text-gray-300"
                                }`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    ))}
                </div>

                <textarea
                    rows={3}
                    className="w-full p-2 mb-4 text-gray-500 rounded-lg border border-gray-300 resize-none bg-white/70"
                    placeholder="Leave a comment (optional)"
                    value={comment}
                    onChange={(e) => setcomment(e.target.value)}
                />

                {error && <p className="text-red-500 mb-2">{error}</p>}

                <button
                    onClick={handleSubmit}
                    className="w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 mb-2 transition"
                    disabled={loading}
                >
                    {loading ? "Submitting..." : "Submit"}
                </button>

                <button
                    onClick={onClose}
                    className="w-full py-2 text-gray-500 hover:underline"
                >
                    Maybe later
                </button>
            </div>
        </div>
    );
};

export default RatingPopup;
