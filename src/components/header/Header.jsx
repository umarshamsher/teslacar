import React, { useState } from 'react'
import styled from 'styled-components';


const Header = () => {
    const [burgerStatus, setBurgerStatus]= useState(false);
  return (

    <Container>
     <a>
        <img src="/images/logo.svg" alt="header_logo" />
     </a>
     <Menu>
        <p>
            <a href="#">Model S</a>
        </p>
        <p>
            <a href="#">Model 3</a>
        </p>
        <p>
            <a href="#">Model X</a>
        </p>
        <p>
            <a href="#">Model Y</a>
        </p>

     </Menu>
     <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu src='/images/menu.png' onClick={()=> setBurgerStatus(true) }/>
       
     </RightMenu>
     <BurgerNav show={burgerStatus}>
        <CloseWrapper>
            <CloseMenu src="/images/cross.png" onClick={()=>setBurgerStatus(false)}>

            </CloseMenu>
        </CloseWrapper>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-in</a></li>
        <li><a href="#">Cybertruck</a></li>
        <li><a href="#">Roadaster</a></li>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Existing Inventory</a></li>
     </BurgerNav>
    </Container>
  )
}

//  container
const Container = styled.div`
min-height: 60px;
position: fixed;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 20px;
top: 0;
left:0;
right:0;
z-index: 1;
`;

//  Menu 

const Menu = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex:1 ;

p {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0  10px;
    flex-wrap: nowrap;
}

@media (max-width: 768px) {
    
    display: none;
}
`;

//  RightMenu

const RightMenu = styled.div`
   display: flex;
   align-items: center;
   a {font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
}
`;

// CustomMenu

const CustomMenu = styled.img`
width:40px;
cursor: pointer;
`;

// burger nav

const BurgerNav = styled.div`
position: fixed;
top: 0 ;
bottom: 0;
right: 0;
background: var(--white-color);
width: 300px;
list-style: none;
padding: 20px;
display: flex;
flex-direction: column;
text-align: start;
transition: all 0.4s;
transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};

li {
    padding: 15px 0;
    border-bottom: 1px solid var( --Menubar-Bordercolor);
      
    a {
        font-weight: 600;
    }
}
`;

//  close menu

const CloseMenu = styled(CustomMenu)`
cursor: pointer;
`;

//  wraper close

const CloseWrapper = styled.div`
display: flex;
justify-content:flex-end;
`;

export default Header