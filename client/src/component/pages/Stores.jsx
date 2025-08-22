import { useEffect, useState } from "react";
import StoreCard from "../StoreCard";
import StoreFilter from "../StoreFilter";
import { api } from "@/api/api";
const StoreList = () => {
    const [allStores, setAllStores] = useState([]); // must be array
    const [filterQuery, setFilterQuery] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredStores, setFilteredStores] = useState([]);

    // Fetch stores
    const fetchStores = async () => {
        try {
            const res = await api.get("/api/stores");

            console.log("API response:", res.data);

            if (Array.isArray(res.data)) {
                setAllStores(res.data);
            } else if (Array.isArray(res.data.stores)) {
                setAllStores(res.data.stores);
            } else {
                console.error("Unexpected response format:", res.data);
                setAllStores([]);
            }
        } catch (error) {
            console.error("Error fetching stores:", error);
            setAllStores([]);
        }
    };

    useEffect(() => {
        fetchStores();
    }, []);

    // Apply filtering + search
    useEffect(() => {
        let results = [...allStores]; // clone array

        if (filterQuery) {
            results = results.filter(
                (store) =>
                    store.name?.toLowerCase().includes(filterQuery.toLowerCase()) ||
                    store.address?.toLowerCase().includes(filterQuery.toLowerCase())
            );
        }

        if (searchQuery) {
            results = results.filter((store) =>
                store.name?.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        setFilteredStores(results);
    }, [filterQuery, searchQuery, allStores]);

    return (
        <div className="m-auto max-w-screen-xl my-5 px-5">
            <div className="flex flex-col lg:flex-row gap-5">
                {/* Store Filter */}
                <div className="w-full lg:w-1/4 bg-white p-5 border rounded-2xl h-fit lg:sticky lg:top-20">
                    <StoreFilter
                        filterQuery={filterQuery}
                        setFilterQuery={setFilterQuery}
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                    />
                </div>

                {/* Store Cards */}
                <div className="w-full lg:w-3/4 lg:ml-0">
                    {!Array.isArray(filteredStores) || filteredStores.length === 0 ? (
                        <div className="flex justify-center items-center h-full">
                            <span className="text-2xl font-mono">Store Not Found!</span>
                        </div>
                    ) : (
                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {filteredStores.map((store) => (
                                <li key={store.id || store._id} className="list-none">
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
