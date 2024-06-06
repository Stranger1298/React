import React from 'react'
import './Brand.css'
import br1 from '../../assets/atlassian.png'
import br2 from '../../assets/dropbox.png'
import br3 from '../../assets/google.png'
import br4 from '../../assets/shopify.png'
import br5 from '../../assets/slack.png'
const Brand = () => {
  return (
    <div className='brand'>
      <img src={br1} alt="br1-img" />
      <img src={br2} alt="br2-img" />
      <img src={br3} alt="br3-img" />
      <img src={br4} alt="br4-img" />
      <img src={br5} alt="br5-img" />
    </div>
  )
}

export default Brand