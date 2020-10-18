import React from 'react'
import Title from '../Title'

const Contact = () => {
  return (
    <section className='py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-10 col-md-6 mx-auto my-3'>
            <Title title='cantact us' />
            <form
              className='mt-5'
              action='https://formspree.io/f/myybejgd'
              method='POST'
            >
              {/* Full Name */}
              <div className='form-group'>
                <input
                  type='text'
                  name='fullName'
                  className='form-control'
                  placeholder='Muhammad Abubakar'
                />
              </div>
              {/* Email */}
              <div className='form-group'>
                <input
                  type='email'
                  name='email'
                  className='form-control'
                  placeholder='abubakar@gmail.com'
                />
              </div>
              {/* Subject */}
              <div className='form-group'>
                <input
                  type='text'
                  name='subject'
                  className='form-control'
                  placeholder='Important....!'
                />
              </div>
              {/* Message */}
              <div className='form-group'>
                <textarea
                  name='message'
                  rows='5'
                  className='form-control'
                  placeholder='somethin you want or tell .. write here'
                />
              </div>
              {/* Submit */}
              <div className='form-group mt-3'>
                <input
                  type='submit'
                  className='form-control bg-primary text-white'
                  value='Submit'
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
