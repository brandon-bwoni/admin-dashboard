import Image from "next/image";

const Transactions = () => {
  return (
    <div className="p-5 rounded-xl bg-zinc-300 shadow-lg">
      <h2 className="mb-5 font-medium text-2xl text-gray-700">
        Latest Transactions
      </h2>
      <table className="w-[100%]">
        <thead>
          <tr className="font-semibold text-gray-700">
            <td className="p-[10px]">Name</td>
            <td className="p-[10px]">Status</td>
            <td className="p-[10px]">Date</td>
            <td className="p-[10px]">Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-[10px]">
              <div className="flex gap-[10px] text-base text-gray-600 items-center">
                <Image
                  src="/noavatar.png"
                  width={40}
                  height={40}
                  alt=""
                  className="object-cover rounded-full"
                />
                Glen Washington
              </div>
            </td>
            <td className="">
              <span
                className={`${"rounded-md py-2 px-3 text-[14px]"} ${"bg-stone-600 text-gray-200"}`}
              >
                Pending
              </span>
            </td>
            <td className="p-[10px] text-gray-600">14.02.2024</td>
            <td className="p-[10px] text-gray-600">$3000</td>
          </tr>
          <tr>
            <td className="py-2 px-2">
              <div className="flex items-center gap-3 text-gray-600">
                <Image
                  src="/noavatar.png"
                  width={40}
                  height={40}
                  alt=""
                  className="object-cover rounded-full"
                />
                John Doe
              </div>
            </td>
            <td>
              <span
                className={`${"rounded-md py-2 px-5 text-gray-100 text-[14px]"} ${"bg-green-700"}`}
              >
                Done
              </span>
            </td>
            <td className="p-[10px] text-gray-600">14.02.2024</td>
            <td className="p-[10px] text-gray-600">$3000</td>
          </tr>
          <tr>
            <td className="p-[10px]">
              <div className="flex gap-[10px] items-center text-gray-600">
                <Image
                  src="/noavatar.png"
                  width={40}
                  height={40}
                  alt=""
                  className="object-cover rounded-full"
                />
                Benjamin Franklin
              </div>
            </td>
            <td>
              <span
                className={`${"rounded-md py-2 px-2 text-gray-100 text-[14px]"} ${"bg-red-700"}`}
              >
                Cancelled
              </span>
            </td>
            <td className="p-[10px] text-gray-600">14.02.2024</td>
            <td className="p-[10px] text-gray-600">$3000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
