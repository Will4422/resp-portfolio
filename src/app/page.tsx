import MyName from './components/myname';
import LinkTile from './components/linktile';

import fb from 'public/linktiles/fb.svg';
import insta from 'public/linktiles/insta.svg';
import goodreads from 'public/linktiles/goodreads.svg';
import indeed from 'public/linktiles/indeed.svg';
import linkedin from 'public/linktiles/linkedin.svg';
import github from 'public/linktiles/github.svg';
import spotify from 'public/linktiles/spotify.svg';
import twitter from 'public/linktiles/twitter.svg';


export default function Home() {
  return (
    <main>
      <MyName />
      <div id='link-tile-section'>
        <div id='link-tile-row'>
          <div className='sm-screen-row'>
            <LinkTile src={fb} alt='facebook logo'/>
            <LinkTile src={insta} alt='instagram logo'/>
          </div>
          <div className='sm-screen-row'>
            <LinkTile src={goodreads} alt='goodreads logo'/>
            <LinkTile src={linkedin} alt='linkedin logo'/>
          </div>
        </div>
        <div id='link-tile-row'>
          <div className='sm-screen-row'>
            <LinkTile src={indeed} alt='indeed logo'/>
            <LinkTile src={github} alt='github logo'/>
          </div>
          <div className='sm-screen-row'>
            <LinkTile src={spotify} alt='spotify logo'/>
            <LinkTile src={twitter} alt='twitter logo'/>
          </div>
        </div>
      </div>
    </main>
  )
}
