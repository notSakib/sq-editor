import Image from "next/image";
import NoDataImage from "../../../public/No data-rafiki.svg";

export default function NoDataFound() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <Image
        width={500}
        height={200}
        loading="lazy"
        className="object-contain"
        src={NoDataImage}
        alt="no_data"
      />
    </div>
  );
}
