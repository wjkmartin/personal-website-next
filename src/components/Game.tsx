import React, { useEffect, useRef, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { incrementGrayscale, decrementGrayscale, resetGrayscale } from '../actions'

import styles from '../styles/Game.module.css';

const Game = () => {
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

  function drawHoverBone(ctx, cursorLoc) {
    ctx.fillStyle = '#000000';
    let cursorY = cursorLoc.y;
    if (cursorY > 100) {
      cursorY = 100;
    } else if (cursorY < 50) {
      cursorY = 50;
    }
    ctx.fillRect(cursorLoc.x, cursorY, 12, 12);
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
      ctx.fillRect(
        bone.x,
        bone.y - 15 + 1.9 * (frameCount - bone.start),
        12,
        12
      );
      bone.y = bone.y - 15 + (frameCount - bone.start);
    });
  };

  const draw = (ctx, frameCount, cursorPosition) => {
    ctx.clearRect(0, 0, 300, 300);
    let pupJaws = new Image(200, 200);
    pupJaws.src = 'pup_jaws.png';
    let pupJawsPos = {
      x: 150 * Math.sin(frameCount * 0.05) + 150,
      y: 250,
    };

    let collisionRect = {
      x: pupJawsPos.x + 60,
      y: pupJawsPos.y + 20,
      width: 85,
      height: 20,
    };

    ctx.drawImage(pupJaws, pupJawsPos.x, pupJawsPos.y);
    ctx.fillRect(
      collisionRect.x,
      collisionRect.y,
      collisionRect.width,
      collisionRect.height
    );

    ctx.font = '20px Arial';
    ctx.fillText('Bones: ' + bonesCount, 10, 30);

    bones.forEach((bone) => {
      let didCollide = RectsColliding(
        { x: bone.x, y: bone.y, width: 12, height: 12 },
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
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let frameCount = 0;
    let animationFrameId;

    context.canvas.width = 450;
    context.canvas.height = 400;
    context.imageSmoothingEnabled = false;

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
