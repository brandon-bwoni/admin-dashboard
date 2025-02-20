import Image from "next/image";

const SingleUserPage = () => {
  return (
    <div className="flex gap-10 mt-5">
      <div className="flex flex-col w-[30%] h-72 bg-zinc-300 p-5 rounded-xl font-bold text-black max-h-max text-lg shadow-lg">
        <div className="w-[100%] h-[300px] relative rounded-lg overflow-hidden mb-5">
          <Image src="/noavatar.png" fill alt="" />
        </div>
        Benjamin Franklin
      </div>
      <div className="flex w-[70%] bg-zinc-300 p-5 rounded-lg shadow-lg">
        <form className="w-full flex text-black flex-col">
          <label className="mb-1 font-semibold">Username</label>
          <input
            className="p-5 border-2 border-zinc-400 rounded-md bg-zinc-300 text-black mx-3 mb-3"
            type="text"
            name="username"
            placeholder="Ben Frank"
          />
          <label className="mb-1 font-semibold">Email</label>
          <input
            className="p-5 border-2 border-zinc-400 rounded-md bg-zinc-300 text-black mx-3 mb-3"
            type="email"
            name="email"
            placeholder="benfrank@email.com"
          />
          <label className="mb-1 font-semibold">Password</label>
          <input
            className="p-5 border-2 border-zinc-400 rounded-md bg-zinc-300 text-black mx-3 mb-3"
            type="password"
            name="password"
            placeholder="type password"
          />
          <label className="mb-1 font-semibold">Phone</label>
          <input
            className="p-5 border-2 border-zinc-400 rounded-md bg-zinc-300 text-black mx-3 mb-3"
            type="phone"
            name="phone"
            placeholder="+123456789"
          />
          <label className="mb-1 font-semibold">Address</label>
          <textarea
            className="p-5 border-2 border-zinc-400 rounded-md bg-zinc-300 text-black mx-3 mb-3"
            type="text"
            name="address"
            placeholder="New York"
          />
          <label className="mb-1 font-semibold">Is Admin</label>
          <select
            className="p-5 border-2 border-zinc-400 rounded-md bg-zinc-300 text-black mx-3 mb-3"
            name="isAdmin"
            id="isAdmin"
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label className="mb-1 font-semibold">Is Active</label>
          <select
            className="p-5 border-2 border-zinc-400 rounded-md bg-zinc-300 text-black mx-3 mb-3"
            name="isActive"
            id="isActive"
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button className="w-full p-5 bg-teal-500 text-gray-100 border-none rounded-md mt-5">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
