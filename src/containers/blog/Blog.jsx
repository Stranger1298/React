import React from 'react'
import './blog.css'
import bg1 from '../../assets/Rectangle 22-4.png'
import bg2 from '../../assets/Rectangle 22-2.png'
import bg3 from '../../assets/Rectangle 22-3.png'
import bg4 from '../../assets/Rectangle 22-1.png'
import bg5 from '../../assets/Rectangle 22.png'
const Blog = () => {
  return (
    <div className='blog'>
      <h1 className='blog-heading'>A lot is happening, We are blogging about it.</h1>

      <div>
          <img className='bg1' src={bg1} alt="bg1" />
          <div className='rect'>
            <p className='blog-time'>Sep 26, 2021</p>
            <h1 className='blog-head'>GPT-3 and Open  AI is the future. Let us exlore how it is?</h1>
            <p className='blog-time2'>Read Full Article</p>
          </div>


          <div className="box_4">
          <img className='bg5' src={bg5} alt="bg5" />
          <div className='rect2'>
            <p className='blog-date2'>Sep 26, 2022</p>
            <h1 className='blog-head2'>GPT-3 and Open  AI is the future. Let us exlore how it is?</h1>
            <p className='blog-time3'>Read Full Article</p>
            </div>


            <img className='bg2' src={bg2} alt="bg5" />
            <div className='rect3'>
            <p className='blog-date3'>Sep 26, 2024</p>
            <h1 className='blog-head3'>GPT-3 and Open  AI is the future. Let us exlore how it is?</h1>
            <p className='blog-time4'>Read Full Article</p>
            </div>


            <img className='bg3' src={bg3} alt="bg5" />
            <div className='rect4'>
            <p className='blog-date4'>Sep 26, 2025</p>
            <h1 className='blog-head4'>GPT-3 and Open  AI is the future. Let us exlore how it is?</h1>
            <p className='blog-time5'>Read Full Article</p>
            </div>

            <img className='bg4' src={bg4} alt="bg5" />
            <div className='rect5'>
            <p className='blog-date5'>Sep 26, 2023</p>
            <h1 className='blog-head5'>GPT-3 and Open  AI is the future. Let us exlore how it is?</h1>
            <p className='blog-time6'>Read Full Article</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Blog