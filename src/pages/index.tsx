import Head from "next/head";
import { Component } from 'react'
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { attributes, react as HomeContent } from '../../content/home.md'
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  let { title, cats } = attributes
  return (
    <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <article>
          <h1>{title}</h1>
          <HomeContent />
          {/* <ul>
            {cats.map((cat, k) => (
              <li key={k}>
                <h2>{cat.name}</h2>
                <p>{cat.description}</p>
              </li>
            ))}
          </ul> */}
        </article>
      </>
  );
}
