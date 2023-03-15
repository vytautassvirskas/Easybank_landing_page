import FeatureCard from "../../molecules/FeatureCard/FeatureCard";
import style from "./SectionFeatures.module.scss";
import IconOnline from "../../../assets/images/icon-online.svg";
import IconBudgeting from "../../../assets/images/icon-budgeting.svg";
import IconOnboarding from "../../../assets/images/icon-onboarding.svg";
import IconApi from "../../../assets/images/icon-api.svg";

export interface CardData {
  img: string;
  title: string;
  text: string;
}

const SectionFeatures = (): JSX.Element => {
  const cardsData: CardData[] = [
    {
      img: IconOnline,
      title: "Online Banking",
      text: `Our modern web and mobile applications allow you to keep track of your 
      finances wherever you are in the world.`,
    },
    {
      img: IconBudgeting,
      title: "Simple Budgeting",
      text: `See exactly where your money goes each month. 
      Receive notifications when you’re close to hitting your limits.`,
    },
    {
      img: IconOnboarding,
      title: "Fast Onboarding",
      text: `We don’t do branches. Open your account in minutes online 
      and start taking control of your finances right away.`,
    },
    {
      img: IconApi,
      title: "Open API",
      text: `Manage your savings, investments, pension, and much more from one account. 
      Tracking your money has never been easier.`,
    },
  ];
  return (
    <section className={style.section}>
      <div className={style["section__section-wrapper"]}>
        <h2 className={style["section__heading"]}>Why choose Easybank?</h2>
        <p className={style["section__text"]}>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
        <div className={style["section__features-wrapper"]}>
          {cardsData.map((card) => (
            <FeatureCard key={card.title} data={card}></FeatureCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionFeatures;
