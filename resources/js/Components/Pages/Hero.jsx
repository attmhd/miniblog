import { Link } from "@inertiajs/react";
import PrimaryButton from "../PrimaryButton";

export default function Hero() {
    return (
        <section class="bg-white dark:bg-gray-900 hero mx-auto">
            <div class="py-8 px-4 mx-auto  lg:max-w-screen-xl text-center lg:py-16">
                <h1 class="mb-4 px-24 text-3xl font-semibold tracking-tight leading-none text-zinc-800 md:text-5xl lg:text-6xl dark:text-white">
                    Embrace the <span className=" text-green-700"> future</span>{" "}
                    and explore the boundless possibilities that{" "}
                    <span className=" text-green-700">technology</span> has to
                    offer.
                </h1>
                <p class="mb-8 px-24 font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                    "Welcome to our tech community! Join our email list to
                    receive tech news and tips directly in your inbox."
                </p>
                <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <input
                        type="text"
                        placeholder="Enter your Email"
                        className="input input-bordered w-full max-w-xs"
                    />
                    <Link>
                        <PrimaryButton>Subscribe</PrimaryButton>
                    </Link>
                </div>
            </div>
        </section>
    );
}
