import "../css/components/MainNavbar.css";

function MainNavbar() {
  return (
    <header className="navHeader">
      <div className="logo">Tea Time</div>
      <nav>
        <ul>
          <li>Home</li>
          <li>List 1</li>
          <li>List 2</li>
          <li>List 3</li>
          <li>List 4</li>
          <li>List 5</li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavbar;
