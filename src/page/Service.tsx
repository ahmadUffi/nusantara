import Card from "../components/Card";
import crypto from "../assets/crypto.jpg";
import nft from "../assets/nft.jpeg";
import transparant from "../assets/transparant.jpg";

const Service: React.FC = () => {
  const listPilihan = [
    {
      judul: "Transparansi Perjalanan",
      desk: "Riwayat dan detail perjalanan tercatat di blockchain, bebas dari manipulasi data.",
      image: transparant,
    },
    {
      judul: "Tiket Digital NFT",
      desk: "Setiap tiket perjalanan berupa NFT yang unik, dapat diverifikasi dan ditransfer dengan mudah.",
      image: nft,
    },
    {
      judul: "Pembayaran dengan Crypto",
      desk: "Dukung berbagai metode pembayaran modern seperti ETH, USDT, dan token Web3 lainnya.",
      image: crypto,
    },
  ];

  return (
    <div className="md:px-20 px-5">
      <div className="text border-b  ">
        <h4 className="text-xl font-bold p-2 text-blue-500">
          Keunngulan Layanan Kami
        </h4>
      </div>
      <div className="pilihan flex flex-wrap gap-y-6  justify-evenly mt-10">
        {listPilihan.map((list, index) => (
          <Card
            key={index}
            title={list.judul}
            image={list.image}
            description={list.desk}
          />
        ))}
      </div>
    </div>
  );
};
export default Service;
