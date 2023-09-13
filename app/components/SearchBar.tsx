type SearchBarProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchBar = ({ handleChange }: SearchBarProps) => {
  return (
    <div className="relative">
      <input
        type="text"
        onChange={handleChange}
        placeholder="Search loyalty cards..."
        className="w-full px-4 py-2 pl-10 pr-8 border border-gray-300 focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};
