import Error404 from "../images/error-404.jpg";
import Image from "next/image";

export default function Error() {
  return <Image src={Error404} alt={"Ошибка 404"} layout="fill"/>;
}
