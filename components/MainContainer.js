import styles from "../styles/index.module.css";
import A from "./A";
import Head from "next/head";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={"Разработка на Next.js, " + keywords} />
        <title>Next.js</title>
      </Head>
      <div className={styles.navBar}>
        <A href="/" text="Главная" />
        <A href="/users" text="Пользователи" />
      </div>
      <div>
        {children}
      </div>
    </>
  );
};

export default MainContainer;
