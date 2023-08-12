'use client';

import About from '@/sections/about'
import Contact from '@/sections/contact/contact';
import Featured from '@/sections/featured/featured';
import Hero from '@/sections/hero/hero';
import Projects from '@/sections/projects/projects';
import styled from 'styled-components';

const StyledMainContainer = styled.section`
  width: 100%;
  max-width: 900px;
  counter-reset: section;
  section {
    margin: 0 auto;
    padding: 100px 0;
  }
`;
const Page = () => {


  return (
    <>
      <StyledMainContainer className="fillHeight">


        <Hero />
        <About />
        <Featured />
        <Projects />
        <Contact />

      </StyledMainContainer>
    </>
  );
};

export default Page;