import styled from "styled-components";
import Eliud from "../Images/Eliud.webp";
import constra from "../Images/constra.jpg";
import prezo from "../Images/prezo.jpg";
import food2 from "../Images/food2.jpg";
const NavHeading=styled.p`
margin:0 auto;
`
const NavNav=styled.h1``
const Container=styled.div`
width:90%;
margin: 0 auto;
margin-top:3em;
display: flex;
gap: 1em;
`
const Div=styled.div`
padding: 2em;`

const Article=styled.div`
width: 50%;
font-size: 1.5rem;
`

const Img=styled.img`
height: 100%;
width: 100%;
object-fit: cover;
object-position: center center;
border-radius:5px;
`

const TopImage=styled.div`
height: 500px;
width: 50%;
`

const ContainerImage=styled.div`
height: 50vh;
`

const ImgC=styled.img`
height: 100%;
width: 100%;
border-radius: 15pt;
object-fit: cover;
object-position: center center;
`

const TopContainer=styled.div`
width: 100%;
display: flex;
gap: 1em;
width: 80%;
margin: 0 auto;
`
const MainContainer=styled.div`
width:32%;
`

const Main=()=>{

    return(

<Div>
<TopContainer>
<TopImage>
<Img src={Eliud} alt="tantastic" />
</TopImage>
<Article>
<NavNav>
    Sports
</NavNav>
<NavHeading>
Eliud Kipchoge; born 5 November 1984 is a Kenyan long-distance runner who competes in the marathon and formerly specialized at the 5000 metre distance. Widely regarded as the greatest marathon runner of all time, he is the 2016 and 2020 Olympic marathon champion and the world record holder in the marathon with a time of 2:01:09 set at the 2022 Berlin Marathon. He has run four out of the five fastest marathon times in history.[2]
</NavHeading>
</Article>
</TopContainer>

 <Container>
    <MainContainer>
<ContainerImage>
<ImgC src={prezo} alt="delicious"/>
</ContainerImage>
<NavNav> Politics</NavNav>
<NavHeading>
The president of the Republic of Kenya (Swahili: Rais wa Jamhuri ya Kenya) is the head of state and head of government of the Republic of Kenya. The President is also the head of the executive branch of the Government of Kenya and is the commander-in-chief of the Kenya Defence Forces.</NavHeading>


</MainContainer>

<MainContainer>
<ContainerImage>
    <ImgC src={ constra} alt="mouth watering"/>
</ContainerImage>

<NavNav>Transport</NavNav>
<NavHeading>
Nakuru to NAirobi highway to be constracted okr expanded to prevent accidents that happens.
</NavHeading>
</MainContainer>

<MainContainer>
<ContainerImage>
    <ImgC src={food2} alt="yummy"/>
</ContainerImage>
<NavNav>Food
</NavNav>
<NavHeading>This Baked Tandoori Chicken features healthy and delicious Indian flavors you can enjoy right in your home. Perfect for a weeknight meal!</NavHeading>
</MainContainer>


</Container>  
</Div>

    )
}
export default Main;