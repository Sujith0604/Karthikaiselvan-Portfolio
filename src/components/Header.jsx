const Header = () => {
  return (
    <header className=" h-[100px] flex items-center justify-between">
      <div>Sujith Karthikaiselvan</div>
      <nav>
        <ul className=" flex items-center justify-center gap-5">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div></div>
    </header>
  );
};

export default Header;
