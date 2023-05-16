const Header = () => {
  return (
    <header>
      <h1>
        <span className="material-symbols-outlined">mail</span>
        {"\u00A0AlphaMail\u00A0"}
        <span
          className="material-symbols-outlined"
          style={{ fontSize: "2rem" }}
        >
          schedule_send
        </span>
      </h1>
    </header>
  );
};

export default Header;
