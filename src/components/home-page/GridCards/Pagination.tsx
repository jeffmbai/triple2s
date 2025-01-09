interface PaginationProps {
  total: number;
  active: number;
}

const Pagination: React.FC<PaginationProps> = ({ total, active }) => {
  return (
    <div className="flex justify-between items-center w-full max-w-xs mx-auto">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={`w-[22px] h-1 rounded-full transition-all duration-300 ease-in-out ${
            index === active ? "bg-[#CDCED4] scale-110" : "bg-[#18181899] scale-100"
          }`}
        />
      ))}
    </div>
  );
};


export default Pagination