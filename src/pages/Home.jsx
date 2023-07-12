import { CardPost } from "../components/CardPost";

const Home = () => {
  return (
    <>
      <section className="container grid grid-cols-1 mt-5 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto ">
        <div>
          <CardPost />
        </div>
        <div>
          <CardPost />
        </div>
        <div>
          <CardPost />
        </div>
        <div>
          <CardPost />
        </div>
      </section>
    </>
  );
};

export default Home;
