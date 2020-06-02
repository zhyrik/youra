import React from 'react'

import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import mail from '../img/social/mail.svg'

export default function Socials() {
  return (
    <div className="column is-4 social">
      <a
        title="facebook"
        href="https://www.facebook.com/profile.php?id=100009417321294"
      >
        <img
          src={facebook}
          alt="Facebook"
          style={{ width: '1em', height: '1em' }}
        />
      </a>
      <a title="twitter" href="https://twitter.com">
        <img
          className="fas fa-lg"
          src={twitter}
          alt="Twitter"
          style={{ width: '1em', height: '1em' }}
        />
      </a>
      <a title="instagram" href="https://www.instagram.com/hutsul_mountains/">
        <img
          src={instagram}
          alt="Instagram"
          style={{ width: '1em', height: '1em' }}
        />
      </a>
      <a title="vimeo" href="mailto:hutsulmountains@gmail.com">
        <img src={mail} alt="Vimeo" style={{ width: '1em', height: '1em' }} />
      </a>
    </div>
  )
}
