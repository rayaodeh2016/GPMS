import React, {useState, useEffect} from "react";
import { Button } from "mdbreact";
import Axios from 'axios';
import Img1 from './bg.jpg';
import Sec from './sec/sec';

/*ممكن وضعها ب json  */
const ProjectsPage = () => {

  const [Project,setProject] = useState([]);

  useEffect( () => {  
    Axios.get('js/Data.json').then(res => {setProject(res.data.Projects)});
  },[])

  const Item = Project.map( (item) => {
    return (
      <Sec key={item.id} src_left={item.src_left} h3_left={item.h3_left} src_right={item.src_right} h3_right={item.h3_right} />
    )
})


  const Section_s = { paddingTop: '120px' ,backgroundImage:`url(${Img1})` ,  backgroundRepeat:" no-repeat",backgroundSize:'cover',paddingBottom: '120px'
}
  
  const Button_see = {
    right: "28%", backgroundColor: " rgb(7, 212, 212)", transform: " translateY(-100%)",
  }
  const Style_s = { paddingTop: "10px" }
  const Head_s = { textAlign: "center", fontSize: '2.4rem', fontFamily: 'Vidaloka', textTransform: "uppercase",paddingBottom:'90px'}


  return (
    <section className="text-center my-5" id="project" style={Section_s}  >
      
      <h2 className="h1-responsive " style={Head_s} data-aos="zoom-in">   projects     </h2>
      
      <Button style={Button_see} data-aos="fade-left">
        See all Projects <i class="fas fa-search"></i>
      </Button>
      
           {Item}

    </section>
  );
}

export default ProjectsPage;