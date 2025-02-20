import Image from "next/image";

const SingleProductPage = () => {
  return (
    <div className="flex gap-10 mt-5">
      <div className="flex flex-col w-[30%] h-72 bg-zinc-300 p-5 rounded-xl font-bold text-black max-h-max text-lg shadow-lg ">
        <div className=" w-[100%] h-[300px] relative rounded-lg overflow-hidden mb-5">
          <Image src="/noavatar.png" fill alt="" />
        </div>
        Samsung
      </div>
      <div className="w-[70%] bg-zinc-300 p-5 rounded-lg shadow-lg">
        <form className="w-full flex text-black flex-col">
          <label className="mb-1 font-semibold">Title</label>
          <input
            className="p-5 border-2 border-zinc-400 rounded-md bg-zinc-300 text-black mx-3 mb-3"
            type="text"
            name="title"
            placeholder="Ben Frank"
          />
          <label className="mb-1 font-semibold">Price</label>
          <input
            className="p-5 border-2 border-zinc-400 rounded-md bg-zinc-300 text-black mx-3 mb-3"
            type="number"
            name="price"
            placeholder="0"
          />
          <label className="mb-1 font-semibold">Stock</label>
          <input
            className="p-5 border-2 border-zinc-400 rounded-md bg-zinc-300 text-black mx-3 mb-3"
            type="number"
            name="stock"
            placeholder="o"
          />
          <label className="mb-1 font-semibold">Color</label>
          <input
            className="p-5 border-2 border-zinc-400 rounded-md bg-zinc-300 text-black mx-3 mb-3"
            type="text"
            name="color"
            placeholder="white"
          />
          <label className="mb-1 font-semibold">Address</label>
          <textarea
            className="p-5 border-2 border-zinc-400 rounded-md bg-zinc-300 text-black mx-3 mb-3"
            type="text"
            name="address"
            placeholder="New York"
          />
          <label className="mb-1 font-semibold">Category</label>
          <select
            className="p-5 border-2 border-zinc-400 rounded-md bg-zinc-300 text-black mx-3 mb-3"
            name="cat"
            id="cat"
          >
            <option value="kitchen">Kitchen</option>
            <option value="computer">Computer</option>
          </select>
          <label className="mb-1 font-semibold">Description</label>
          <textarea
            className="p-5 border-2 border-zinc-400 rounded-md bg-zinc-300 text-black mx-3 mb-3"
            name="desc"
            id="desc"
            rows="10"
            placeholder="Product decription"
          />
          <button className="w-full p-5 bg-teal-500/70 text-gray-100 border-none rounded-md mt-5 hover:bg-teal-500 hover:shadow-lg">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
