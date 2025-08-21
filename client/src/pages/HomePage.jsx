import React from 'react'
import Navbar from "../components/Navbar";
const HomePage = () => {
    return (
        <>
            <Navbar />
            <div className="h-fit">
                <section className="relative bg-gradient-to-br from-red-50 via-white to-red-50 overflow-hidden pt-5">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute -top-40 -right-32 w-80 h-80 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
                        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
                        <div className="absolute top-40 left-40 w-80 h-80 bg-red-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
                    </div>
                    <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
                        <div className="text-center">
                            <div className="mb-8">
                                <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-star h-4 w-4"
                                    >
                                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                                    </svg>
                                    Rate your experience
                                </div>
                                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
                                    Find Best{" "}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
                                        For You
                                    </span>
                                    <br />
                                </h1>
                            </div>
                            <p className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl leading-relaxed mb-10">
                                Compare with all the store and select the best store fot i
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
                                <a href="/jobs" data-discover="true">
                                    <button
                                        data-slot="button"
                                        className="justify-center whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-9 has-[>svg]:px-3 bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
                                    >
                                        Explore Jobs
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-arrow-right h-5 w-5"
                                        >
                                            <path d="M5 12h14" />
                                            <path d="m12 5 7 7-7 7" />
                                        </svg>
                                    </button>
                                </a>
                                <a href="/register" data-discover="true">
                                    <button
                                        data-slot="button"
                                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-background shadow-xs hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 has-[>svg]:px-3 border-2 border-red-200 text-red-600 hover:bg-red-50 px-8 py-3 text-lg font-medium rounded-lg hover:border-red-300 transition-all duration-200"
                                    >
                                        Get Started Free
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0">
                        <svg
                            viewBox="0 0 1440 120"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                                fill="white"
                            />
                        </svg>
                    </div>
                </section>
                <style
                    dangerouslySetInnerHTML={{
                        __html:
                            "\n        @keyframes blob {\n          0% {\n            transform: translate(0px, 0px) scale(1);\n          }\n          33% {\n            transform: translate(30px, -50px) scale(1.1);\n          }\n          66% {\n            transform: translate(-20px, 20px) scale(0.9);\n          }\n          100% {\n            transform: translate(0px, 0px) scale(1);\n          }\n        }\n        .animate-blob {\n          animation: blob 7s infinite;\n        }\n        .animation-delay-2000 {\n          animation-delay: 2s;\n        }\n        .animation-delay-4000 {\n          animation-delay: 4s;\n        }\n      "
                    }}
                />
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 h-auto mb-10">
                    <dir className="py-10">
                        <h2 className="font-bold lg:text-2xl md:text-2xl sm:text-2xl bg-red-700 text-white py-1 px-4 rounded-md  text-center">
                            #Latest Job Openings
                        </h2>
                    </dir>
                    <div className="grid  gap-6 lg:grid-cols-3 md:grid-cols-2 ">
                        <div>
                            <div className="border p-5 rounded-2xl shadow-2xs">
                                <div className=" flex items-center gap-5 ">
                                    <button
                                        data-slot="button"
                                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 size-9 w-12 h-12 my-2"
                                    >
                                        <span>
                                            <img
                                                className="rounded-full"
                                                src="https://res.cloudinary.com/dnjrhqyzp/image/upload/v1747240909/dzwbjsgugui82f5rf9oh.jpg"
                                            />
                                        </span>
                                    </button>
                                    <div>
                                        <h2 className="font-medium text-lg">TCS Company</h2>
                                        <p className="text-sm text-gray-500">India</p>
                                    </div>
                                </div>
                                <div className="pt-2 pb-2">
                                    <h1 className="text-lg font-bold">DevOps Engineer</h1>
                                    <p className="text-sm">
                                        Implement CI/CD pipelines and manage cloud infrastructure....
                                    </p>
                                </div>
                                <div className="my-2 mt-2 flex gap-3 text-red-700">
                                    <span
                                        data-slot="badge"
                                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden"
                                    >
                                        Remote
                                    </span>
                                    <span
                                        data-slot="badge"
                                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden"
                                    >
                                        NaN
                                    </span>
                                    <span
                                        data-slot="badge"
                                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden"
                                    >
                                        05
                                    </span>
                                </div>
                                <div className="w-full my-2 pt-2">
                                    <button
                                        data-slot="button"
                                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground h-9 px-4 py-2 has-[>svg]:px-3 w-full shadow-2xs bg-red-600 hover:bg-red-700 font-semibold"
                                    >
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="border p-5 rounded-2xl shadow-2xs">
                                <div className=" flex items-center gap-5 ">
                                    <button
                                        data-slot="button"
                                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 size-9 w-12 h-12 my-2"
                                    >
                                        <span>
                                            <img
                                                className="rounded-full"
                                                src="https://res.cloudinary.com/dnjrhqyzp/image/upload/v1747240909/dzwbjsgugui82f5rf9oh.jpg"
                                            />
                                        </span>
                                    </button>
                                    <div>
                                        <h2 className="font-medium text-lg">TCS Company</h2>
                                        <p className="text-sm text-gray-500">India</p>
                                    </div>
                                </div>
                                <div className="pt-2 pb-2">
                                    <h1 className="text-lg font-bold">UI/UX Designer</h1>
                                    <p className="text-sm">
                                        Design intuitive and modern UI/UX for mobile and web
                                        applications....
                                    </p>
                                </div>
                                <div className="my-2 mt-2 flex gap-3 text-red-700">
                                    <span
                                        data-slot="badge"
                                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden"
                                    >
                                        Remote
                                    </span>
                                    <span
                                        data-slot="badge"
                                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden"
                                    >
                                        NaN
                                    </span>
                                    <span
                                        data-slot="badge"
                                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden"
                                    >
                                        15
                                    </span>
                                </div>
                                <div className="w-full my-2 pt-2">
                                    <button
                                        data-slot="button"
                                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground h-9 px-4 py-2 has-[>svg]:px-3 w-full shadow-2xs bg-red-600 hover:bg-red-700 font-semibold"
                                    >
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="border p-5 rounded-2xl shadow-2xs">
                                <div className=" flex items-center gap-5 ">
                                    <button
                                        data-slot="button"
                                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 size-9 w-12 h-12 my-2"
                                    >
                                        <span>
                                            <img
                                                className="rounded-full"
                                                src="https://res.cloudinary.com/dnjrhqyzp/image/upload/v1754499986/mexjqjmfdwrsuuvmm9y0.jpg"
                                            />
                                        </span>
                                    </button>
                                    <div>
                                        <h2 className="font-medium text-lg">Flipkart india</h2>
                                        <p className="text-sm text-gray-500">India</p>
                                    </div>
                                </div>
                                <div className="pt-2 pb-2">
                                    <h1 className="text-lg font-bold">React focused developer</h1>
                                    <p className="text-sm">
                                        A React-focused developer is a software professional specializing
                                        in the creation and maintenance of...
                                    </p>
                                </div>
                                <div className="my-2 mt-2 flex gap-3 text-red-700">
                                    <span
                                        data-slot="badge"
                                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden"
                                    >
                                        Remote
                                    </span>
                                    <span
                                        data-slot="badge"
                                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden"
                                    >
                                        NaN
                                    </span>
                                    <span
                                        data-slot="badge"
                                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden"
                                    >
                                        200
                                    </span>
                                </div>
                                <div className="w-full my-2 pt-2">
                                    <button
                                        data-slot="button"
                                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground h-9 px-4 py-2 has-[>svg]:px-3 w-full shadow-2xs bg-red-600 hover:bg-red-700 font-semibold"
                                    >
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="border p-5 rounded-2xl shadow-2xs">
                                <div className=" flex items-center gap-5 ">
                                    <button
                                        data-slot="button"
                                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 size-9 w-12 h-12 my-2"
                                    >
                                        <span>
                                            <img
                                                className="rounded-full"
                                                src="https://res.cloudinary.com/dnjrhqyzp/image/upload/v1747240909/dzwbjsgugui82f5rf9oh.jpg"
                                            />
                                        </span>
                                    </button>
                                    <div>
                                        <h2 className="font-medium text-lg">TCS Company</h2>
                                        <p className="text-sm text-gray-500">India</p>
                                    </div>
                                </div>
                                <div className="pt-2 pb-2">
                                    <h1 className="text-lg font-bold">Backend Developer</h1>
                                    <p className="text-sm">
                                        We're looking for a backend engineer to help build APIs for our
                                        cloud infrastructure....
                                    </p>
                                </div>
                                <div className="my-2 mt-2 flex gap-3 text-red-700">
                                    <span
                                        data-slot="badge"
                                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden"
                                    >
                                        full time
                                    </span>
                                    <span
                                        data-slot="badge"
                                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden"
                                    >
                                        NaN
                                    </span>
                                    <span
                                        data-slot="badge"
                                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden"
                                    >
                                        50
                                    </span>
                                </div>
                                <div className="w-full my-2 pt-2">
                                    <button
                                        data-slot="button"
                                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground h-9 px-4 py-2 has-[>svg]:px-3 w-full shadow-2xs bg-red-600 hover:bg-red-700 font-semibold"
                                    >
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="border p-5 rounded-2xl shadow-2xs">
                                <div className=" flex items-center gap-5 ">
                                    <button
                                        data-slot="button"
                                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 size-9 w-12 h-12 my-2"
                                    >
                                        <span>
                                            <img
                                                className="rounded-full"
                                                src="https://res.cloudinary.com/dnjrhqyzp/image/upload/v1745864705/qkophqwhilyocvyvzvmr.png"
                                            />
                                        </span>
                                    </button>
                                    <div>
                                        <h2 className="font-medium text-lg">Linkedin Company India</h2>
                                        <p className="text-sm text-gray-500">India</p>
                                    </div>
                                </div>
                                <div className="pt-2 pb-2">
                                    <h1 className="text-lg font-bold">Data Scientist</h1>
                                    <p className="text-sm">
                                        Uses data analysis, machine learning, and statistical models to
                                        solve business problems and uncover ...
                                    </p>
                                </div>
                                <div className="my-2 mt-2 flex gap-3 text-red-700">
                                    <span
                                        data-slot="badge"
                                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden"
                                    >
                                        Remote
                                    </span>
                                    <span
                                        data-slot="badge"
                                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden"
                                    >
                                        NaN
                                    </span>
                                    <span
                                        data-slot="badge"
                                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden"
                                    >
                                        25
                                    </span>
                                </div>
                                <div className="w-full my-2 pt-2">
                                    <button
                                        data-slot="button"
                                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground h-9 px-4 py-2 has-[>svg]:px-3 w-full shadow-2xs bg-red-600 hover:bg-red-700 font-semibold"
                                    >
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="border p-5 rounded-2xl shadow-2xs">
                                <div className=" flex items-center gap-5 ">
                                    <button
                                        data-slot="button"
                                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 size-9 w-12 h-12 my-2"
                                    >
                                        <span>
                                            <img
                                                className="rounded-full"
                                                src="https://res.cloudinary.com/dnjrhqyzp/image/upload/v1745864705/qkophqwhilyocvyvzvmr.png"
                                            />
                                        </span>
                                    </button>
                                    <div>
                                        <h2 className="font-medium text-lg">Linkedin Company India</h2>
                                        <p className="text-sm text-gray-500">India</p>
                                    </div>
                                </div>
                                <div className="pt-2 pb-2">
                                    <h1 className="text-lg font-bold">Frontend Developer</h1>
                                    <p className="text-sm">
                                        Frontend Developer developers build both the front-end (user
                                        interface) and back-end (server/databas...
                                    </p>
                                </div>
                                <div className="my-2 mt-2 flex gap-3 text-red-700">
                                    <span
                                        data-slot="badge"
                                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden"
                                    >
                                        full time
                                    </span>
                                    <span
                                        data-slot="badge"
                                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden"
                                    >
                                        25000
                                    </span>
                                    <span
                                        data-slot="badge"
                                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden"
                                    >
                                        423
                                    </span>
                                </div>
                                <div className="w-full my-2 pt-2">
                                    <button
                                        data-slot="button"
                                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground h-9 px-4 py-2 has-[>svg]:px-3 w-full shadow-2xs bg-red-600 hover:bg-red-700 font-semibold"
                                    >
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomePage
