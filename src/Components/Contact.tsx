import { useState, ChangeEvent, FormEvent } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../styles/components/contact.css'; // Import CSS file for styling

interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
  company: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  phoneNumber?: string;
  company?: string;
  message?: string;
}

const Contact = () => {
  const [state, handleSubmit] = useForm("mzbnqaqd");
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phoneNumber: '',
    company: '',
    message: ''
  });
  const [errors, setErrors] = useState<Errors>({});

  const validateForm = (): Errors => {
    const newErrors: Errors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone Number is required';
    if (!formData.company) newErrors.company = 'Company is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      await handleSubmit(e);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className='contact'>
      <h1>
        C<span className='second-letter'>O</span><span className='third-letter'>N</span><span className='fifth-letter' id='T'>T</span>
        <span className='third-letter'>A</span><span className='second-letter'>C</span><span id='T2'>T</span>
      </h1>

      {state.succeeded ? (
        <p id='thanks'>Thank you for your interest!</p>
      ) : (
        <form className="nambr-form" onSubmit={handleFormSubmit}>
          <h3>Get in Touch</h3>
          <label id='contact-p'>Please send me a message using the contact form below. I look forward to scheduling a consultation meeting.</label>
          
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="phone-number">Phone Number:</label>
            <input
              id="phone-number"
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="company">Company:</label>
            <input
              id="company"
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
            {errors.company && <span className="error">{errors.company}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
            {errors.message && <span className="error">{errors.message}</span>}
          </div>

          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
