import styled from "styled-components"
import ZoomInIcon from '@mui/icons-material/ZoomIn';

const NavContainer=styled.div`
background:#7D41E1;
margin:5em;
color:white;
padding:2em;
border-radius:20px;


`
const Logo=styled.div`
text-align:center;
font-size:4em;

`
const NavInput=styled.input`
border:none;
outline:none;
passing:2em;
`
const NavIcon=styled.div`
display:flex;
align-items:center;
padding:2em;
border-radius:5px ;
background:white;
width: 60%;
margin:0 auto;
margin-top:-6em;
`

const NavList=styled.div``

const NavUl=styled.ul`
display:flex;
justify-content:center;
gap:12em;
`

const NavLi=styled.li`
list-style-type:none;
`
const NavP=styled.h1``

const Nav = ()=> {
    return(
        <>
        
        <NavContainer>
        <Logo>Blog</Logo>
        </NavContainer>

        <NavIcon>
        <ZoomInIcon/>
        <NavInput type="text" placeholder="Search"/>
        </NavIcon>

        <NavUl>
        <NavLi>
Home
       </NavLi>

       <NavLi>
Sports
       </NavLi>
       <NavLi>
Transport
</NavLi>
<NavLi>
Politics
</NavLi>
<NavLi>
Food
</NavLi>

        </NavUl> 


     </>
    
    )
}
export default Nav;