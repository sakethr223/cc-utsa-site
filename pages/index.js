import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>Console Cowboys</title>
        <meta
          name="description"
          content="Console cowboys. UTSA. Student organization. university of texas san antonio. School club. Console. Hacking. Cybersecurity."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />

      <Benefits data={benefitOne} />

      <SectionTitle title="Our Goals for students:">
        In our club we are looking for mentors, guest speakers, job
        opportunities for club members, collaborations, even scholarships for
        students. The officers of the Console Cowboy officer have contacted
        different Organizations and have been able to successfully acquire
        internship opportunities for Students and club members.
      </SectionTitle>

      <SectionTitle
        pretitle="FAQ"
        title="Frequently Asked Questions"
      ></SectionTitle>

      <Faq />
      <Cta />
      <Footer />
    </>
  );
};

export default Home;
