import styled from "styled-components";
import MainOffers from "./MainOffers";
import Categories from "./Categories";
import Trending from "./Trending";
import SpecialOffers from "./SpecialOffers";
import TimedOffers from "./TimedOffers";
import SignUpForm from "./SignUpForm";
import Articles from "./Articles";
import MobileApp from "./MobileApp";
import Features from "./Features";

export default function Home() {
  return (
    <Container>
      <MainOffers />
      <Categories />
      <Trending />
      <SpecialOffers />
      <TimedOffers />
      <SignUpForm />
      <Articles />
      <MobileApp />
      <Features />
    </Container>
  );
}

const Container = styled.div``;
