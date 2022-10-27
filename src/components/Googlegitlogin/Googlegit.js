 import { GoogleAuthProvider } from 'firebase/auth';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { FaGoogle,FaGithub} from "react-icons/fa";
import { AuthContex } from '../Authprovider/Authprovider';
import { GithubAuthProvider } from "firebase/auth"
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const Googlegit = () => {
    const {providerLogin, gitSign,isLight}=useContext(AuthContex)
    const googleProvider=new GoogleAuthProvider()
    const provider = new GithubAuthProvider();
    const clickGooglehandle=()=>{
        providerLogin(googleProvider)
        .then(result=>{
            const user=result.user
            console.log(user)
        })
        .catch(error=>{
            console.error(error);
        })
    }
    const handleGit=()=>{
        gitSign(provider)
        .then((result) =>{})
        .catch((error) => {});
    }
    return (
        <div>
              
<Card bg={isLight?"light":'dark'} style={{border:'none',borderRadius:'0px'}}>
<Card className='w-75 m-auto  mt-5 bg-secondary'>
      <Card.Body>
      <Button className='w-100 mx-sm-2 bg-dark text-white' onClick={clickGooglehandle} variant=" rounded"><FaGoogle/>Log in with Google</Button>
            <Button onClick={handleGit} className='w-100 mx-sm-2 d-block bg-dark text-white' variant=" mt-2 rounded"><FaGithub/>Log in with GitHub</Button>
            <Link to='/login' style={{textDecoration:'none'}}>
            <Button className='w-100 mx-sm-2 d-block bg-dark text-white' variant=" mt-2 rounded">Login Now</Button>
            </Link>
         <Link to='/register' style={{textDecoration:'none'}}>
         <Button className='w-100 mx-sm-2 d-block bg-dark text-white' variant=" mt-2 rounded">Register Now</Button>
         </Link>
      </Card.Body>
    </Card>
</Card>
        </div>
    );
};

export default Googlegit;