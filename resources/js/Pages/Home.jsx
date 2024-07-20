import Articles from "@/Components/Pages/Artikel";
import Hero from "@/Components/Pages/Hero";
import HomeLayout from "@/Layouts/HomeLayout";
import { Head } from "@inertiajs/react";
import { Typography } from "@material-tailwind/react";

export default function Home({ auth, articles }) {
    console.log(articles);
    return (
        <HomeLayout user={auth.user}>
            <Head title="Home" />
            <Hero />
            <Typography className=" text-3xl font-bold text-center ">
                All Article's
            </Typography>
            <div id="blog" className=" hero bg-transparent min-h-max">
                <div className="hero-content grid flex-row lg:grid-cols-3">
                    {articles.map((item, i) => {
                        return (
                            <div key={i}>
                                <Articles title={item.title} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </HomeLayout>
    );
}
