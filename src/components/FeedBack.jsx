import React, { useState } from 'react'
import "./FeedBack.css"
import {FaEdit} from 'react-icons/fa';

function FeebBack() {
  const [rating, setRating] = useState(5)
  const [email, setEmail] = useState('')



  return (
    <>
    <div className='feedback-section'>
      <div className='feedback-container'>
        <div className='feedback-card'>

          {/* Edit Icon at top right */}
          <div className='edit-icon-wrapper'>
            <FaEdit className='edit-icon'/>
          </div>

          <p className='feedback-instruction'>
            We value your thoughts! Share your feedback to <br />
            help us improve your yoga experience.
          </p>

          {/* Start rating system */}
          <div>
          {[1,2,3,4,5].map((star) => (
            <span 
              key={star} 
              className={star <= rating ? "star filled" : "star"}
              onClick={() => setRating(star)}
            >
              ★
            </span>
          ))}
          </div>

          {/* Submitted Button */}
          <button className='submit-feedback-btn'>
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
    
    <div className='stay-section'>
      <div className='stay-container'>
        <h2 className='stay-heading'>Stay in the loop</h2>
        <form className='stay-form'>
          <input 
          type='email'
          className='stay-input'
          placeholder='email'
          onChange={(e) => setEmail(e.target.value)}
          required
          />
          <button type='submit' className='stay-sub-button'>
          Submit
          </button>
        </form>
        <p className="stay-discpration">
          By signing up, I agree to the <a href="/terms">Terms of Use</a> and to receive emails from Talkspace.
        </p>

      </div>

    </div>
    </>
    

    

    
  )
}

export default FeebBack
