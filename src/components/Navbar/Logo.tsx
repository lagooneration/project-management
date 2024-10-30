import Image from "next/image";

export default function Logo() {
  return (
    <div className="relative w-[72px] md:w-20 lg:w-full">
      <div className="relative flex items-center justify-center mt-2 z-10">
        <Image src="/newew.png" alt="Logo" width={53} height={53} priority />
      </div>
    </div>
  );
}
