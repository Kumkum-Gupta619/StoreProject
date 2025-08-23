import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { api } from "@/api/api";
import axios from "axios";
import RatingPopup from "./RatingPopup";
const API_BASE = import.meta.env.VITE_BASE_URL || "http://localhost:3000";
const StoreDetails = () => {

    const [showPopup, setShowPopup] = useState(false);

    const handleSubmitRating = ({ rating, message }) => {
        console.log("User rating:", rating);
        console.log("User message:", message);

    };
    const { id } = useParams();
    const [store, setStore] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isRated, setIsRated] = useState(false);

    // Fetch store details
    useEffect(() => {
        const fetchStore = async () => {
            const uri = `${api}/api/stores/${id}/rating`

            try {
                const res = await axios.get(`http://localhost:3000/api/stores/${id}`, {
                    withCredentials: true,
                });
                console.log("rating data", res.data);
                if (res.data.success) {
                    setStore(res.data);
                    // If backend includes user’s rating info, mark as rated
                    setIsRated(
                        res.data.store.ratings?.some(
                            (rating) => rating.userId === res.data.userId
                        )
                    );
                }
            } catch (error) {
                console.error(error);
                toast.error("Failed to load store details");
            } finally {
                setIsLoading(false);
            }
        };

        fetchStore(store);
    }, [id]);

    // Example: Rate the store (similar to apply for job)
    const handleRate = async () => {
        try {
            const res = await api.post(
                `/api/rating/add`,
                { storeId: id, rating: 5, comment: "Awesome store!" },
                { withCredentials: true }
            );

            if (res.data.success) {
                toast.success("Thanks for rating!");
                setIsRated(true);
                setStore((prev) => ({
                    ...prev,
                    ratings: [...(prev.ratings || []), { userId: res.data.userId, rating: 5 }],
                }));
            }
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.message || "Failed to rate store");
        }
    };

    if (isLoading) return <p className="text-center py-10">Loading store...</p>;

    console.log(store.store);
    return (
        <div className="mx-auto max-w-4xl px-4 sm:px-6 h-auto mb-10 mt-10 bg-white border-2 border-gray-100 rounded-2xl shadow-1xl p-5">
            <div className="flex flex-col justify-center items-center">
                <img
                    src={store.store?.storeImg}
                    alt="Store"
                    className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-lg shadow-lg object-cover 
             transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
                />
                <h1 className="text-lg font-semibold mb-5">{store.store?.name}</h1>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-700 mb-6">
                    <div className="bg-gray-100 rounded-xl p-4">
                        <p className="font-medium">Address</p>
                        <p className="text-gray-600">{store.store?.address}</p>
                    </div>
                    <div className="bg-gray-100 rounded-xl p-4">
                        <p className="font-medium">Owner</p>
                        <p className="text-gray-600">{store.store?.owner.name}</p>
                    </div>
                    <div className="bg-gray-100 rounded-xl p-4">

                        <p className="font-medium">Average Rating</p>
                        <p className="text-gray-600">{store?.averageRating}</p>
                        <div className="pt-2 pb-2">
                            <h6 className="text-lg font-bold">⭐ {store.store?.avgRating + "/ 5" || "No Ratings"}</h6>
                            <p className="text-sm text-gray-600">
                                {store?.description?.length > 80
                                    ? `${store?.description.slice(0, 80)}...`
                                    : store?.description}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Store Image */}
                {store?.storeImg && (
                    <div className="mb-5">
                        <img
                            src={store.store?.storeImg}
                            alt={store.store?.name}
                            className="w-full max-h-64 object-cover rounded-2xl shadow-md transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                )}

                <div className="mb-6">
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        <li>
                            <span className="font-bold">Store ID: </span> {store.store?.id}
                        </li>
                        <li>
                            <span className="font-bold">Total Ratings: </span>{" "}
                            {store.store?.ratings?.length || 0}
                        </li>
                    </ul>
                </div>
                <button
                    onClick={() => setShowPopup(true)}
                    className="mt-4 py-2 px-4 bg-red-500 text-white rounded-xl"
                >
                    Rate this store
                </button>

                <RatingPopup
                    isOpen={showPopup}
                    onClose={() => setShowPopup(false)}
                    storeId={id}
                />

            </div>
        </div>
    );
};

export default StoreDetails;
