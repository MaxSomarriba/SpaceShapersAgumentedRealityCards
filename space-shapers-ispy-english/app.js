// Copyright (c) 2022 8th Wall, Inc.
//
// app.js is the main entry point for your 8th Wall app. Code here will execute after head.html
// is loaded, and before body.html is loaded.

import './index.css'

import {nextButtonComponent} from './next-button'

AFRAME.registerComponent('next-button', nextButtonComponent())

var mt1Playing = 0;
var mt2Playing = 0;
var mt3Playing = 0;
var mt4Playing = 0;
var mt5Playing = 0;


AFRAME.registerComponent('playsound', {
  schema: {},
  tick: function (){
    const mt1 = document.getElementById('model-target1');
    const mt2 = document.getElementById('model-target2');
    const mt3 = document.getElementById('model-target3');
    const mt4 = document.getElementById('model-target4');
    const mt5 = document.getElementById('model-target5');

    if(mt1.getAttribute('visible') && mt1Playing == 0){
      mt1.components.sound.playSound();
      mt1Playing = 1;
    }
    if(!mt1.getAttribute('visible')){
      mt1.components.sound.stopSound();
      mt1Playing = 0;
    }

    if(mt2.getAttribute('visible') && mt2Playing == 0){
      mt2.components.sound.playSound();
      mt2Playing = 1;
    }
    if(!mt2.getAttribute('visible')){
      mt2.components.sound.stopSound();
      mt2Playing = 0;
    }

    if(mt3.getAttribute('visible') && mt3Playing == 0){
      mt3.components.sound.playSound();
      mt3Playing = 1;
    }
    if(!mt3.getAttribute('visible')){
      mt3.components.sound.stopSound();
      mt3Playing = 0;
    }

    if(mt4.getAttribute('visible') && mt4Playing == 0){
      mt4.components.sound.playSound();
      mt4Playing = 1;
    }
    if(!mt4.getAttribute('visible')){
      mt4.components.sound.stopSound();
      mt4Playing = 0;
    }

    if(mt5.getAttribute('visible') && mt5Playing == 0){
      mt5.components.sound.playSound();
      mt5Playing = 1;
    }
    if(!mt5.getAttribute('visible')){
      mt5.components.sound.stopSound();
      mt5Playing = 0;
    }
  }
});
