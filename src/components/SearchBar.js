import "./SearchBar.css";

const SearchBar = ({ inputValue, setInputValue }) => {
  return (
    <div className="form">
      <form>
        <input
          type="text"
          placeholder="Vyhledat..."
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          style={{ display: "block", margin: "0 auto" }}
        />
      </form>
    </div>
  );
};

export default SearchBar;
