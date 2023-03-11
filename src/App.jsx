import React, { useRef, useLayoutEffect } from 'react';
import './App.scss';
import Console from './Console';
import { gsap } from "gsap/dist/gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";

gsap.registerPlugin(TextPlugin);




function App() {

  return (
    <div id='fullscreen'>
        <Console />  
    </div>
  );
}


export default App
