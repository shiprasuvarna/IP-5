import React, { useState } from 'react';
import './AnimationComponent.css';
import { useSpring, animated } from 'react-spring';

function AnimationComponent() {
const [flipped, setFlipped] = useState(false); // Set flipped to false by default
const { opacity, transform } = useSpring({
opacity: 1,
transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
});
const toggleFlip = () => {
setFlipped(!flipped);
};
return (
<div className="animation-container">
<animated.div
className="animated-card"
style={{
transform,
}}
>
<div className="front-content" style={{ opacity: flipped ? 0 : 1 }}>
<h1>Front View</h1>
<button onClick={toggleFlip}>Flip</button>
</div>
<div className="back-content" style={{ opacity: flipped ? 1 : 0 }}>
<h1>Back View</h1>
<button onClick={toggleFlip}>Flip</button>
</div>
</animated.div>
</div>
);
}
export default AnimationComponent;
