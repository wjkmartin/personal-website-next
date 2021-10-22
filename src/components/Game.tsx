import React, { useEffect, useRef, useState } from 'react';

import styles from '../styles/Game.module.css';

const Game = () => {
  const [pointerLoc, setPointerLoc] = useState(50);
  const canvasRef = useRef(null);

  let bones = [];

  function getCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    return { x: x, y: y };
  }

  function createBone(frameCount) {
    bones.push({ ypos: 0, xpos: 150 * Math.random() + 150, start: frameCount });
  }

  const drawBones = (ctx, frameCount) => {
    bones.forEach((bone) => {
      ctx.fillRect(bone.xpos, 100 + (frameCount - bone.start), 20, 20);
    });
  };

  const draw = (ctx, frameCount, click) => {
    ctx.clearRect(0, 0, 300, 300);
    let pupJaws = new Image(200, 200);
    pupJaws.src = 'pup_jaws.png';
    ctx.drawImage(pupJaws, 150 * Math.sin(frameCount * 0.05) + 150, 250);
    if (click) console.log(click);
    drawBones(ctx, frameCount);
  };

  useEffect(() => {
    const canvas = canvasRef.current;

    const context = canvas.getContext('2d');
    let frameCount = 0;
    let animationFrameId;

    context.canvas.width = 450;
    context.canvas.height = 400;
    context.imageSmoothingEnabled = false;

    //Our draw came here
    const render = () => {
      frameCount++;
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
      let cursorPosition = undefined;
      let click = false;
      canvas.addEventListener('click', function (e) {
        click = true;
        cursorPosition = getCursorPosition(canvas, e);
      });
      draw(context, frameCount, click);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return <canvas className={styles.Game__container} ref={canvasRef} />;
};

export default Game;
