import Navbar from "./Navbar";


function Header() {
  return (
    <div className="project-header">
      <Navbar />
      <img
        src="https://www.innovationnewsnetwork.com/wp-content/uploads/2022/12/iStock-MF3d-1361008761-1536x864.jpg"
        alt="Computer Technology Image"
        className="w-100"
        style={{ height: "430px" }}
      />
    </div>
  );
}
export default Header;
