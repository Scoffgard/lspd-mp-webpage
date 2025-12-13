import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import LogoSvg from '../assets/full_logo.svg?react';
import ArrowDownSvg from '../assets/arrow_down.svg?react';
import DiscordSvg from '../assets/discord.svg?react';

import '../styles/Home.scss';
import Header from '../components/Header';

export default function Home() {
  
  const { t } = useTranslation();

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
            name: t('header.home'),
            path: '#hero',
          },
          {
            name: t('header.more'),
            path: '#more',
          },
          {
            name: t('header.discord'),
            path: '#discord',
          },
        ]}
      />
      <div className='hero' id='hero'>
        <div className='shadow'></div>
        <LogoSvg alt="LSPD:MP Logo" />
        <div className='cta'>
          <span>{t('home.cta')}</span>
          <ArrowDownSvg />
        </div>
      </div>
      <div className='about' id='more'>
        <div className='faq'>
          <div className='question'>
            <h2>{t('home.faq.whatis.question')}</h2>
            <p>{t('home.faq.whatis.answer')}</p>
          </div>
          <div className='question'>
            <h2>{t('home.faq.currentstage.question')}</h2>
            <p>{t('home.faq.currentstage.answer')}</p>
          </div>
          <div className='question'>
            <h2>{t('home.faq.join.question')}</h2>
            <p>{t('home.faq.join.answer')}</p>
          </div>
          <div className='question'>
            <h2>{t('home.faq.free.question')}</h2>
            <p>{t('home.faq.free.answer')}</p>
          </div>
        </div>
        <div className='trailer'>
          <h2>{t('home.trailer')}</h2>
          <div className='vid-container'>
            <video ref={video} onClick={videoClicked} poster='/assets/trailer1-thumb.webp'>
              <source src="/assets/trailer1.mp4" type='video/mp4' />
            </video>
            <h3>LSPD:MP - Trailer 1</h3>
          </div>
        </div>
      </div>
      <div className='contacts' id="discord">
        <a href={import.meta.env.VITE_DISCORD_INVITE || "#"} target='_blank'>
          <DiscordSvg />
          {t('home.discord')}
        </a>
      </div>
      <div className='disclaimers'>
        <p>{t('home.disclaimers.gta')}</p>
        <p>{t('home.disclaimers.altv')}<a href='https://rage.mp/' target='_blank'>RAGE Multiplayer</a></p>
        <p>{t('home.copyright')}</p>
      </div>
    </div>
  )
}