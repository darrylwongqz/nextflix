import Link from "next/link";
import React from "react";
import Card from "./Card";
import clsx from "classnames";
import styles from "./SectionCards.module.css";

const SectionCards = (props) => {
  const { title, videos = [], size, shouldWrap = false, shouldScale } = props;

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={clsx(styles.cardWrapper, shouldWrap && styles.wrap)}>
        {videos.map((video, index) => {
          return (
            <div key={index}>
              <Link href={`/video/${video.id}`}>
                <a>
                  <Card
                    id={index}
                    imgUrl={video.imgUrl}
                    size={size}
                    shouldScale={shouldScale}
                  />
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SectionCards;
