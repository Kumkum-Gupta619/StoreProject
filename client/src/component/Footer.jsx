import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer className="bg-white border-t">
                <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-8 sm:px-6 lg:px-8 lg:pt-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-red-700 sm:text-5xl">
                            Find Your Best Choice!
                        </h2>

                        <p className="mx-auto mt-4 max-w-sm text-gray-500">
                            Discover the best-rated stores near you. Join us and take the first step towards smarter shopping.
                        </p>

                        <Link
                            to="/jobs"
                            className="mt-8 inline-block rounded-full border border-red-700 px-12 py-3 text-sm font-medium text-red-600 hover:bg-red-700 hover:text-white focus:ring-3 focus:outline-hidden"
                        >
                            Explore
                        </Link>
                    </div>

                    <div className="mt-5 sm:flex sm:items-center sm:justify-between border-t">
                        <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end mt-5">
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-500 transition hover:text-red-600"
                                >
                                    Contact
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="text-gray-500 transition hover:text-red-600"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>

                        <ul className="mt-8 flex justify-center gap-6 sm:mt-0 lg:justify-end">
                            <a
                                className="text-gray-500 transition hover:opacity-75 text-sm"
                                href="https://github.com/Kumkum-Gupta619/StoreProject"
                            >
                                build by -{" "}
                                <span className="hover:text-red-700"> Kumkum-Gupta619
                                </span>
                            </a>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
