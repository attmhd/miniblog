import Comment from "@/Components/Pages/Comment";
import RelatArticle from "@/Components/Pages/RelatedArticle";
import HomeLayout from "@/Layouts/HomeLayout";
import { Head } from "@inertiajs/react";
import HTMLReactParser from "html-react-parser";
import { useForm } from "@inertiajs/react";
import { router } from "@inertiajs/react";

function formatDate(dateString) {
    const date = new Date(dateString);
    const formattedDate = `${padZero(date.getDate())}-${padZero(
        date.getMonth() + 1
    )}-${date.getFullYear()}`;
    return formattedDate;
}

function padZero(value) {
    return String(value).padStart(2, "0");
}
export default function Details({ auth, discussion, article }) {
    console.log(auth.user.id);
    // console.log(discussion);

    let uId = null;
    let artikelId = null;
    let artikelData = null;

    if (
        discussion == undefined ||
        (auth.user.id == null && discussion == undefined)
    ) {
        artikelId = article.id;
        artikelData = article;
        uId = 0;
    } else {
        artikelId = discussion[0].article_id;
        artikelData = discussion[0].article;
        uId = auth.user.id;
    }

    const { data, setData } = useForm({
        user_id: auth.user.id,
        article_id: artikelId,
        comment: "",
    });

    const handleChange = (e) => {
        setData({ ...data, comment: e.target.value });
    };

    const addComment = (e) => {
        e.preventDefault();
        console.log(data);
        router.post("/detail/", data);

        setData({
            comment: "",
        });
    };

    return (
        <HomeLayout user={auth.user}>
            <Head title="Posts" />
            <div className="container mx-auto">
                <main className="pt-8 pb-16  lg:pb-24 bg-white dark:bg-gray-900 antialiased">
                    <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
                        <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                            <header class="mb-4 lg:mb-6 not-format">
                                <address class="flex items-center mb-6 not-italic">
                                    <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                                        <img
                                            class="mr-4 w-16 h-16 rounded-full"
                                            src="https://mahasiswa.itp.ac.id/assets/foto/profil/2022/55201/2022610013.jpeg"
                                            alt="Attan Muhammad"
                                        />
                                        <div>
                                            <span
                                                rel="author"
                                                class="text-xl font-bold text-gray-900 dark:text-white"
                                            >
                                                {artikelData.user.name}
                                            </span>
                                            <p class="text-base text-gray-500 dark:text-gray-400">
                                                {artikelData.user.occupation}
                                            </p>
                                            <p class="text-base text-gray-500 dark:text-gray-400">
                                                {formatDate(
                                                    artikelData.created_at
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                </address>
                                <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                                    {artikelData.title}
                                </h1>{" "}
                            </header>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: artikelData.content,
                                }}
                            />

                            <Comment
                                addComment={addComment}
                                handleChange={handleChange}
                                data={data.comment}
                                discuss={discussion}
                                formatDate={formatDate}
                                user_id={auth.user.id}
                            />
                        </article>
                    </div>
                </main>
                <RelatArticle />
            </div>
        </HomeLayout>
    );
}
