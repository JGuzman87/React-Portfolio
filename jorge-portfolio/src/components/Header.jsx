import Navbar from "./Navbar";


function Header() {
  return (
    <div className="project-header">
      <Navbar />
      <img
        src="https://camo.githubusercontent.com/ce44c6d060a1a207ba496dae4c758ba0595f29f108de91ad3fddc6e185b67645/68747470733a2f2f736368616566666572732d63646e2e73332e616d617a6f6e6177732e636f6d2f696d616765732f64656661756c742d736f757263652f736368616566666572732d63646e2d696d616765732f64656661756c742d696d616765732f6368617274732f61646f626573746f636b5f3139303436333230352e6a7065673f73667672736e3d66633230646430365f342e6a7067"
        alt="Computer Technology Image"
        className="w-100"
        style={{ height: "300px" }}
      />
    </div>
  );
}
export default Header;
