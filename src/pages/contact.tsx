/* eslint-disable react/no-unescaped-entities */
import Header from '../common/Header';
import _Head from '../common/_Head';
import commonStyles from '../styles/commonStyles.module.css';
import styles from '../styles/Contact.module.css';

import nodemailer from 'nodemailer'

export default function Contact() {
  async function sendEmail() {
    let testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: "bar@example.com, baz@example.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }


  return (
    <div className={commonStyles.container}>
      <_Head />
      <Header />
      <main className={commonStyles.main}>
        <div className={commonStyles.contentBox}>
          <h3>Looking to get in touch with me?</h3>
          <p>
            Please fill out the form below and I'll get back to you as soon as I
            can.
          </p>
          <form
            className={styles.Contact__form}
            acceptCharset="UTF-8"
          >
            <div className={styles.Contact__form_row}>
              <div className={styles.Contact__smallField}>
                <label className={styles.Contact__label}>NAME</label>
                <input className={styles.Contact__smallField_input}></input>
              </div>
              <div className={styles.Contact__smallField}>
                <label className={styles.Contact__label}>EMAIL</label>
                <input className={styles.Contact__smallField_input}></input>
              </div>
            </div>
            
              <div className={styles.Contact_largeField}>
                <label className={styles.Contact__label}>MESSAGE</label>
                <textarea className={styles.Contact__largeField_input}></textarea>
              </div>
            <button onClick={() => {sendEmail()}} className={styles.Contact_button}>SEND IT!</button>
          </form>
        </div>
      </main>

      <footer className={commonStyles.footer}></footer>
    </div>
  );
}
