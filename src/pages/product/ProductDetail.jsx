// import React, { useEffect, useState, useRef } from "react";
// import { useParams } from "react-router-dom";
// import * as THREE from "../../build/three.module.js";
// import { ARButton } from "../../jsm/webxr/ARButton.js";
// import { VRButton } from "../../jsm/webxr/VRButton.js";
// import { OrbitControls } from "../../jsm/controls/OrbitControls.js";
// import { GLTFLoader } from "../../jsm/loaders/GLTFLoader.js";
// import { RGBELoader } from "../../jsm/loaders/RGBELoader.js";
// import HdrFile from "../../textures/photo_studio_01_1k.hdr";
// import { RoughnessMipmapper } from "../../jsm/utils/RoughnessMipmapper.js";
// import "./ProductDetail.css";
// import wardrobe from "../../3d/wardrobe.glb";
// import chair from "../../3d/chair.glb";
// import table from "../../3d/table.glb";
// import sofa from "../../3d/sofa.glb";
// import mirror from "../../3d/mirror.glb";
// import bed from "../../3d/bed.glb";
// import lamp from "../../3d/mirror.glb";
// import toilet from "../../3d/toilet.glb";

// const ProductDetail = () => {
//   const [scene, setScene] = useState(null);
//   const [camera, setCamera] = useState(null);
//   const [renderer, setRenderer] = useState(null);
//   const [currentObject, setCurrentObject] = useState(null);
//   const [controls, setControls] = useState(null);
//   const [isAR, setIsAR] = useState(false);
//   const [envmap, setEnvmap] = useState(null);
//   const [reticle, setReticle] = useState(null);
//   const [hitTestSource, setHitTestSource] = useState(null);
//   const [hitTestSourceRequested, setHitTestSourceRequested] = useState(false);
//   const [model, setModel] = useState();

//   const [pmremGenerator, setPMRemGenerator] = useState(null);

//   const placeButtonRef = useRef(null);

//   const { title } = useParams();
//   const data = {
//     wardrobe: wardrobe,
//     chair: chair,
//     table: table,
//     sofa: sofa,
//     mirror: mirror,
//     bed: bed,
//     lamp: lamp,
//     toilet: toilet,
//   }
//   // const model = `/src/3d/${title}.glb`;

//   useEffect(() => {
//     setScene(new THREE.Scene());
//     setRenderer(new THREE.WebGLRenderer({ antialias: true, alpha: true }));
//     setReticle(
//       new THREE.Mesh(
//         new THREE.RingBufferGeometry(0.15, 0.2, 32).rotateX(-Math.PI / 2),
//         new THREE.MeshBasicMaterial()
//       )
//     );
//     setCamera(
//       new THREE.PerspectiveCamera(
//         70,
//         window.innerWidth / window.innerHeight,
//         0.001,
//         200
//       )
//     );

//   }, []);

//   useEffect(() => {
//     if (scene && renderer && reticle) {
//       setControls(new OrbitControls(camera, renderer.domElement));
//       setPMRemGenerator(new THREE.PMREMGenerator(renderer));
//     }
//   }, [scene, renderer, reticle]);

//   useEffect(() => {
//     if (controls) {
//       init();
//       animate();
//       placeButtonRef.current = document.getElementById("place-button");

//       if (currentObject != null) {
//         scene.remove(currentObject);
//       }

//       // loadModel(id);
//       loadModel(data[title], function (currentObject) {
//         // this function will be executed only after the model is loaded
//         setCurrentObject(currentObject);
//         scene.add(currentObject);

//         console.log("hitTestSource : ", hitTestSource);
//         console.log("hitTestSourceRequested : ", hitTestSourceRequested);

//         arPlace();

//         const box = new THREE.Box3();
//         box.setFromObject(currentObject);
//         box.center(controls.target);

//         controls.update();
//         render();
//       });
//     }
//   }, [controls]);

//   $("#ARButton").click(function () {
//     setCurrentObject((prev) => {
//       prev.visible = false;
//       return prev;
//     });
//     setIsAR(true); // I have tried to set it to true here
//   });

//   useEffect(() => {
//     console.log("hitTestSource : ", hitTestSource);
//     console.log("======");
//   }, [hitTestSource, hitTestSourceRequested]);

//   const clickHanler = () => {
//     arPlace();
//   };

//   const init = () => {
//     const container = document.createElement("div");
//     document.body.appendChild(container);

//     // scene = new THREE.Scene();

//     const directionalLight = new THREE.DirectionalLight(0xdddddd, 1);
//     directionalLight.position.set(0, 0, 1).normalize();
//     scene.add(directionalLight);

//     const ambientLight = new THREE.AmbientLight(0x222222);
//     scene.add(ambientLight);

//     renderer.setPixelRatio(window.devicePixelRatio);
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.xr.enabled = true;
//     container.appendChild(renderer.domElement);

