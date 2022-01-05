import React from 'react';

import Image from 'next/image';

import _Head from '../../common/_Head';
import Header from '../../common/Header';

import styles from '../../styles/Portfolio.module.css';
import commonStyles from '../../styles/commonStyles.module.css';

export default function FantasyQuest() {
  return (
    <div className={commonStyles.container}>
      <_Head />
      <Header />
      <main className={commonStyles.main}>
        <div className={styles.Portfolio__project_morePadding}>
          <h3 className={styles.Portfolio__project_title}>
            Movie Rec - A Keras driven cross platform movie reccomendation app
            that&apos;s actually user friendly
          </h3>
          <a href="/movie_rec_app_arch.png" target="_blank">
            <Image
              className={styles.Portfolio__project_image}
              width="2071px"
              height="1711px"
              src="/movie_rec_app_arch.png"
              alt="A screenshot of Reddit Timer"
            />
          </a>
          <p style={{textAlign: "center"}}>
            I spent too much time trying to figure out what movie to watch, so
            now machine learning figures that out for me. 
          </p>
          <a
            className={styles.Portfolio__project_link}
            href="https://github.com/wjkmartin/movie-rec-client"
            target="_blank"
            rel="noopener noreferrer"
          >
            You can find the Next.js client on Github here
          </a>
          <a
            className={styles.Portfolio__project_link}
            href="https://github.com/wjkmartin/movie-rec-server"
            target="_blank"
            rel="noopener noreferrer"
          >
            and you can find the Apollo server on Github here
          </a>
          <h4>About this project:</h4>
          <p>
            So this is still a WIP, with no demo just yet. The backend is largely built, the front end is still being actively developed.
            You can see the above picture of the architecture however for reference to how it all fits together.
            <br/>
            There are a total of four discrete macro services to this project.
            <ol>
              <li>
                The python server that is used to train the model with an n-hour configurable cron job. 
              </li>
              <li>
                The Tensorflow serving backend that is used to serve the model to the Apollo server efficiently.
              </li>
              <li>
                The Apollo backend that is used for data amalagation and querying.
              </li>
              <li>
                And finally the Next.js front end that is used to serve the app.
              </li>
            <br />
            My methodology for the machine learning model was to have the input tensors be based on both the quantative features of user ratings, as well as the qualitative features of the movie, such as the director, screenwriter, lead actors, etc. 
            This is because my primary supposition is that the user will more likely be interested in movies by their favorite directors and actors. Sounds simple, right? 
            <br />
            <br />
            This ended up being the most complicated model I&apos;ve ever built. I spent a lot of time trying to figure out the correct way to model the data and transform it to make it easy and fast to encode.
            <br /> 
            There are a lot of input features, and the ratings in particular are a bit of a challenge computationally, as the dataset is very sparse due to the fact that a lot of movies have to be included as a zero input.
            <br />
            <br />
            <a href="/model_w_shape.png" target="_blank">
            <Image
              className={styles.Portfolio__project_image}
              width="2000px"
              height="450px"
              src="/model_w_shape.png"
              alt="A screenshot of Reddit Timer"
            />
          </a>
          You can see the model shape above (click for full size)
          <br />
          <br />
          Once I have a demo I&apos;ll be adding more information to this page, so stay tuned!
            </ol>
          </p>
          <h4>What I&apos;ve learned on this project so far:</h4>
          <ul>
            <li>Some of the finer points of designing and serving Keras models</li>
            <li>Dataset cleaning</li>
            <li>How to deal with many datasources on an Apollo server</li>
            <li>Google Cloud Services (Realtime server, Auth, Firebase DB)</li>
            <li>The importance of microservices</li>
          </ul>
         
        </div>
      </main>
    </div>
  );
}
