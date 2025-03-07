import React from 'react'
import { useFormik } from 'formik'
import Swal from 'sweetalert2';

const ContactUs = () => {

  const contactForm = useFormik(
    {
      initialValues: {
        name: '',
        email: '',
        message: ''

      },
      onSubmit: async (values, action) => {
        const res = await fetch('http://localhost:5000/contact/add', {
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        action.resetForm();

        if (res.status === 200) {
          Swal.fire({
            icon: 'success',
            title: 'Thank You',
            text: 'Team Will Contact U Shortly'
          });

        }
        else {
          Swal.fire({
            icon: 'error',
            title: 'Oops!!',
            text: 'Some Error Occured'
          });
        }
      }
    });

  return (
    <div className='loginbg'>
      <div className="d-flex justify-content-center align-items-center  vh-100 ">
        <div className="card w-25 shadow-lg rounded-5   ">
          <div className="card-body p-5">
            <i className="fa-solid fa-lock fa-2x d-block text-center " />
            <h4 className="text-center my-2  ">Contact Form</h4>
            <form onSubmit={contactForm.handleSubmit}>
              <div>
                <label htmlFor="">Name</label>
                <input className="form-control mb-2 rounded-3" type="text" name="name" onChange={contactForm.handleChange} value={contactForm.values.name} />
              </div>
              <div>
                <label htmlFor="">Email</label>
                <input className="form-control mb-2 rounded-3" type="email" name="email" onChange={contactForm.handleChange} value={contactForm.values.email} />
              </div>
              <div>
                <label htmlFor="">Message</label>
                <textarea className="form-control mb-2 rounded-3" rows={3} cols={30} type="String" name="message" onChange={contactForm.handleChange} value={contactForm.values.message} />
              </div>

              <div>
                <button type='submit' className="btn btn-danger w-100 mt-2 rounded-3 ">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>


  )
}
export default ContactUs;