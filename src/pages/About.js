import { useLoaderData } from "react-router-dom";


function About(props) {

    const about = useLoaderData()
    
    return (
    <div>
        <h2>{about.name}</h2>
        <h2>{about.email}</h2>
        <p>{about.bio}</p>
    </div>
    )
  }
  
  export default About;