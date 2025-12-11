import { useRef } from 'react';

import Logo from '../assets/full_logo.svg?react';
import ArrowDown from '../assets/arrow_down.svg?react';
import Discord from '../assets/discord.svg?react';

import '../styles/Home.scss';
import Header from '../components/Header';

export default function Home() {

  const video = useRef();

  const videoClicked = () => {
    if (!video || !video.current) return;
    if (video.current.hasAttribute('controls')) return;
    
    video.current.setAttribute('controls', 'controls');
    video.current.play();
  }
  
  return (
    <div className='home'>
      <Header 
        links={[
          {
            name: 'HOME',
            path: '#hero',
          },
          {
            name: 'LEARN MORE',
            path: '#more',
          },
          {
            name: 'JOIN OUR DISCORD',
            path: '#discord',
          },
        ]}
      />
      <div className='hero' id='hero'>
        <div className='shadow'></div>
        <Logo alt="LSPD:MP Logo" />
        <div className='cta'>
          <span>SCROLL DOWN</span>
          <ArrowDown />
        </div>
      </div>
      <div className='about' id='more'>
        <div className='faq'>
          <div className='question'>
            <h2>What is LSPD:MP</h2>
            <p>LSPD:MP is a server based on the third-party multiplayer platform for the game GTA5 : alt:V. The goal of this server is to embrace the life of an officier of the LSPD (Los Santos Police Departement) while he is on service. You can control and arrest citizens, respond to calls, or simply take your car and patrol around the city.</p>
          </div>
          <div className='question'>
            <h2>What is the current stage of LSPD:MP</h2>
            <p>LSPD:MP is still in development. The current phase of development is : Pre-Alpha. If you want to get news about the evolution of the development, refer to the <a href='#discord'>JOIN OUR DISCORD</a> section.</p>
          </div>
          <div className='question'>
            <h2>How do I join LSPD:MP</h2>
            <p>As mentioned before, LSPD:MP is still in development. But when the server will officially release, you will be able to join the server via alt:V launcher or via our website. The server is free-access, meaning that nothing is needed to join the server. You’ll however have to create an account of some kind at the release of the server.</p>
          </div>
          <div className='question'>
            <h2>Is LSPD:MP free to play</h2>
            <p>LSPD:MP is still in an early phase of is development. However, LSPD:MP is targeted to be 100% free. At some points in the life of the server, LSPD:MP could ask for donations, but all the content of the server will always remain free of charge.</p>
          </div>
        </div>
        <div className='trailer'>
          <h2>Current trailer</h2>
          <div className='vid-container'>
            <video ref={video} onClick={videoClicked} poster='/assets/trailer1-thumb.webp'>
              <source src="/assets/trailer1.mp4" type='video/mp4' />
            </video>
            <h3>LSPD:MP - Trailer 1</h3>
          </div>
        </div>
      </div>
      <div className='contacts' id="discord">
        <a href={import.meta.env.VITE_DISCORD_INVITE || "#"}>
          <Discord />
          Join our discord server
        </a>
      </div>
      <div className='disclaimers'>
        <p>Grand Theft Auto and Grand Theft Auto: V are registered trademarks of  Take-Two Interactive Software. All trademarks used are the property of  their respective owners. Me and this project are not affiliated with or  endorsed by Rockstar Games, Take-Two Interactive Software or other  rightsholders. I do not host any user-generated servers and are not  responsible for any user-generated content. All user-generated content  is the property of its respective owners.</p>
        <p>This project is not associated with alt:V or the altMP Team. For any informations on alt:V, check their website here : <a href="https://altv.mp" target='_blank'>alt:V</a></p>
        <p>© LSPD:MP - All rights reserved.</p>
      </div>
    </div>
  )
}