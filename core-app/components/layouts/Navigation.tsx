import Link from "next/link";
import styles from "./Navigation.module.css";

export interface INavigation {}

const Navigation: React.FC<INavigation> = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/app-1">
        <a>App 1</a>
      </Link>
      <Link href="/app-2">
        <a>App 2</a>
      </Link>
    </nav>
  );
};

export default Navigation;
