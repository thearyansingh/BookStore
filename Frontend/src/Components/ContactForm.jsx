import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [result, setResult] = useState("");

  const onSubmit = async (formData) => {
    setResult("Sending...");
    
    formData.access_key = "5a3320e6-db90-4f99-867e-0f3760e8c918"; // Add access_key directly

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        reset(); // Reset the form after submission
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error during form submission", error);
      setResult("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="container mx-auto px-4 space-y-7 md:px-20 mt-28 ">
        <div className="text-center justify-center items-center ">
          <h1 className='text-5xl font-bold opacity-80 mb-6'>Contact Us</h1>
          <p className='text-xl opacity-50'>Got a technical issue? Want to send feedback about a beta feature? Let us know.</p>
        </div>
        <div className='py-8 lg:py-10 px-4 space-y-8 mx-auto max-w-screen-md'>
          <div className='flex flex-col space-y-2 justify-center'>
            <span className='text-gray-500 text-base'>Your email</span>
            <label className="input input-bordered flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input {...register("email", { required: true })} type="email" className="grow dark:bg-slate-900 dark:text-white" placeholder="Email" />
            </label>
            {errors.email && <p className="text-red-500">Email is required.</p>}
          </div>

          <div className='flex flex-col space-y-2 justify-center'>
            <span className='text-gray-500 text-base'>Subject</span>
            <label className="input input-bordered flex items-center gap-2">
              <input {...register("subject", { required: true })} type="text" className="grow dark:bg-slate-900 dark:text-white" placeholder="Let us know how we can help you" />
            </label>
            {errors.subject && <p className="text-red-500">Subject is required.</p>}
          </div>

          <div className='flex flex-col space-y-2 justify-center'>
            <span className='text-gray-500 text-base'>Message</span>
            <textarea {...register("message", { required: true })} id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Leave a comment..."></textarea>
            {errors.message && <p className="text-red-500">Message is required.</p>}
          </div>

          <button type='submit' className="btn btn-active btn-success px-8 text-white">Submit</button><br></br>
          <span>{result}</span>
        </div>
       
      </form>
     
    </>
  );
}

export default ContactForm;
