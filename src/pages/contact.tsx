/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import Header from '../common/Header';
import _Head from '../common/_Head';
import commonStyles from '../styles/commonStyles.module.css';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [submitted, setSubmitted] = useState(false);

  async function sendEmail(e) {
    setSubmitted(true)
    e.preventDefault();

    const data = {
      name: nameInput,
      email: emailInput,
      message: messageInput,
    };

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log('Response received');
      if (res.status === 200) {
        console.log('Response succeeded!');
        (true);
        setNameInput('');
        setEmailInput('');
        setMessageInput('');
      }
    });
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
          <form className={styles.Contact__form} acceptCharset="UTF-8">
            <div className={styles.Contact__form_row}>
              <div className={styles.Contact__smallField}>
                <label className={styles.Contact__label}>NAME</label>
                <input
                  onInput={(e) =>
                    setNameInput((e.target as HTMLInputElement).value)
                  }
                  className={styles.Contact__smallField_input}
                ></input>
              </div>
              <div className={styles.Contact__smallField}>
                <label className={styles.Contact__label}>EMAIL</label>
                <input
                  onInput={(e) =>
                    setEmailInput((e.target as HTMLInputElement).value)
                  }
                  className={styles.Contact__smallField_input}
                ></input>
              </div>
            </div>

            <div className={styles.Contact_largeField}>
              <label className={styles.Contact__label}>MESSAGE</label>
              <textarea
                onInput={(e) =>
                  setMessageInput((e.target as HTMLInputElement).value)
                }
                id="messageInput"
                className={styles.Contact__largeField_input}
              ></textarea>
            </div>
            {(submitted ? <button
              className={`${styles.Contact_button} ${styles.Contact_button_sent}`}
              onClick={(e)=>{e.preventDefault();}}
            >
              THANK YOU, I'LL CHECK IT OUT
            </button> : <button
              type="submit"
              onClick={(e) => {
                setSubmitted(true)
                sendEmail(e);
              }}
              className={styles.Contact_button}
            >
              SEND IT!
            </button>)}
            
          </form>
        </div>
      </main>

      <footer className={commonStyles.footer}></footer>
    </div>
  );
}
