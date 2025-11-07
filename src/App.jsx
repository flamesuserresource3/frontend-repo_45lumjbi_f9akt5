import Hero3D from './components/Hero3D';
import StatsOverview from './components/StatsOverview';
import TeamGrid from './components/TeamGrid';
import PodcastSection from './components/PodcastSection';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#08080c] font-['Inter','Manrope',sans-serif] text-violet-50">
      <Hero3D />
      <StatsOverview />
      <TeamGrid />
      <PodcastSection />
    </div>
  );
}

export default App;
