import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, USER_ICON } from '../utils/constants';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store)=> store.user)
  const handleSignout = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");

    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            const { uid, email, displayName } = user;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
            // ...
            navigate("/browse")
        } else {
            // User is signed out
            // ...
            dispatch(removeUser());
            navigate("/")
        }
    });

    //unsubscribe when component un mounts 
    return ()=> unsubscribe();
}, [])
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44' src={LOGO} alt='logo'/>
      {user &&
      <div className='flex p-2'>
        <img alt='usericon' className='w-12 h-12' src={USER_ICON} />
        <button onClick={handleSignout} className='font-bold text-white'>(Sign out)</button>
      </div>}
    </div>
  )
}


export default Header
