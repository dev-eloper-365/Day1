import { Button } from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdCall, MdMessage } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    text: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();

    // Update submitted data and display it
    setSubmittedData(formData);

    // Optionally reset form inputs
    setFormData({ name: "", email: "", text: "" });
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button text="VIA SUPPORT CHAT" icon={<MdMessage />} fontSize="25px" />
          <Button text="VIA CALL" icon={<MdCall />} fontSize="25px" />
        </div>

        <Button isOutline={true} text="VIA EMAIL FORM" icon={<HiMail />} fontSize="24px" />

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea
              id="text"
              name="text"
              rows="8"
              value={formData.text}
              onChange={handleChange}
            ></textarea>
          </div>

          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button text="SUBMIT" />
          </div>
        </form>

        {/* Display the submitted data after form submission */}
        {submittedData && (
          <div>
            <h3>Submitted Data:</h3>
            <p>Name: {submittedData.name}</p>
            <p>Email: {submittedData.email}</p>
            <p>Text: {submittedData.text}</p>
          </div>
        )}
      </div>

      <div className={styles.contactImage}>
        <img src="./images/main.svg" alt="Contact Us" />
      </div>
    </section>
  );
};

export default ContactForm;
