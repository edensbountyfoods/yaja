import React from "react";
import styles from "./about.module.scss";
import SectionHeading from "@/components/ui/section_heading/section_heading";
import { Image } from "react-bootstrap";
import CustomContainer from "@/components/ui/custom_container/custom_container";

const AboutSection = () => {
  return (
    <section className={styles.AboutSection}>
      <SectionHeading heading="Meet The CEO" variant={2} />
      <div className={styles.clouds} />
      <CustomContainer>
        <div className={styles.cont}>
          <div className={styles.img}>
            <Image src="/assets/ceo.jpeg" fluid alt="ceo" />
          </div>

          <div className={styles.text}>
            <p className={styles.p}>
              Dear Valued Consumers,
              <br />
              Yaja was born from an observation at a local supermarket, where I
              saw a middle-class family struggling to afford a healthy beverage.
              This ignited my passion to create Yaja, a brand offering drinks
              made with water, sugar, fruit pulp, basil seeds, and fermented
              coconut jelly (nata de coco). Committed to avoiding artificial
              colors and flavors, we ensure our beverages are pure, natural, and
              beneficial. Our mission is to bring joy, health, and affordability
              to everyone by minimizing profits to maximize the availability of
              high-quality, nutritious beverages.
            </p>
            <br />
            <p>
              Our production process is designed to retain essential nutrients
              in every pouch, prioritizing simplicity and authenticity. Crafted
              by a dedicated team of food technologists, our stand-up pouches
              reduce plastic usage by 75%, reflecting our commitment to
              sustainability. We look forward to introducing innovative products
              that will delight your taste buds and support your health. Thank
              you for choosing Yaja; your trust and support inspire us to create
              beverages that bring joy and wellness to your life.
            </p>

            <br />
            <p>With heartfelt gratitude,</p>
            <h2>Ajay</h2>
            <small>CEO, Yaja</small>
          </div>
        </div>
        <Image src="/assets/svg/leaf.svg" alt="leaf" className={styles.leaf1} />
        <Image src="/assets/svg/leaf.svg" alt="leaf" className={styles.leaf2} />
      </CustomContainer>
      {/* <Image src={"assets/svg/cloud.svg"} alt='cloud'/> */}
    </section>
  );
};

export default AboutSection;
