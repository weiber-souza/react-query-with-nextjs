import { NavBar } from "../Navbar";

export const Layout = (children:any) => {
  return (
    <>
      <NavBar />
      <div>
      {children}
      </div>
    </>
  );
};
