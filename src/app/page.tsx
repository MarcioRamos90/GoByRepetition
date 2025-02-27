import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Hero from '../components/sections/Hero';
import Benefits from '../components/sections/Benefits';
import WaitList from '../components/sections/WaitList';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <WaitList />
      </main>
      <Footer />
    </div>
  );
}