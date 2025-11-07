import Hero3D from './components/Hero3D';
import StatsOverview from './components/StatsOverview';
import TeamGrid from './components/TeamGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#08080c] font-['Inter','Manrope',sans-serif] text-violet-50">
      <Hero3D />
      <StatsOverview />
      <TeamGrid />
      <Footer />
    </div>
  );
}

export default App;
