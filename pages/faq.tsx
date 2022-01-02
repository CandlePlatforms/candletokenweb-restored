import PageLayout from "components/layouts/page";
import IconHero from "components/layouts/icon-hero";
import { FiHelpCircle } from "react-icons/fi";
import FaqsSection from "components/sections/faqs";
import FaqHeroSvg from "components/svgs/faq-hero";
import { HeadProps } from "components/primitives/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const headProps: HeadProps = {
  meta: {
    title: "FAQ",
    description:
      "Candle.org is a primary online resource for participants and users of the Candle network.",
    url: "https://candelabs.org/participants",
    siteName: "Candle.org",
    image: "https://candelabs.org/go.png",
    twitterUsername: "@Candle_Labs",
  },
};

const ParticipantsPage = () => (
  <PageLayout headProps={headProps} navProps={{ background: "dark" }}>
    <IconHero
      icon={<FiHelpCircle />}
      title="FAQ"
      subtitle="Below is a list of topics with the most frequently asked questions about the Candle network."
      illustration={<FaqHeroSvg />}
      background="dark"
      withAnimation
    />
    <FaqsSection />
  </PageLayout>
);

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "faq"])),
    },
    revalidate: 1,
  };
}

export default ParticipantsPage;
