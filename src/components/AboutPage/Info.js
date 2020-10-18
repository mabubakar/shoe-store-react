import React from 'react'
import Title from '../Title'
import aboutBcg from '../../images/aboutBcg.jpeg'

const Info = () => {
  return (
    <section className='py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto my-3 col-md-6'>
            <img
              src={aboutBcg}
              className='img-fluid img-thumbnail'
              alt='about company'
              style={{ background: 'var(--darkGrey)' }}
            />
          </div>
          <div className='col-10 mx-auto my-3 col-md-6'>
            <Title title='about us' />
            <p className='text-lead text-muted my-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              quod tempore corporis iure debitis quasi. Quidem fugiat non ea
              sapiente?
            </p>
            <button
              className='main-link'
              type='button'
              style={{ marginTop: '2rem ' }}
            >
              more info
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
