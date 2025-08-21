import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "./ui/avatar";
import { useNavigate } from "react-router-dom";

const StoreCard = ({ store }) => {
    const navigate = useNavigate();

    return (
        <div className="bg-white border-2 border-gray-100 rounded-2xl shadow-md cursor-pointer p-3">
            {/* Store Logo + Info */}
            <div className="mt-3 flex items-center gap-5">
                <Button variant="outline" size="icon" className="w-16 h-16 my-2">
                    <Avatar>
                        <AvatarImage src={store?.logo} alt={store?.name} />
                    </Avatar>
                </Button>
                <div>
                    <h2 className="font-medium text-lg">{store?.name}</h2>
                    <p className="text-sm text-gray-500">{store?.address}</p>
                </div>
            </div>

            {/* Store Details */}
            <div className="pt-2 pb-2">
                <h1 className="text-lg font-bold">⭐ {store?.rating || "No Ratings"}</h1>
                <p className="text-sm text-gray-600">
                    {store?.description?.length > 80
                        ? `${store?.description.slice(0, 80)}...`
                        : store?.description}
                </p>
            </div>

            {/* Tags (Optional Categories) */}
            <div className="my-2 flex gap-3 text-red-700 flex-wrap">
                {store?.categories?.map((cat, i) => (
                    <Badge key={i} variant="ghost">
                        {cat}
                    </Badge>
                ))}
            </div>

            {/* View Button */}
            <div className="w-full my-2 pt-2">
                <Button
                    onClick={() => navigate(`/stores/${store?._id}`)}
                    className="w-full shadow-md bg-red-600 hover:bg-red-700 font-semibold"
                >
                    View Store
                </Button>
            </div>
        </div>
    );
};

export default StoreCard;
