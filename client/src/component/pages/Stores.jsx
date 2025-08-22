import { useEffect, useState } from "react";
import StoreCard from "../StoreCard";
import StoreFilter from "../StoreFilter";
import axios from 'axios'
const StoreList = () => {
    // ✅ Instead of Redux, manage everything locally
    const [allStores, setAllStores] = useState([]);

    const data = async () => {
        try {
            const d = await axios.get('http://localhost:3000/api/stores');
            console.log(d.data);
            setAllStores(d.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        data()
    })
    const [filterQuery, setFilterQuery] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredStores, setFilteredStores] = useState(allStores);

    useEffect(() => {
        let results = allStores;

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
