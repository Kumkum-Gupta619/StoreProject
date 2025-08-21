import HeroSection from "../HeroSection";
// import LatestJobes from "../LatestJobes";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // ✅ Example: fetch user directly from localStorage/sessionStorage
        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (storedUser?.role === "recruiter") {
            navigate("/recruiter/dashboard");
        }
    }, [navigate]);

    return (
        <div className="h-fit">
            <HeroSection />
            {/* <LatestJobes /> */}
        </div>
    );
};

export default Home;
