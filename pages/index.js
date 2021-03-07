import Head from "next/head";
import Link from "next/link";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninka List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}> Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam
          dapibus lacus, vel porta mi consequat sit amet. Pellentesque accumsan
          fringilla tortor, non euismod elit interdum a. Integer sollicitudin
          efficitur lorem, eget ornare felis sodales eu. Donec quis lorem
          pulvinar, cursus lectus ut, vehicula mi. Mauris nec mi tellus. Mauris
          sit amet dictum arcu. Aenean aliquam, augue ac ultrices sollicitudin,
          odio metus feugiat lectus, ac suscipit lectus dui at turpis. Aenean
          vestibulum convallis lorem, at luctus metus consequat quis. Nunc lacus
          urna, dapibus eget mollis sit amet, rutrum nec dui. Phasellus
          volutpat, ante eget elementum efficitur, ante lacus viverra massa,
          sodales eleifend ligula arcu eu odio.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam
          dapibus lacus, vel porta mi consequat sit amet. Pellentesque accumsan
          fringilla tortor, non euismod elit interdum a. Integer sollicitudin
          efficitur lorem, eget ornare felis sodales eu. Donec quis lorem
          pulvinar, cursus lectus ut, vehicula mi. Mauris nec mi tellus. Mauris
          sit amet dictum arcu. Aenean aliquam, augue ac ultrices sollicitudin,
          odio metus feugiat lectus, ac suscipit lectus dui at turpis. Aenean
          vestibulum convallis lorem, at luctus metus consequat quis. Nunc lacus
          urna, dapibus eget mollis sit amet, rutrum nec dui. Phasellus
          volutpat, ante eget elementum efficitur, ante lacus viverra massa,
          sodales eleifend ligula arcu eu odio.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}> See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
