"use client"

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Hero from '../components/sections/Hero';
import WaitList from '../components/sections/WaitList';

interface MainProps {
  children: React.ReactNode;
}

function Main(params: MainProps) {
  return (
    <main className="justify-center items-center bg-gray-800 text-white">
      {params.children}
    </main>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <WaitList />
      </Main>
      <Footer />
    </>
  );
}
