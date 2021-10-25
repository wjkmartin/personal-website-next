import React, { useEffect, useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
  incrementGrayscale,
  decrementGrayscale,
  resetGrayscale,
} from '../actions';

import styles from '../styles/Game.module.css';

const Game = (props) => {
  const canvasRef = useRef(null);
  const dispatch = useDispatch();

  let bones = [];
  let bonesCount = 0;

  let didClick;

  function RectsColliding(r1, r2) {
    return !(
      r1.x > r2.x + r2.width ||
      r1.x + r1.width < r2.x ||
      r1.y > r2.y + r2.height ||
      r1.y + r1.height < r2.y
    );
  }

  function drawBonesBar(ctx) {
    ctx.fillStyle = '#D96C06';
    ctx.strokeStyle = '#F4A261';
    ctx.strokeRect(10, 10, 310, 25);
    ctx.fillRect(11, 11, 308 * (bonesCount / 5), 23);
  }

  function drawHoverBone(ctx, cursorLoc) {
    let cursorY = cursorLoc.y;
    if (cursorY > 100) {
      cursorY = 100;
    } else if (cursorY < 50) {
      cursorY = 50;
    }
    let rainbone = new Image(40, 40);
    rainbone.src = 'rainbone_sm.png';
    ctx.drawImage(rainbone, cursorLoc.x - 10, cursorY - 15);
  }

  function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top,
    };
  }

  function removeBone(index) {
    bones = bones.filter((_, i) => i !== index);
  }

  function createBone(frameCount, cursorPosition) {
    let cursorY = cursorPosition.y;
    if (cursorPosition.y > 100) {
      cursorY = 100;
    } else if (cursorY < 50) {
      cursorY = 50;
    }
    bones.push({
      y: cursorY + 25,
      x: cursorPosition.x,
      start: frameCount,
    });
  }

  const drawBones = (ctx, frameCount) => {
    bones.forEach((bone) => {
      let rainbone = new Image(40, 40);
      rainbone.src = 'rainbone_sm.png';

      ctx.drawImage(
        rainbone,
        bone.x,
        bone.y - 15 + 1.9 * (frameCount - bone.start)
      );
      bone.y = bone.y - 15 + (frameCount - bone.start);
    });
  };

  const draw = (ctx, frameCount, cursorPosition) => {
    ctx.clearRect(0, 0, 330, 300);
    ctx.fillStyle = 'rgba(225,225,225,.33)';
    ctx.fillRect(0, 0, 330, 300);

    drawBonesBar(ctx);
    if (bonesCount < 1) {
      ctx.fillStyle = 'white';
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 0.5;
      ctx.font = '25px Arial';
      ctx.fillText('Click or tap in this area ', 40, 75);
      ctx.strokeText('Click or tap in this area ', 40, 75);
      ctx.fillText('to drop bones!', 90, 95);
      ctx.strokeText('to drop bones!', 90, 95);
    }
    if (bonesCount < 5) {
      let pupJaws = new Image(150, 150);
      pupJaws.src = 'pup_jaws.png';
      let pupJawsPos = {
        x: 110 * Math.sin(frameCount * 0.05) + 60,
        y: 200,
      };

      let collisionRect = {
        x: pupJawsPos.x + 60,
        y: pupJawsPos.y + 20,
        width: 85,
        height: 20,
      };

      ctx.drawImage(pupJaws, pupJawsPos.x, pupJawsPos.y);
      ctx.fillStyle = 'rgba(225,225,225,0)';
      ctx.fillRect(
        collisionRect.x,
        collisionRect.y,
        collisionRect.width,
        collisionRect.height
      );
      bones.forEach((bone) => {
        let didCollide = RectsColliding(
          { x: bone.x, y: bone.y, width: 30, height: 30 },
          collisionRect
        );
        if (didCollide === true) {
          removeBone(bones.indexOf(bone));
          bonesCount++;
          dispatch(decrementGrayscale());
        }
      });

      if (cursorPosition !== undefined) {
        drawHoverBone(ctx, cursorPosition);
      }

      if (didClick) {
        createBone(frameCount, cursorPosition);
        didClick = false;
      }
      drawBones(ctx, frameCount);
    } else {
      ctx.fillStyle = 'white';
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 1;
      ctx.font = '32px Arial';
      ctx.fillText('You returned color', 40, 140);
      ctx.strokeText('You returned color', 40, 140);
      ctx.fillText('to the site!', 100, 170);
      ctx.strokeText('to the site!', 100, 170);
      props.setGameCompleted(true)
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let frameCount = 0;
    let animationFrameId;
    context.miterLimit = 2;

    let ratio = window.devicePixelRatio;

    context.canvas.width = 330 * ratio;
    context.canvas.height = 300 * ratio;

    canvas.style.width = 330 + 'px';
    canvas.style.height = 300 + 'px';

    canvas.getContext('2d').scale(ratio, ratio);

    let cursorPosition;
    didClick = false;
    canvas.addEventListener('mousemove', function (evt) {
      cursorPosition = getMousePos(canvas, evt);
    });
    canvas.addEventListener('click', function (evt) {
      didClick = true;
      cursorPosition = getMousePos(canvas, evt);
    });
    const render = () => {
      frameCount++;
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
      draw(context, frameCount, cursorPosition);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return <canvas className={styles.Game__container} ref={canvasRef} />;
};

export default React.memo(Game);
