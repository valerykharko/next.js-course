import Link from "next/link";
import styles from "../styles/users.module.css";
import MainContainer from "../components/MainContainer";

const Users = ({ users }) => {
  return (
    <MainContainer keywords={"list of users"}>
      <h1 className={styles.heading}>Список пользователей</h1>
      <ul>
        {users.map((user) => (
          <li className={styles.users_block} key={user.id}>
            <Link href={`/users/${user.id}`}>
              <a className={styles.user}>
                {user.id}) {user.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </MainContainer>
  );
};

export default Users;

export async function getStaticProps(context) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await response.json();

  return {
    props: { users }, // will be passed to the page component as props
  };
}
