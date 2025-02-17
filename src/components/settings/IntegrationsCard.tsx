import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { SwitchToggle } from "./UI/SwitchToggle";

interface IntegrationsCardProps {
  image: StaticImageData;
  description: string;
  name: string;
}

const IntegrationsCard = ({
  name,
  description,
  image,
}: IntegrationsCardProps) => {
  return (
    <div className="w-72 flex flex-col gap-3 cursor-pointer  bg-zinc-300 p-3 rounded-xl hover:shadow-lg">
      <div className="flex justify-between pr-3 items-center">
        <div className="flex gap-1 justify-start items-center">
          <Image src={image} alt="" className="w-12 h-12 rounded-full" />
          <span className="font-semibold text-zinc-700">{name}</span>
        </div>
        <SwitchToggle />
      </div>
      <div className="flex flex-col justify-end gap-5 ">
        <span className="text-sm  text-zinc-600 leading-4 ">{description}</span>
      </div>
      <div className="flex justify-end">
        <Link href="" className="">
          <button className="text-xs text-zinc-500 text-end hover:text-indigo-400">
            Manage integration
          </button>
        </Link>
      </div>
    </div>
  );
};

export default IntegrationsCard;
