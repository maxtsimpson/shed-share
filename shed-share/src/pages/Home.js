import React, {useContext} from "react";
import Project from '../components/Project'
import { AuthContext } from '../context/auth';

const Home = props => {
    
    const Auth = useContext(AuthContext);
    console.log({Auth})


    return(
        <> 
        <h1>welcome home</h1>
            <Project style={{height: "100%"}}></Project>
        </>
    )
}

export default Home;