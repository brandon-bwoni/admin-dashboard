const AddProductPage = () => {
  return (
    <div className="bg-zinc-300 mt-4">
      <form action="" className="flex flex-col justify-between bg-zinc-300">
        <input
          type="text"
          placeholder="title"
          name="title"
          required
          className="p-3 border border-zinc-400 mb-4 rounded-lg bg-zinc-100"
        />
        <select name="cat" id="cat" className="w-[45%] my-4">
          <option value="general">-- Choose a category --</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input
          type="number"
          placeholder="price"
          name="price"
          className="p-3 border border-zinc-400 mb-4 rounded-lg 100"
        />
        <input
          type="number"
          placeholder="stock"
          name="stock"
          className="p-3 border border-zinc-400 mb-4 rounded-lg 100"
        />
        <input
          type="text"
          placeholder="color"
          name="color"
          className="p-3 border border-zinc-400 mb-4 rounded-lg 100"
        />
        <input
          type="text"
          placeholder="size"
          name="size"
          className="p-3 border border-zinc-400 mb-4 rounded-lg 100"
        />
        <textarea
          name="desc"
          id="desc"
          rows={16}
          placeholder="Description"
          className="p-3 border border-zinc-400 mb-4 rounded-lg 100"
        ></textarea>
        <button type="submit" className="mt-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
