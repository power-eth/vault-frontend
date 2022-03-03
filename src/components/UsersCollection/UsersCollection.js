import LoginPrompt from '../AuthButton/LoginPrompt';
import UsersCollectionInfo from './UsersCollectionInfo';

const UsersCollection = ({ isLoggedIn }) => {
  const handleLoginPrompt = () => {
    if(isLoggedIn == false) {
      return <LoginPrompt />
    } else {
      return <UsersCollectionInfo/>
    }
  }

  return (
    <>
       {handleLoginPrompt()}    
    </>
    
  )
};

export default UsersCollection;