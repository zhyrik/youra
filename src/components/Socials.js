import React from 'react'

import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

export default function Socials() {
  return (
    <div className="column is-4 social">
      <a title="facebook" href="https://facebook.com">
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
      <a title="instagram" href="https://instagram.com">
        <img
          src={instagram}
          alt="Instagram"
          style={{ width: '1em', height: '1em' }}
        />
      </a>
      <a title="vimeo" href="https://vimeo.com">
        <img src={vimeo} alt="Vimeo" style={{ width: '1em', height: '1em' }} />
      </a>
    </div>
  )
}
