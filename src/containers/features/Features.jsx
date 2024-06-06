import React from 'react'
import './feature.css'
import feature from '../../assets/Feature Image.png'
import line from '../../assets/Rectangle 17.png'
const Features = () => {
  return (
    <>
    <div>
      <h1 className='text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
      <p className='p-text'>Request Early Access to Get Started</p>
    </div>
    <div className='right-content'>
    <img className='img1' src={line} alt="line-img" />
      <h3 className='head1'>Improving end distrusts instantly </h3>
      <p className='p1'>From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.</p>
      <img className='img2' src={line} alt="line-img" />
      <h3 className='head2'>Become the tended active </h3>
      <p className='p2'>Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.</p>

      <img className='img3' src={line} alt="line-img" />
      <h3 className='head3'>Message or am nothing </h3>
      <p className='p3'>Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.</p>

      <img className='img4' src={line} alt="line-img" />
      <h3 className='head4'>Really boy law county </h3>
      <p className='p4'>Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.</p>
      
    </div>
      <img className='feature-img' src={feature} alt="feature-img"/>
    <div className='r-content'>
          <p className='para-text-1'>Request Early Access to Get Started</p>
          <h1 className='text-1'>The possibilities are beyond your imagination</h1>
          <p className='para3'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
          <p className='para-text-2'>Request Early Access to Get Started</p>
    </div>
    
    </>
  )
}

export default Features