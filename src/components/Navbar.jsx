import React, { useState } from 'react';
// import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';
// import { Cart, Chat, Notification, UserProfile } from './';
import { useEffect } from 'react';

const NavButton = () => {
  <TooltipComponent>
    <button
      type='button'
      style={{}}
      className='relative text-xl rounded-full p-3 hover:bg-light-gray'
    >
    <span
      style={{ backgroundColor: 'blue'}}
      className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'
    >
    </span>
    </button>
  </TooltipComponent>
}

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(0);
  const isClicked = true;

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(!activeMenu);
    } else {
      setActiveMenu(true);
    }
  }, [activeMenu, screenSize]);

  // const handleActiveMenu = () => setActiveMenu(!activeMenu);
  
  return (
    <div className='flex justify-between p-2 md:ml-6 md:mr-6 relative"'>
      <NavButton titile='Menu'/>
        <div className='flex'>
          <NavButton 
              titile='Cart' 
              icon={<FiShoppingCart/>}

          />
          <NavButton titile='Chart' icon={<BsChatLeft />}/>
          <NavButton dotColor="#03C9D7" titile='Notification' icon={<RiNotification3Line/>}/>
          <TooltipComponent  dotColor="rgb(254, 201, 15)" content='Profile' position='BottomCenter'>
            <div
              className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
            >
            <img 
              className='rounded-full w-8 h-8'
              src={avatar}
              alt='user-profile'
            />
            <p>
              <span className='text-gray-400 text-14'></span>
              <span className='text-gray-400 font-bold ml-1 text-14'>
                Henry Dao
              </span>
            </p>
            <MdKeyboardArrowDown className='text-gray-400 text-14'/>
            </div>
          </TooltipComponent>
        </div>
        {/* {isClicked.cart && (<Cart />)}
        {isClicked.chat && (<Chat />)}
        {isClicked.notification && (<Notification />)}
        {isClicked.userProfile && (<UserProfile />)} */}
    </div>
  )
}

export default Navbar;