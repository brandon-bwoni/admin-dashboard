import Image from "next/image";
import styles from "./transactions.module.css";

const Transactions = () => {
  return (
    <div className="p-5 rounded-xl">
      <h2 className="mb-5 font-mono ">Latest Transactions</h2>
      <table className="w-[100%]">
        <thead>
          <tr>
            <td className="p-[10px]">Name</td>
            <td className="p-[10px]">Status</td>
            <td className="p-[10px]">Date</td>
            <td className="p-[10px]">Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-[10px]">
              <div className="flex gap-[10px] items-center">
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
            <td className="p-[10px]">
              <span className={`${"rounded-md text-[14px]"} ${"bg-stone-700"}`}>
                Pending
              </span>
            </td>
            <td className="p-[10px]">14.02.2024</td>
            <td className="p-[10px]">$3000</td>
          </tr>
          <tr>
            <td className="p-[10px]">
              <div className="flex items-center gap-[10px]">
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
            <td className="p-[10px]">
              <span className={`${"rounded-md text-[14px]"} ${"bg-stone-400"}`}>
                Done
              </span>
            </td>
            <td className="p-[10px]">14.02.2024</td>
            <td className="p-[10px]">$3000</td>
          </tr>
          <tr>
            <td className="p-[10px]">
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  width={40}
                  height={40}
                  alt=""
                  className={styles.userImage}
                />
                Benjamin Franklin
              </div>
            </td>
            <td className="p-[10px]">
              <span
                className={`${"rounded-md text-[14px]"} ${"bg-orange-900"}`}
              >
                Cancelled
              </span>
            </td>
            <td className="p-[10px]">14.02.2024</td>
            <td className="p-[10px]">$3000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