//     setEnvmap(null); // Initialize envmap state

//     pmremGenerator.compileEquirectangularShader();

//     controls.addEventListener("change", render);
//     controls.minDistance = 2;
//     controls.maxDistance = 10;
//     controls.target.set(0, 0, -0.2);
//     controls.enableDamping = true;
//     controls.dampingFactor = 0.05;

//     // document.body.appendChild(VRButton.createButton(renderer));

//     const options = {
//       requiredFeatures: ["hit-test"],
//       optionalFeatures: ["dom-overlay"],
//     };

//     options.domOverlay = { root: document.getElementById("place-button") };

//     document.body.appendChild(ARButton.createButton(renderer, options));

//     reticle.matrixAutoUpdate = false;
//     reticle.visible = false;
//     scene.add(reticle);

//     window.addEventListener("resize", onWindowResize, false);
//     // ... Your existing touch event listeners ...

//     // Example React ref for accessing DOM element directly
//   };

//   const arPlace = () => {
//     if (reticle.visible) {
//       currentObject.position.setFromMatrixPosition(reticle.matrix);
//       setCurrentObject((currentObject.visible = true));
//     }
//   };

//   const loadModel = (model, callback) => {
//     new RGBELoader()
//       .setDataType(THREE.UnsignedByteType)
//       .load(HdrFile, function (texture) {
//         setEnvmap(pmremGenerator.fromEquirectangular(texture).texture);

//         setScene((prev) => {
//           prev.environment = envmap;
//           return prev;
//         });
//         texture.dispose();
//         pmremGenerator.dispose();
//         render();

//         const loader = new GLTFLoader();
//         loader.load(
//           data[title],
//           function (glb) {
//             callback(glb.scene); // call the callback function with the loaded model as an argument
//           },
//           undefined,
//           function (error) {
//             console.log(error);
//           }
//         );
//       });
//   };

//   const onWindowResize = () => {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();

//     renderer.setSize(window.innerWidth, window.innerHeight);
//   };

//   const rotateObject = () => {
//     if (currentObject && reticle.visible) {
//       setCurrentObject((currentObject.rotation.y += deltaX / 100));
//     }
//   };

//   const animate = () => {
//     renderer.setAnimationLoop(render);
//     requestAnimationFrame(animate);
//     controls.update();
//   };

//   const render = (timestamp, frame) => {
//     console.log("Before");
//     console.log("Frrame: ", frame);
//     console.log("IsAR: ", isAR); // Why thhe isAR is still false after clicking the ARButton? 
//     if (frame && isAR) {
//       console.log("==== After ====");
//       console.log("Frrame: ", frame);
//       console.log("IsAR: ", isAR);
//       const referenceSpace = renderer.xr.getReferenceSpace();
//       const session = renderer.xr.getSession();

//       if (hitTestSourceRequested === false) {
//         console.log("hitTestSourceRequested is false");
//         session.requestReferenceSpace("viewer").then(function (referenceSpace) {
//           session
//             .requestHitTestSource({ space: referenceSpace })
//             .then(function (source) {
//               setHitTestSource(source);
//             });
//         });

//         session.addEventListener("end", function () {
//           setHitTestSourceRequested(false);
//           setHitTestSource(null);

//           setIsAR(false);
//           reticle.visible = false;

//           const box = new THREE.Box3();
//           box.setFromObject(currentObject);
//           box.center(controls.target);

//           placeButtonRef.current.style.display = "none";
//         });

//         setHitTestSourceRequested(true);
//       }

//       if (hitTestSource) {
//         console.log("hitTestSource is true");
//         const hitTestResults = frame.getHitTestResults(hitTestSource);

//         if (hitTestResults.length) {
//           const hit = hitTestResults[0];

//           placeButtonRef.current.style.display = "block";

//           setReticle({
//             ...reticle,
//             visible: true,
//             matrix: new THREE.Matrix4().fromArray(
//               hit.getPose(referenceSpace).transform.matrix
//             ),
//           });
//         } else {
//           setReticle({ ...reticle, visible: false });
//           placeButtonRef.current.style.display = "none";
//         }
//       }
//     }

//     renderer.render(scene, camera);
//   };

//   return (
//     <>
//       <div
//         id="container"
//         className="bg-[##464D5C]"
//         style={{ position: "fixed" }}
//       ></div>

//       <button type="button" id="place-button" onClick={clickHanler}>
//         PLACE
//       </button>
//     </>
//   );
// };

// export default ProductDetail;

// Wrong way to use
const ProductDetail = () => {
  const content = document.querySelector("#content");
  content.style.display = "block";
  content.style.backgorundColor = "orange";

  const AR_Btn = document.querySelector("#ARButton");
  console.log("AR_B Button: ", AR_Btn);
  AR_Btn.style.display = "block";
  return (
    <>
    </>
  )
}

export default ProductDetail;
