import Navbar from "../Navbar";

const BaseLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default BaseLayout;
