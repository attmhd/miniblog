import Articles from "@/Components/Pages/Artikel";
import Hero from "@/Components/Pages/Hero";
import HomeLayout from "@/Layouts/HomeLayout";

export default function Home({ auth }) {
    return (
        <HomeLayout user={auth.user}>
            <Hero />
            <Articles />
        </HomeLayout>
    );
}
