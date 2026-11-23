import { useEffect, useRef } from "react";

class TrailNode {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
  }
}

class TrailLine {
  constructor(x, y, spring, friction) {
    this.spring = spring;
    this.friction = friction;
    this.nodes = [];

    for (let index = 0; index < 50; index += 1) {
      this.nodes.push(new TrailNode(x, y));
    }
  }

  update(pointer, dampening, tension) {
    let spring = this.spring;
    let node = this.nodes[0];

    node.vx += (pointer.x - node.x) * spring;
    node.vy += (pointer.y - node.y) * spring;

    for (let index = 0; index < this.nodes.length; index += 1) {
      node = this.nodes[index];

      if (index > 0) {
        const previous = this.nodes[index - 1];
        node.vx += (previous.x - node.x) * spring;
        node.vy += (previous.y - node.y) * spring;
        node.vx += previous.vx * dampening;
        node.vy += previous.vy * dampening;
      }

      node.vx *= this.friction;
      node.vy *= this.friction;
      node.x += node.vx;
      node.y += node.vy;
      spring *= tension;
    }
  }

  draw(context) {
    const nodes = this.nodes;
    let node = nodes[0];
    context.beginPath();
    context.moveTo(node.x, node.y);

    for (let index = 1; index < nodes.length - 2; index += 1) {
      const current = nodes[index];
      const next = nodes[index + 1];
      const middleX = (current.x + next.x) * 0.5;
      const middleY = (current.y + next.y) * 0.5;
      context.quadraticCurveTo(current.x, current.y, middleX, middleY);
    }

    node = nodes[nodes.length - 2];
    const last = nodes[nodes.length - 1];
    context.quadraticCurveTo(node.x, node.y, last.x, last.y);
    context.stroke();
  }
}

const CursorTrail = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const context = canvas.getContext("2d");
    const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const lines = [];
    let animationFrame;
    let hue = Math.random() * 360;
    let running = true;

    const resizeCanvas = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(window.innerWidth * pixelRatio);
      canvas.height = Math.round(window.innerHeight * pixelRatio);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const resetLines = () => {
      lines.length = 0;
      for (let index = 0; index < 20; index += 1) {
        lines.push(
          new TrailLine(
            pointer.x,
            pointer.y,
            0.4 + (index / 20) * 0.025,
            0.5 + Math.random() * 0.008 - 0.004
          )
        );
      }
    };

    const handlePointerMove = (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      if (lines.length === 0) resetLines();
    };

    const render = () => {
      if (!running) return;

      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      context.globalCompositeOperation = "lighter";
      hue += 0.25;
      context.strokeStyle = `hsla(${Math.round(hue)}, 50%, 60%, 0.8)`;
      context.lineWidth = 2;

      for (const line of lines) {
        line.update(pointer, 0.25, 0.98);
        line.draw(context);
      }

      context.globalCompositeOperation = "source-over";
      animationFrame = window.requestAnimationFrame(render);
    };

    resizeCanvas();
    resetLines();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    animationFrame = window.requestAnimationFrame(render);

    return () => {
      running = false;
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("pointermove", handlePointerMove);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 z-[100] pointer-events-none"
    />
  );
};

export default CursorTrail;
