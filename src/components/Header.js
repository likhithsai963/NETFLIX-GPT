import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES, USER_ICON } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user)
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
  const handleSignout = () => {
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
    return () => unsubscribe();
  }, [])
  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView())
  }
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))

  }
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between '>
      <img className='w-44 mx-auto md:mx-0' src={LOGO} alt='logo' />
      <button className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg' onClick={handleGptSearchClick}>{showGptSearch ? "Homepage" : "GPT Search"}
      </button>
      {showGptSearch &&
        <select className='p-2 bg-gray-900 m-2 text-white' onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
        </select>
      }
      {user &&
        <div className='flex p-2 justify-between'>
          <img alt='usericon' className='hidden md:block w-12 h-12' src={USER_ICON} />
          <button onClick={handleSignout} className='font-bold text-white'>(Sign out)</button>
        </div>
        }
    </div>
  )
}


export default Header
