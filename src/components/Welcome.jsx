import React, { useState } from 'react';
import Lottie from 'lottie-react';
import animationData from './WelcomeAnimation.json'; // Import your Lottie animation JSON file
 
function Welcome() {
    const [isAnimationPlaying, setIsAnimationPlaying] = useState(true);
 
    // Function to toggle animation playback
    const toggleAnimation = () => {
        setIsAnimationPlaying(!isAnimationPlaying);
    };
 
    return (
<div>
<section>
                {/* Your existing JSX code */}
                {/* For example: */}
<div>
<p>Welcome to Job Onboard</p>
</div>
 
                {/* Add the Lottie animation */}
<div>
<Lottie
                        animationData={animationData} // Pass in your animation JSON file
                        loop={true} // Set loop to true if you want the animation to loop
                        autoplay={isAnimationPlaying} // Control autoplay with state
                        style={{ width: 300, height: 300 }} // Adjust size as needed
                    />
</div>
 
                {/* Button to toggle animation playback */}
<button onClick={toggleAnimation}>
                    {isAnimationPlaying ? 'Pause Animation' : 'Play Animation'}
</button>
</section>
</div>
    );
}
 
export default Welcome;