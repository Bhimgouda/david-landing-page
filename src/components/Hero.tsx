import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center">
    <div
      className="absolute inset-0"
      style={{
        background: 'linear-gradient(160deg, rgba(0,0,0,1) 0%, rgba(30,58,138,1) 64%, rgba(0,0,0,1) 100%)',
        opacity: 0.95
      }}
    />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Meet David, Your AI DeFi Staking Agent
          </h1>
          <p className="text-xl text-gray-200 mb-8 animate-fade-in">
            Maximize your crypto yields with intelligent staking strategies powered by advanced AI. David helps you navigate the DeFi landscape with confidence.
          </p>
          <a href="https://t.me/David_StakeBot">
            <Button size="lg" className="animate-fade-in hover:scale-105 transition-transform">
              Start Staking <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;