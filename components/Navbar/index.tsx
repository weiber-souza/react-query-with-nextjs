import { useRouter } from "next/router";

export const NavBar = () => {
    const router = useRouter()

  return (
    <div className="navbar">
      <ul className="horizontal-list">
        <li onClick={() => router.push("/")}>
          <h5>Home</h5>
        </li>
        <li onClick={() => router.push("/pagination-client-side")}>
          <h5>Cliet side pagination</h5>
        </li>
        <li onClick={() => router.push("/pagination-server-side/1")}>
          <h5>Server side pagination</h5>
        </li>
        <li onClick={() => router.push("/infinite-scroll")}>
          <h5>Infinite Scroll</h5>
        </li>
      </ul>
    </div>
  );
};
