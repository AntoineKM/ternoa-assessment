import Head from "next/head";

import Amaze from "../components/Amaze";
import Collection from "../components/Collection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MoreNFTs from "../components/MoreNFTs";
import OtherNFTs from "../components/OtherNFTs";
import SignUp from "../components/SignUp";

export default function Home() {
  return (
    <>
      <Head>
        <title>{"nfters"}</title>
      </Head>
      <Header />
      <Hero />
      <Amaze />
      <Collection />
      <SignUp />
      <MoreNFTs />
      <OtherNFTs />
      <Footer />
    </>
  );
}
