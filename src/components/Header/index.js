import React from "react";

function Nav(props) {
  const {
    contactSelected,
    setContactSelected,
    // projectSelected,
    // setProjectSelected,
  } = props;

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          Chris Bond
        </a>
      </h2>

      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>

          <li className={`mx-2 ${contactSelected && "navActive"}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          <li className="mx-2">
            {/* {`mx-2 ${projectSelected && "navActive"}`}>  */}
            <a href="#projects" onClick={() => setContactSelected(false)}>
              Projects
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
