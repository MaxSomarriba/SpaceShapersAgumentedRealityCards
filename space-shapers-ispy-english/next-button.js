const nextButtonComponent = () => ({
    init() {
      const balancingISpy = require('./assets/AnimatedBBhalf.glb')
      const samISpy = require('./assets/SamLookingAnimation555.glb')
      const ziggyISpy = require('./assets/ZIggyLookingAnimated5x5x5.glb')
      const tappyISpy = require('./assets/TappyLooking.glb') 
  
      const iSpyColorRed = 'src: #iSpyColorRed'
      const iSpyColorBlue = 'src: #iSpyColorBlue'
      const iSpyColorGreen = 'src: #iSpyColorGreen'
      const iSpyColorYellow = 'src: #iSpyColorYellow'
      const soundListColor = [iSpyColorRed, iSpyColorBlue, iSpyColorGreen, iSpyColorYellow]
  
      const iSpyFlavorSalty = 'src: #iSpyFlavorSalty'
      const iSpyFlavorSour = 'src: #iSpyFlavorSour'
      const iSpyFlavorSavory = 'src: #iSpyFlavorSavory'
      const iSpyFlavorSweet = 'src: #iSpyFlavorSweet'
      const soundListFlavor = [iSpyFlavorSalty, iSpyFlavorSour, iSpyFlavorSavory, iSpyFlavorSweet]
  
      const iSpyShapeCircle = 'src: #iSpyShapeCircle'
      const iSpyShapeDiamond = 'src: #iSpyShapeDiamond'
      const iSpyShapeSquare = 'src: #iSpyShapeSquare'
      const iSpyShapeTriangle = 'src: #iSpyShapeTriangle'
      const soundListShape = [iSpyShapeCircle, iSpyShapeDiamond, iSpyShapeSquare, iSpyShapeTriangle]
  
      const iSpySizeLong = 'src: #iSpySizeLong'
      const iSpySizeSmall = 'src: #iSpySizeSmall'
      const iSpySizeTall = 'src: #iSpySizeTall'
      const iSpySizeWide = 'src: #iSpySizeWide'
      const soundListSize = [iSpySizeLong, iSpySizeSmall, iSpySizeTall, iSpySizeWide]
  
      const iSpyTextureBumpy = 'src: #iSpyTextureBumpy'
      const iSpyTextureFurry = 'src: #iSpyTextureFurry'
      const iSpyTextureRough = 'src: #iSpyTextureRough'
      const iSpyTextureSmooth = 'src: #iSpyTextureSmooth'
      const soundListTexutre = [iSpyTextureBumpy, iSpyTextureFurry, iSpyTextureRough, iSpyTextureSmooth]
  
      const soundEntityColor = document.getElementById('model-target1')
      const soundEntityFlavor = document.getElementById('model-target2')
      const soundEntityShape = document.getElementById('model-target3')
      const soundEntitySize = document.getElementById('model-target4')
      const soundEntityTexture = document.getElementById('model-target5')
  
      const nextButton = document.getElementById('nextbutton')
  
      nextButton.style.display = 'block'
  
      const currentColor = soundEntityColor.getAttribute('sound')
        let randColor = Math.floor(Math.random() * 4)
        while (currentColor === soundListColor[randColor]) {
          randColor = Math.floor(Math.random() * 4)
        }
        if (randColor === 0) {
          soundEntityColor.setAttribute('gltf-model', balancingISpy)
          soundEntityColor.setAttribute('animation-mixer', 'loop: repeat')
          soundEntityColor.setAttribute('sound', iSpyColorRed)
        } else if (randColor === 1) {
          soundEntityColor.setAttribute('gltf-model',samISpy)
          soundEntityColor.setAttribute('animation-mixer', 'loop: repeat')
          soundEntityColor.setAttribute('sound', iSpyColorBlue)
        } else if(randColor === 2) {
          soundEntityColor.setAttribute('gltf-model',ziggyISpy)
          soundEntityColor.setAttribute('animation-mixer', 'loop: repeat')
          soundEntityColor.setAttribute('sound', iSpyColorGreen)
        } else {
          soundEntityColor.setAttribute('gltf-model',tappyISpy)
          soundEntityColor.setAttribute('animation-mixer', 'loop: repeat')
          soundEntityColor.setAttribute('sound', iSpyColorYellow)
        }
  
        // Flavor Script
        const currentFlavor = soundEntityFlavor.getAttribute('sound')
        let randFlavor = Math.floor(Math.random() * 4)
        while (currentFlavor === soundListFlavor[randFlavor]) {
          randFlavor = Math.floor(Math.random() * 4)
        }
        if (randFlavor === 0) {
          soundEntityFlavor.setAttribute('gltf-model', balancingISpy)
          soundEntityFlavor.setAttribute('animation-mixer', 'loop: repeat')
          soundEntityFlavor.setAttribute('sound', iSpyFlavorSalty)
        } else if (randFlavor === 1) {
          soundEntityFlavor.setAttribute('gltf-model',samISpy)
          soundEntityFlavor.setAttribute('animation-mixer', 'loop: repeat')
          soundEntityFlavor.setAttribute('sound', iSpyFlavorSour)
        } else if(randFlavor === 2) {
          soundEntityFlavor.setAttribute('gltf-model',ziggyISpy)
          soundEntityFlavor.setAttribute('animation-mixer', 'loop: repeat')
          soundEntityFlavor.setAttribute('sound', iSpyFlavorSavory)
        } else {
          soundEntityFlavor.setAttribute('gltf-model',tappyISpy)
          soundEntityFlavor.setAttribute('animation-mixer', 'loop: repeat')
          soundEntityFlavor.setAttribute('sound', iSpyFlavorSweet)
        }
  
        // Shape Script
        const currentShape = soundEntityShape.getAttribute('sound')
        let randShape = Math.floor(Math.random() * 4)
        while (currentShape === soundListShape[randShape]) {
          randShape = Math.floor(Math.random() * 4)
        }
        if (randShape === 0) {
          soundEntityShape.setAttribute('gltf-model', balancingISpy)
          soundEntityShape.setAttribute('animation-mixer', 'loop: repeat')
          soundEntityShape.setAttribute('sound', iSpyShapeCircle)
        } else if (randShape === 1) {
          soundEntityShape.setAttribute('gltf-model',samISpy)
          soundEntityShape.setAttribute('animation-mixer', 'loop: repeat')
          soundEntityShape.setAttribute('sound', iSpyShapeDiamond)
        } else if(randShape === 2) {
          soundEntityShape.setAttribute('gltf-model',ziggyISpy)
          soundEntityShape.setAttribute('animation-mixer', 'loop: repeat')
          soundEntityShape.setAttribute('sound', iSpyShapeSquare)
        } else {
          soundEntityShape.setAttribute('gltf-model',tappyISpy)
          soundEntityShape.setAttribute('animation-mixer', 'loop: repeat')
          soundEntityShape.setAttribute('sound', iSpyShapeTriangle)
        }
  
        // Size Script
        const currentSize = soundEntitySize.getAttribute('sound')
        let randSize = Math.floor(Math.random() * 4)
        while (currentSize === soundListSize[randSize]) {
          randSize = Math.floor(Math.random() * 4)
        }
        if (randSize === 0) {
          soundEntitySize.setAttribute('gltf-model', balancingISpy)
          soundEntitySize.setAttribute('animation-mixer', 'loop: repeat')
          soundEntitySize.setAttribute('sound', iSpySizeLong)
        } else if (randSize === 1) {
          soundEntitySize.setAttribute('gltf-model',samISpy)
          soundEntitySize.setAttribute('animation-mixer', 'loop: repeat')
          soundEntitySize.setAttribute('sound', iSpySizeSmall)
        } else if(randSize === 2) {
          soundEntitySize.setAttribute('gltf-model',ziggyISpy)
          soundEntitySize.setAttribute('animation-mixer', 'loop: repeat')
          soundEntitySize.setAttribute('sound', iSpySizeTall)
        } else {
          soundEntitySize.setAttribute('gltf-model',tappyISpy)
          soundEntitySize.setAttribute('animation-mixer', 'loop: repeat')
          soundEntitySize.setAttribute('sound', iSpySizeWide)
        }
  
        // Texture Script
        const currentTexture = soundEntityTexture.getAttribute('sound')
        let randTexture = Math.floor(Math.random() * 4)
        while (currentTexture === soundListTexutre[randTexture]) {
          randTexture = Math.floor(Math.random() * 4)
        }
        if (randTexture === 0) {
          soundEntityTexture.setAttribute('gltf-model', balancingISpy)
          soundEntityTexture.setAttribute('animation-mixer', 'loop: repeat')
          soundEntityTexture.setAttribute('sound', iSpyTextureBumpy)
        } else if (randTexture === 1) {
          soundEntityTexture.setAttribute('gltf-model',samISpy)
          soundEntityTexture.setAttribute('animation-mixer', 'loop: repeat')
          soundEntityTexture.setAttribute('sound', iSpyTextureFurry)
        } else if(randTexture === 2) {
          soundEntityTexture.setAttribute('gltf-model',ziggyISpy)
          soundEntityTexture.setAttribute('animation-mixer', 'loop: repeat')
          soundEntityTexture.setAttribute('sound', iSpyTextureRough)
        } else {
          soundEntityTexture.setAttribute('gltf-model',tappyISpy)
          soundEntityTexture.setAttribute('animation-mixer', 'loop: repeat')
          soundEntityTexture.setAttribute('sound', iSpyTextureSmooth)
        }
  
      const nextAnimation = () => {
        // Color script
        randColor = Math.floor(Math.random() * 4)
        while (currentColor === soundListColor[randColor]) {
          randColor = Math.floor(Math.random() * 4)
        }
        if (randColor === 0) {
          soundEntityColor.setAttribute('gltf-model', balancingISpy)
          soundEntityColor.setAttribute('animation-mixer', 'loop: repeat')
          soundEntityColor.setAttribute('sound', iSpyColorRed)
        } else if (randColor === 1) {
          soundEntityColor.setAttribute('gltf-model',samISpy)
          soundEntityColor.setAttribute('animation-mixer', 'loop: repeat')
          soundEntityColor.setAttribute('sound', iSpyColorBlue)
        } else if(randColor === 2) {
          soundEntityColor.setAttribute('gltf-model',ziggyISpy)
          soundEntityColor.setAttribute('animation-mixer', 'loop: repeat')
          soundEntityColor.setAttribute('sound', iSpyColorGreen)
        } else {
          soundEntityColor.setAttribute('gltf-model',tappyISpy)
          soundEntityColor.setAttribute('animation-mixer', 'loop: repeat')
          soundEntityColor.setAttribute('sound', iSpyColorYellow)
        }
  
        // Flavor Script
        randFlavor = Math.floor(Math.random() * 4)
        while (currentFlavor === soundListFlavor[randFlavor]) {
          randFlavor = Math.floor(Math.random() * 4)
        }
        if (randFlavor === 0) {
          soundEntityFlavor.setAttribute('gltf-model', balancingISpy)
          soundEntityFlavor.setAttribute('animation-mixer', 'loop: repeat')
          soundEntityFlavor.setAttribute('sound', iSpyFlavorSalty)
        } else if (randFlavor === 1) {
          soundEntityFlavor.setAttribute('gltf-model',samISpy)
          soundEntityFlavor.setAttribute('animation-mixer', 'loop: repeat')
          soundEntityFlavor.setAttribute('sound', iSpyFlavorSour)
        } else if(randFlavor === 2) {
          soundEntityFlavor.setAttribute('gltf-model',ziggyISpy)
          soundEntityFlavor.setAttribute('animation-mixer', 'loop: repeat')
          soundEntityFlavor.setAttribute('sound', iSpyFlavorSavory)
        } else {
          soundEntityFlavor.setAttribute('gltf-model',tappyISpy)
          soundEntityFlavor.setAttribute('animation-mixer', 'loop: repeat')
          soundEntityFlavor.setAttribute('sound', iSpyFlavorSweet)
        }
  
        // Shape Script
        randShape = Math.floor(Math.random() * 4)
        while (currentShape === soundListShape[randShape]) {
          randShape = Math.floor(Math.random() * 4)
        }
        if (randShape === 0) {
          soundEntityShape.setAttribute('gltf-model', balancingISpy)
          soundEntityShape.setAttribute('animation-mixer', 'loop: repeat')
          soundEntityShape.setAttribute('sound', iSpyShapeCircle)
        } else if (randShape === 1) {
          soundEntityShape.setAttribute('gltf-model',samISpy)
          soundEntityShape.setAttribute('animation-mixer', 'loop: repeat')
          soundEntityShape.setAttribute('sound', iSpyShapeDiamond)
        } else if(randShape === 2) {
          soundEntityShape.setAttribute('gltf-model',ziggyISpy)
          soundEntityShape.setAttribute('animation-mixer', 'loop: repeat')
          soundEntityShape.setAttribute('sound', iSpyShapeSquare)
        } else {
          soundEntityShape.setAttribute('gltf-model',tappyISpy)
          soundEntityShape.setAttribute('animation-mixer', 'loop: repeat')
          soundEntityShape.setAttribute('sound', iSpyShapeTriangle)
        }
  
        // Size Script
        randSize = Math.floor(Math.random() * 4)
        while (currentSize === soundListSize[randSize]) {
          randSize = Math.floor(Math.random() * 4)
        }
        if (randSize === 0) {
          soundEntitySize.setAttribute('gltf-model', balancingISpy)
          soundEntitySize.setAttribute('animation-mixer', 'loop: repeat')
          soundEntitySize.setAttribute('sound', iSpySizeLong)
        } else if (randSize === 1) {
          soundEntitySize.setAttribute('gltf-model',samISpy)
          soundEntitySize.setAttribute('animation-mixer', 'loop: repeat')
          soundEntitySize.setAttribute('sound', iSpySizeSmall)
        } else if(randSize === 2) {
          soundEntitySize.setAttribute('gltf-model',ziggyISpy)
          soundEntitySize.setAttribute('animation-mixer', 'loop: repeat')
          soundEntitySize.setAttribute('sound', iSpySizeTall)
        } else {
          soundEntitySize.setAttribute('gltf-model',tappyISpy)
          soundEntitySize.setAttribute('animation-mixer', 'loop: repeat')
          soundEntitySize.setAttribute('sound', iSpySizeWide)
        }
  
        // Texture Script
        randTexture = Math.floor(Math.random() * 4)
        while (currentTexture === soundListTexutre[randTexture]) {
          randTexture = Math.floor(Math.random() * 4)
        }
        if (randTexture === 0) {
          soundEntityTexture.setAttribute('gltf-model', balancingISpy)
          soundEntityTexture.setAttribute('animation-mixer', 'loop: repeat')
          soundEntityTexture.setAttribute('sound', iSpyTextureBumpy)
        } else if (randTexture === 1) {
          soundEntityTexture.setAttribute('gltf-model',samISpy)
          soundEntityTexture.setAttribute('animation-mixer', 'loop: repeat')
          soundEntityTexture.setAttribute('sound', iSpyTextureFurry)
        } else if(randTexture === 2) {
          soundEntityTexture.setAttribute('gltf-model',ziggyISpy)
          soundEntityTexture.setAttribute('animation-mixer', 'loop: repeat')
          soundEntityTexture.setAttribute('sound', iSpyTextureRough)
        } else {
          soundEntityTexture.setAttribute('gltf-model',tappyISpy)
          soundEntityTexture.setAttribute('animation-mixer', 'loop: repeat')
          soundEntityTexture.setAttribute('sound', iSpyTextureSmooth)
        }
      }
      nextButton.onclick = nextAnimation  // Switch to the next animation when the button is pressed.
    },
  })
  
  export {nextButtonComponent}
  