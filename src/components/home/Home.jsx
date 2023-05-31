import React from 'react'
import styled from 'styled-components';
import Section from '../section/Section';
const Home = () => {
  return (
    <Container>
        <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        />
        {/*    Model y   */}
         <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        />

        {/* Model 3 */}
         <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        />

        
        {/* Model x */}
        <Section
        title="Model x"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        />

         
        {/* House */}
        <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back gurantee"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        />

         {/* Accesores */}
         <Section
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftBtnText="Shop Now"
        />
    </Container>
  )
}

//  container
const Container = styled.div`

height: 100vh;

`;

export default Home