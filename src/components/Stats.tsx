const stats = [
  { value: "$100K+", label: "Total Value Locked" },
  { value: "99.9%", label: "Uptime" },
  { value: "50,000+", label: "Active Users" },
  { value: "15%", label: "Average APY" }
];

const Stats = () => {
  return (
<div
  className="py-20"
  style={{
    background: 'linear-gradient(160deg, rgba(0,0,0,1) 0%, rgba(30,58,138,1) 64%, rgba(0,0,0,1) 100%)',
    opacity: 0.95
  }}
>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;