import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  margin-left: 4rem;
  
`;

export const Container = styled.div`
    display: flex; 
    justify-content: space-evenly;
`;

export const LogoContainer = styled.div`
 margin-top: 28px;
 
 img {
     border-radius: 50%;
 }
 p {
    font-size: 14px;
    color: #6B8795;
    text-align: center;
    
 }
  button {
     position: absolute;
     width: 37px;
     height: 37px;
     border: none;
     cursor: pointer;
     background:url("../../../assets/icons/circledPlus.svg") 0px 0px no-repeat
 }
`;

export const ContainerForImg = styled.div`
 position: relative;
`;

export const Form = styled.div`
 margin-top: 28px;

 
 .OutlinedInput {
    width: 557px;
    height: 37px!important;
    font-size: 14px;
    font-family: Montserrat;
    color: #C6D8E1;
    font-weight: 400;
    margin-bottom: 30px;

 }
 fieldset{
 border-color: #EFF1F5;
 }
 #outlined-select-currency {
      font-weight: 400;
      font-size: 14px;
      color: #C6D8E1;
      font-family: Montserrat;
      padding: 8px;
      border-color: #EFF1F5!important;
      
 }
 
 svg {
 color: #C6D8E1;;
 }
 .mt {
 margin-top: 30px;
 } 
 .ml {
  margin-left: 7rem;
 }
`;

export const Label = styled.div`
 margin-bottom: 10px;
 color: #6B8795;
 font-size: 12px;
 font-weight: normal;
`;

export const ContainerForContacts = styled.div`
   
 #outlined-adornment-weight { 
    width: 265px;
    padding: 8px;
    font-size: 14px;
    font-family: Montserrat;
    color: #C6D8E1;
 }
 
 
 div {
    display: flex;
 }
 
  button {
     margin-left: 20px;
     width: 37px;
     height: 37px;
     border: none;
     cursor: pointer;
     background:url("../../../assets/icons/circledPlus.svg") 0px 0px no-repeat
 }

`;

export const Flex = styled.div`
   display: flex; 
   div {
   display: block;
   }
   
`;

export const SiteAdress = styled.div`
   margin-left: 24px;
`;

export const SaveAndCancelBtn = styled.div`
    
    button {
    margin-bottom: 4rem;
    margin-top: 18px;
    font-family: Montserrat;
    cursor: pointer;
    font-weight: 200;
    font-size: 14px;
    border-radius: 4px;
    }
  
   .save {
    padding: 10px;
    color: #FFFFFF;
    background: #1EA133;
    width: 151px;
    border: none;
   }
   
   .cancel {
   padding: 8px;
   color: #1EA133;
   border: 1px solid #1EA133;
   width: 108px;
   background: none;
   margin-left: 22px;
   
   }
`;





