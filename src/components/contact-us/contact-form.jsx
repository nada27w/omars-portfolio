import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import "./contact-form.css";
import "../../App.css"; // Assuming you want to include global styles
import { sendContactData } from "../api/axios-api";
import { Toast } from "primereact/toast";
import { useRef } from "react";


const initialValues = {
  name: "",
  surname: "",
  email: "",
  message: "",
};


const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  surname: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string().required("Required"),
});
const handleSubmit  =async (values, { setSubmitting, resetForm },toast) => {
  const payload = {
    name: `${values.name} ${values.surname}`,
    email: values.email,
    message: values.message,
  };

  try {
    const response = await sendContactData(payload);
    if (response) {
      // Show success message
      toast.current.show({
        severity: "success",
        summary: "Success",
        detail: "Message sent successfully!",
        life: 3000,
      });
      // Reset the form
      resetForm();
    }else {
      throw new Error("Failed to send message");
    }
  } catch (error) {
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: "An error occurred while sending your message. Please try again later.",
      life: 3000,
    });
  }
  finally {
    setSubmitting(false);
  }
};
    
const ContactForm = () => {
  const toast = useRef(null);

  return (

    <section id="contact" className="p-4" style={{ background: "#242424" }}>
    <Toast ref={toast} />
      <div className="text-center mb-4">
        <h1 className="text-4xl font-bold">Contact Us</h1>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => handleSubmit(values, actions, toast)}
      >
        {({ errors, touched, isSubmitting, handleChange, values }) => (
          <Form
            className="p-fluid"
            style={{ maxWidth: "700px", margin: "auto" }}
          >
            <div className="formgrid grid">
              <div className="field col-12 md:col-6">
                <label>First name</label>
                <input
                  name="name"
                  id="firstname2"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  className={`p-inputtext p-component bg-white border-round-3xl text-black w-full ${
                    errors.name && touched.name ? "p-invalid" : ""
                  }`}
                />
                {errors.name && touched.name && (
                  <small className="p-error">{errors.name}</small>
                )}
              </div>

              <div className="field col-12 md:col-6">
                <label>Lastname</label>
                <input
                  name="surname"
                  id="lastname2"
                  type="text"
                  value={values.surname}
                  onChange={handleChange}
                  className={`p-inputtext p-component bg-white border-round-3xl text-black w-full ${
                    errors.surname && touched.surname ? "p-invalid" : ""
                  }`}
                />
                {errors.surname && touched.surname && (
                  <small className="p-error">{errors.surname}</small>
                )}
              </div>
              <div className="field col-12 ">
                <label>Email</label>
                <input
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  className={`p-inputtext p-component bg-white border-round-3xl text-black w-full ${
                    errors.email && touched.email ? "p-invalid" : ""
                  }`}
                />

                {errors.email && touched.email && (
                  <small className="p-error">{errors.email}</small>
                )}
              </div>

              <div className="field col-12">
                <label>How can we help?</label>
                <InputTextarea
                  name="message"
                  type="text"
                  value={values.message}
                  onChange={handleChange}
                  rows={8}
                  autoResize
                  className={`p-inputtext p-component bg-white  border-round-3xl text-black w-full ${
                    errors.message && touched.message ? "p-invalid" : ""
                  }`}
                />
                {errors.message && touched.message && (
                  <small className="p-error">{errors.message}</small>
                )}
              </div>
            </div>
            <Divider />

            <Button
              label="Submit"
              icon="pi pi-send"
              type="submit"
              loading={isSubmitting}
              className="p-button-rounded p-button-lg p-button-primary"
            />
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default ContactForm;
