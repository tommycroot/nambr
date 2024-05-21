import { useForm, ValidationError } from '@formspree/react';
import '../styles/components/contact.css'; // Import CSS file for styling

const Contact = () => {
  const [state, handleSubmit] = useForm("xkndekbz");

  if (state.succeeded) {
    return <p>Thank you for your interest!</p>;
  }

  return (
    <div className='contact'>
      <h1>C<span className='second-letter'>O</span><span className='third-letter'>N</span><span className='forth-letter'>T</span><span className='third-letter'>A</span><span className='second-letter'>C</span>T</h1>

      <form className="nambr-form" onSubmit={handleSubmit}>
        <h3>Get in Touch</h3>
        <label id='contact-p'>Please send me a message using the contact form below and I look forward to scheduling a consultation meeting.
        </label>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            name="name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            id="email"
            type="email"
            name="email"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone-number">Phone Number:</label>
          <input
            id="phone-number"
            type="tel"
            name="phone-number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="company">Company:</label>
          <input
            id="company"
            type="text"
            name="company"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
