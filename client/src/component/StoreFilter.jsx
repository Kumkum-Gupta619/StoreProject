import { useEffect, useState } from "react";
import { Label } from "@radix-ui/react-label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

const filterList = [
    {
        filterType: "Category Wise",
        filterData: ["Pizza", "Burgers", "Drinks", "Desserts"],
    },
    {
        filterType: "Location Wise",
        filterData: ["New York", "Chicago", "Los Angeles", "Houston"],
    },
];

const StoreFilter = ({ filterQuery, setFilterQuery, searchQuery, setSearchQuery }) => {
    const [isOpen, setIsOpen] = useState(true);

    // Local state for selected filter
    const [selectedValue, setSelectedValue] = useState(filterQuery || "");

    // Handle search input
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Handle radio filter selection
    const selectHandler = (value) => {
        setSelectedValue(value);
        setFilterQuery(value);
    };

    useEffect(() => {
        setSelectedValue(filterQuery);
    }, [filterQuery]);

    return (
        <div className="flex flex-col w-full h-fit bg-white rounded-lg">
            {/* Search Bar */}
            <div className="mb-5 flex gap-3 items-center justify-between">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search any Store"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700"
                />
            </div>

            {/* Toggle Button for Small Devices */}
            <button
                className="lg:hidden mb-5 bg-red-600 text-white px-4 py-2 rounded-lg"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? "Hide Filters" : "Show Filters"}
            </button>

            {/* Filter Section */}
            <div
                className={`w-full overflow-y-auto scrollbar-hide ${!isOpen ? "hidden" : ""}`}
            >
                <h1 className="text-2xl text-center lg:text-left">
                    <span className="text-red-700 font-bold">#Filter</span> Stores
                </h1>
                <hr className="mt-2" />
                <RadioGroup value={selectedValue} onValueChange={selectHandler}>
                    {filterList.map((data, index) => (
                        <div key={index} className="mt-4">
                            <h1 className="font-semibold">
                                <hr className="mb-3" />
                                {data.filterType}
                            </h1>
                            {data.filterData.length > 0 ? (
                                data.filterData.map((item, idx) => (
                                    <div key={idx} className="flex items-center space-x-2 my-2">
                                        <RadioGroupItem value={item} />
                                        <Label className="text-sm" htmlFor={`${data.filterType}-${idx}`}>
                                            {item}
                                        </Label>
                                    </div>
                                ))
                            ) : (
                                <p className="text-sm text-gray-500">No results found</p>
                            )}
                        </div>
                    ))}
                </RadioGroup>
            </div>
        </div>
    );
};

export default StoreFilter;
