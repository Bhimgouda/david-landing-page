import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <div className="py-20"   style={{
      background: 'linear-gradient(160deg, rgba(0,0,0,1) 0%, rgba(30,58,138,1) 64%, rgba(0,0,0,1) 100%)',
      opacity: 0.95
    }}>
      <div className="container mx-auto px-4 text-center text-white">
        <h2 className="text-4xl font-bold mb-6 ">
          Ready to Start Your DeFi Journey?
        </h2>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Join thousands of investors who trust David to optimize their DeFi staking strategy.
        </p>
        <a href="https://t.me/David_StakeBot">
        <Button size="lg" className="hover:scale-105 transition-transform">
          Get Started Now
        </Button>
        </a>  
      </div>
    </div>
  );
};

export default CTA;