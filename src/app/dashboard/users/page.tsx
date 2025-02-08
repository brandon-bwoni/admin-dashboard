// import { fetchUsers } from "@/app/lib/data";
import Pagination from "@/components/dashboard/Pagination";
import Search from "@/components/dashboard/Search";
import Image from "next/image";
import Link from "next/link";

const UsersPage = async ({ placeholder }) => {
  // const users = await fetchUsers();
  // console.log(users);
  return (
    <div className="bg-zinc-300 p-5 rounded-lg mt-5">
      <div className="flex justify-between items-center">
        <Search placeholder="Search for a user.." />
        <Link href="/dashboard/users/add-user">
          <button className="p-2 bg-zinc-600 hover:bg-zinc-500 hover:text-white font-medium text-zinc-100 border-none rounded-md cursor-pointer">
            Add New
          </button>
        </Link>
      </div>
      <table className="w-full my-4">
        <thead>
          <tr className="text-zinc-700 font-semibold">
            <td className="px-6">Name</td>
            <td className="px-6">Email</td>
            <td className="px-6">Role</td>
            <td className="px-6">Status</td>
            <td className="px-4">Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex items-center gap-3">
                <Image
                  src="/noavatar.png"
                  alt="user-image"
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                Benjamin Franklin
              </div>
            </td>
            <td className="px-2">benjifrank@email.com</td>
            <td className="px-2">13.08.2023</td>
            <td>
              <div className="flex gap-2">
                <Link href="/dashboard/users/id">
                  <button
                    className={`${"py-2 px-3 rounded-md text-zinc-700 font-medium border-none cursor-pointer"} ${"bg-teal-600/70 text-gray-100 hover:bg-teal-600 hover:text-white"}`}
                  >
                    View
                  </button>
                </Link>
                <Link href="/">
                  <button
                    className={`${"py-2 px-3 rounded-md font-medium text-zinc-700 border-none cursor-pointer"} ${"bg-red-600/50 hover:bg-red-600 hover:text-white"}`}
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

export default UsersPage;
