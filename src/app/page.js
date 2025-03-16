"use client"; // Add this directive

import Image from "next/image";
import styles from "./page.module.css";
import Card1 from "./cards-2.js";
import Card2 from "./cards-1.js";
import Card3 from "./cards-3.js";
import Card4 from "./cards-4.js";
import Head from "next/head"; // Import Head component
import { useEffect, useState } from "react"; // Import useEffect and useState
import { body } from "next/document"; // Import body
import Cr1 from "./cr1.js";

export default function Home(){
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Big+Shoulders:opsz,wght@10..72,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Tektur:wght@400..900&display=swap" rel="stylesheet" />
      </Head>
      <header className={styles.head}>
        <div style={{width: "100%", height: "200px", display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "40px", overflow: "hidden", position: "fixed",zIndex: "100", backgroundColor: "#000000", opacity:"98%"}}>
          <div style={{width: "100%", marginTop: "60px", height: "200px", display: "flex", justifyContent: "center", alignItems: "center"}}>
          <Image
            src="/XNUlogo.png"
            alt="Your logo"
            width={200}
            height={200}
            />
          </div>
        </div>
      </header>
        <div className={styles.cardcontainer2}>
            <Cr1/>
        </div>
      <main>
      </main>
      <footer>
      </footer>
    </div>
  );
}
