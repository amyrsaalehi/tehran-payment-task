import type { NextPage } from "next";
import Head from "next/head";
import ProductList from "../components/ProductList";
import UserList from "../components/UserList";
import SelectedProductList from "../components/SelectedProductList";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>E-commerce Explorer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">E-commerce Explorer</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProductList />
          <UserList />
          <SelectedProductList />
        </div>
      </main>
    </div>
  );
};

export default Home;
