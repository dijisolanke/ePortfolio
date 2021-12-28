import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import SiteLayout from '../components/siteLayout';

export default function Home() {
  return (
    <>
      <section className="img-wrap page-flow">
        <img className="rotate profile-pic" src="images/plain2.jpg" alt="Black and white portrait of a man" />
      </section>
    </>
  );
}
