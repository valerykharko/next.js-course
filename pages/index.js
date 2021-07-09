import styles from "../styles/index.module.css";
import MainContainer from "../components/MainContainer";

const Index = () => {
  return (
    <MainContainer keywords={"main page"}>
      <div>
        <h1 className={styles.text}>Главная страница</h1>
        <h2>Информация...</h2>
      </div>
    </MainContainer>
  );
};

export default Index;
