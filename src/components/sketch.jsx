// SketchComponent.js
import React, { useRef, useEffect } from "react";
import p5 from "p5";

const SketchComponent = () => {
  const sketchRef = useRef(null);

  useEffect(() => {
    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(300, 100).parent(sketchRef.current);
      };

      p.draw = () => {
        p.background(220,0);

        // Draw left eye
        let leftX = 50;
        let leftY = 50;

        // Calculate angle between left eye and mouse
        let leftAngle = p.atan2(p.mouseY - leftY, p.mouseX - leftX);

        p.push();
        p.translate(leftX, leftY);
        p.fill(255);
        p.ellipse(0, 0, 50, 50);
        p.rotate(leftAngle);
        p.fill(0);
        p.ellipse(12.5, 0, 25, 25);
        p.pop();

        // Draw right eye
        let rightX = 130;
        let rightY = 50;

        // Calculate angle between right eye and mouse
        let rightAngle = p.atan2(p.mouseY - rightY, p.mouseX - rightX);

        p.push();
        p.translate(rightX, rightY);
        p.fill(255);
        p.ellipse(0, 0, 50, 50);
        p.rotate(rightAngle);
        p.fill(0);
        p.ellipse(12.5, 0, 25, 25);
        p.pop();
      };
    };

    const myP5 = new p5(sketch);

    return () => {
      myP5.remove(); // Limpia el canvas al desmontar el componente
    };
  }, []);

  return <div ref={sketchRef}></div>;
};

export default SketchComponent;
