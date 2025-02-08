import Pagination from "@/components/dashboard/Pagination";
import Search from "@/components/dashboard/Search";
import Image from "next/image";
import Link from "next/link";

const ProductsPage = () => {
  return (
    <div className="bg-zinc-300 p-5 rounded-xl mt-5">
      <div className="flex justify-between items-center px-2 pt-1 pb-2">
        <Search placeholder="Search for a product.." />
        <Link href="/dashboard/products/add-product">
          <button className="py-2 px-3 text-sm hover:bg-zinc-500 hover:text-white font-medium bg-zinc-500 text-zinc-100 border-none rounded-md cursor-pointer">
            Add New
          </button>
        </Link>
      </div>
      <table className="w-[100%]">
        <thead>
          <tr className="text-zinc-600 font-semibold">
            <td className="px-4 py-3">Title</td>
            <td className="px-4 py-3">Description</td>
            <td className="px-4 py-3">Price</td>
            <td className="px-4 py-3">Created At</td>
            <td className="px-4 py-3">Stock</td>
            <td className="px-10 py-2">Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex gap-5 items-center mx-3">
                <Image
                  src="/noproduct.jpg"
                  alt="user-image"
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                Samsung
              </div>
            </td>
            <td className="px-4">Best phone</td>
            <td className="px-4">$999</td>
            <td className="px-4">13.08.2023</td>
            <td className="px-6">72</td>
            <td>
              <div className="flex gap-3">
                <Link href="/dashboard/products/id">
                  <button
                    className={`${"px-4 py-2 text-sm font-medium rounded-md border-none cursor-pointer"} ${"hover:bg-teal-600 hover:text-gray-100 bg-teal-600/70"}`}
                  >
                    View
                  </button>
                </Link>
                <Link href="/">
                  <button
                    className={`${"px-3 py-2 text-sm rounded-md font-medium border-none cursor-pointer"} ${"hover:bg-red-600 hover:text-gray-100 bg-red-600/70"}`}
                  >
                    Delete
                  </button>
                </Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default ProductsPage;
