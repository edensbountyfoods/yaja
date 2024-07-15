import React from "react";
import styles from "./about.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/ui/section_heading/section_heading";

const AboutScreen = () => {
  return (
    <div className={styles.AboutScreen}>
      <SectionHeading variant={1} heading="About Yaja" />

      <CustomContainer>
        <div>
          <div>
            <div>
              <h1>Yaja: A Brand Story</h1>
              <p>
                In the bustling aisles of a local supermarket, a moment of
                realization sparked the inception of Yaja. Ajay, a young and
                passionate food technologist, observed a middle-class family
                yearning for a healthy beverage but deterred by the high price.
                This heartfelt moment ignited a mission: to create a unique,
                affordable, and nutritious drink for everyone, thus the birth of
                Yaja.
              </p>
            </div>
            <div></div>
          </div>
          <div>
            <div>
              <h1>Our Vision:</h1>
              <p>
                Yaja is not just a beverage; it&apos;s an experience. Crafted
                with the perfect blend of water, sugar, fruit pulp, basil seeds,
                and fermented coconut jelly (nata de coco), Yaja promises a
                delightful &quot;feel and drink&quot; factor that appeals to all
                age groups. We believe in providing a fun and enjoyable drinking
                experience that also supports your well-being.
              </p>
            </div>
            <div></div>
          </div>
          <div>
            <div>
              <h1>Health and Wellness:</h1>
              <p>
                At Yaja, we harness the natural benefits of basil seeds and
                fermented coconut jelly. Rich in essential nutrients, these
                ingredients contribute to improved digestion, hydration, and
                overall health. Each sip of Yaja is a step towards a healthier
                lifestyle, made possible through the wisdom and expertise of our
                dedicated team of food technologists.
              </p>
            </div>
            <div></div>
          </div>
          <div>
            <div>
              <h1>Commitment to Quality and Simplicity:</h1>
              <p>
                Our production process is straightforward yet meticulous,
                ensuring that the essential nutrients are preserved in every
                pouch. We avoid artificial colors and flavors, embracing the
                natural goodness of our ingredients. Yaja is crafted with the
                utmost love and care, a testament to our commitment to your
                health and satisfaction.
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </CustomContainer>
    </div>
  );
};

export default AboutScreen;
