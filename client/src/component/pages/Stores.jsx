import { useEffect, useState } from "react";
import StoreCard from "../StoreCard";
import StoreFilter from "../StoreFilter";

const StoreList = () => {
    // ✅ Instead of Redux, manage everything locally
    const [allStores, setAllStores] = useState([
        // Dummy data for now (replace with API later)
        { _id: "1", name: "Pizza Hut", address: "New York", rating: 4 },
        { _id: "2", name: "Domino's", address: "Chicago", rating: 5 },
        { _id: "3", name: "Burger King", address: "Los Angeles", rating: 3 },
    ]);

    const [filterQuery, setFilterQuery] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredStores, setFilteredStores] = useState(allStores);

    // ✅ Filtering and Searching
    useEffect(() => {
        let results = allStores;

        // Apply filter query (by name/address)
        if (filterQuery) {
            results = results.filter(
                (store) =>
                    store.name.toLowerCase().includes(filterQuery.toLowerCase()) ||
                    store.address.toLowerCase().includes(filterQuery.toLowerCase())
            );
        }

        // Apply search query (by name)
        if (searchQuery) {
            results = results.filter((store) =>
                store.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        setFilteredStores(results);
    }, [filterQuery, searchQuery, allStores]);

    return (
        <div className="m-auto max-w-screen-xl my-5 px-5">
            {/* Main Container */}
            <div className="flex flex-col lg:flex-row gap-5">
                {/* Store Filter Section */}
                <div className="w-full lg:w-1/4 bg-white p-5 border rounded-2xl h-fit lg:sticky lg:top-20">
                    <StoreFilter
                        filterQuery={filterQuery}
                        setFilterQuery={setFilterQuery}
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                    />
                </div>

                {/* Store Cards Section */}
                <div className="w-full lg:w-3/4 lg:ml-0">
                    {filteredStores.length <= 0 ? (
                        <div className="flex justify-center items-center h-full">
                            <span className="text-2xl font-mono">Store Not Found!</span>
                        </div>
                    ) : (
                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {filteredStores.map((store) => (
                                <li key={store?._id} className="list-none">
                                    <StoreCard store={store} />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default StoreList;
