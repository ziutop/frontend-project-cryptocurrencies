import styled from "styled-components";

export const HeaderStyle = styled.header`
  background-color: ${props=> props.theme.colors.primary};
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 2px ${props=> props.theme.colors.borderHeader} solid;
  position: fixed;
  z-index: 1000;
  user-select:none
`;

export const HeaderItemsStyle = styled.div`
  height: inherit;
  width: auto;
  max-width: 400px;
  user-select: none;
  ul {
    list-style: none;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
  }

  li {
    padding: 8px;
    margin-right: 8px;
    margin-left: 8px;
    font-size: 18px;
    letter-spacing: 2px;
    cursor: pointer;
    color: ${props=> props.theme.colors.text};
    font-weight: 500;

    &:hover {
      color: ${props=> props.theme.colors.textHover};
      transition: all ease-in 0.2s;
    }
  }

  a {
    width: 100%;
    height: 100%;
    text-decoration: none;

    &:visited,
    &:link {
      color: inherit;
    }
  }
  .btnSignIn {
    padding: 10px;
    margin-left: 50px;
    border: 2px solid ${props=> props.theme.colors.btnHeaderBorder};
    border-radius: 20px;
    background-color: ${props=> props.theme.colors.btnHeaderSignIn};
    color: #fff;

    &:hover {
      transition: all ease-in 0.2s;
      transform: scale(1.1);
      color: #fff;
      box-shadow: -1px -1px 18px 1px ${props=> props.theme.colors.btnHeaderSignInHover};
    }
    &:active {
      transition: all ease-in 0.1s;
      transform: scale(0.99);
      box-shadow: -1px -1px 18px 1px ${props=> props.theme.colors.btnHeaderSignInHover};
    }
  }
`;

export const SwitchThemeStyle = styled.div`

position:absolute;
left: 20px;
height:60%;
background-color: transparent;
width: 40px;
display : flex;
align-items:center;
justify-content:center;
cursor: pointer;
border-radius: 50px;

&:hover{
  background-color: rgba(192,192,192,0.3);
  transition: all ease-in-out 0.2s
}
`