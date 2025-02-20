import { Link, useLoaderData } from "react-router-dom";
import Header from "../Components/Header";
import RightNavbar from "../Components/Layout Compponent/RightNavbar";

const NewsDetails = () => {
    const data = useLoaderData();
    const news = data.data[0];
    // console.log(news);
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
                <section className="col-span-9">
                    <h2 className="font-semibold mb-3">Dragon News</h2>
                    <div className=" bg-gray-100 shadow-xl rounded-lg overflow-hidden">
  <img 
    src={news?.image_url} 
    alt="Shoes" 
    className="w-full h-48 object-cover"
  />
  <div className="p-4">
                            <h2 className="text-lg font-semibold">{news.title}</h2>
                            <p className="text-gray-600">{news.details}</p>
    <div className="mt-4 flex justify-end">
      <Link to={`/category/${news?.category_id}`} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
        Back to category
      </Link>
    </div>
  </div>
</div>

                </section>
                <aside className="col-span-3">
                    <RightNavbar></RightNavbar>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;