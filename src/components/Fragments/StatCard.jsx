const StatCard = ({ title, value, bgColor }) => {
  return (
    <div
      className={`flex flex-col gap-y-6 rounded-xl border border-gray-600 px-6 py-11 w-full text-left ${bgColor}`}
    >
      <p className="text-sm text-gray-600 font-semibold">{title}</p>
      <p className="text-2xl font-bold mt-1">{value}</p>
    </div>
  );
};

export default StatCard;
