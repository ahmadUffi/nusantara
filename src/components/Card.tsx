interface CardProps {
  image?: string;
  title?: string;
  description?: string;
}

const Card: React.FC<CardProps> = ({
  image = "",
  title = "",
  description = "",
}) => {
  return (
    <div className="cursor-pointer h-[300px]  w-[300px] bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <div className="gamber">
        <img src={image} alt="gambar" className="h-40 w-full" />
      </div>
      <div className="p-6">
        <h2 className="text-lg font-semibold text-blue-600 mb-2">{title}</h2>
        <p className="text-gray-700 mb-4 text-justify text-[14px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
