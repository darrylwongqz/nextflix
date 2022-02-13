import Head from "next/head";

import useRedirectUser from "../../utils/redirectUser";
import { getMyList } from "../../lib/videos";
import styles from "../../styles/MyList.module.css";
import NavBar from "../../components/NavBar/NavBar";
import SectionCards from "../../components/Card/SectionCards";

export async function getServerSideProps(context) {
  const { userId, token } = await useRedirectUser(context);
  const videos = await getMyList(userId, token);

  return {
    props: {
      myListVideos: videos,
    },
  };
}

const MyList = ({ myListVideos }) => {
  return (
    <div>
      <Head>
        <title>My list</title>
      </Head>
      <main className={styles.main}>
        <NavBar />
        <div className={styles.sectionWrapper}>
          <SectionCards
            title="My List"
            videos={myListVideos}
            size="small"
            shouldWrap
            shouldScale={false}
          />
        </div>
      </main>
    </div>
  );
};

export default MyList;
