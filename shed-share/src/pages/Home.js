import React, {useContext} from "react";
import Project from '../components/Project'
import { AuthContext } from '../context/auth';

const Home = props => {
    
    const Auth = useContext(AuthContext);
    console.log({Auth})


    return(
        // <AuthContext.Consumer= ></AuthContext.Consumer>
        <> 
        <h1>coming soon</h1>
        <Project></Project>
        </>
    )
}

export default Home;