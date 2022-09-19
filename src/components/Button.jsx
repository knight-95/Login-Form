import styled from "styled-components";

export default function Button({ content,onClick }) { // onClick here is added by me
  return <StyledButton onClick={onClick}>  {content}  </StyledButton>;
}
// .btn-grad {
//     background-image: linear-gradient(to right, #E55D87 0%, #5FC3E4  51%, #E55D87  100%);
//     margin: 10px;
//     padding: 15px 45px;
//     text-align: center;
//     text-transform: uppercase;
//     transition: 0.5s;
//     background-size: 200% auto;
//     color: white;            
//     box-shadow: 0 0 20px #eee;
//     border-radius: 10px;
//     display: block;
//   }

//   .btn-grad:hover {
//     background-position: right center; /* change the direction of the change here */
//     color: #fff;
//     text-decoration: none;
//   }
 
const StyledButton = styled.button`
  background: linear-gradient(to right, #E55D87 0%, #5FC3E4  51%, #E55D87  100%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 35%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
`;
