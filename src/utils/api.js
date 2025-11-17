import axios from 'axios';

// For Formspree - replace with your Formspree endpoint
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

// Alternative: Use Netlify Forms (add netlify attribute to form)
// Or use your own backend API endpoint

export const sendContactForm = async (formData) => {
  try {
    const response = await axios.post(FORMSPREE_ENDPOINT, formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    return {
      success: true,
      message: 'Message sent successfully!',
      data: response.data,
    };
  } catch (error) {
    console.error('Error sending contact form:', error);
    
    return {
      success: false,
      message: error.response?.data?.error || 'Failed to send message. Please try again.',
      error: error,
    };
  }
};

// Validate email format
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

// Validate form data
export const validateContactForm = (formData) => {
  const errors = {};
  
  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }
  
  if (!formData.email || !validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  if (!formData.message || formData.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};