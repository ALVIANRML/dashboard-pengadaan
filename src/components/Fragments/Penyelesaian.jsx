import StatSection from "./StatSection";

const Penyelesaian = () => {
  const tenderStats = [
    {
      title: "JUMLAH PAKET",
      value: "0 PAKET",
      bgColor: "bg-[#C1CFA1]",
    },
    {
      title: "NILAI PAKET",
      value: "Rp0.00",
      bgColor: "bg-[#F5F0D7]",
    },
    {
      title: "PRESENTASE",
      value: "0.00 %",
      bgColor: "bg-[#DDE6F4]",
    },
  ];

  const langsungStats = [
    {
      title: "JUMLAH PAKET",
      value: "0 PAKET",
      bgColor: "bg-[#C1CFA1]",
    },
    {
      title: "NILAI PAKET",
      value: "Rp0.00",
      bgColor: "bg-[#F5F0D7]",
    },
    {
      title: "PRESENTASE",
      value: "0.00 %",
      bgColor: "bg-[#DDE6F4]",
    },
  ];
  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-center mb-8">anjaylah</h2>

      <StatSection title="Tender Terbatas" stats={tenderStats} />
      <StatSection title="Penunjukkan Langsung" stats={langsungStats} />
    </div>
  );
};

export default Penyelesaian;
