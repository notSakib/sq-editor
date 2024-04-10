import Image from "next/image";
import UnderConstructionImage from "../../../public/Under construction-amico.svg";

export default function PageUnderContruction() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
      <Image
        width={300}
        height={200}
        loading="lazy"
        className="object-contain"
        src={UnderConstructionImage}
        alt="coming_soon"
      />
      <h3 className="text-2xl font-bold tracking-tight">Coming soon</h3>
    </div>
  );
}
