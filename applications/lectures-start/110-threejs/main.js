import * as THREE from '../../libs/three.js-r132/build/three.module.js';

console.log("THREE", THREE);

document.addEventListener("DOMContentLoaded", () => {
    // setup the scene
    const scene = new THREE.Scene();
                                        // 1 unit in width, height and depth
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    // optical properties of the object
    const material = new THREE.MeshBasicMaterial({color: "#0000FF"});
    //3D objects are represented as mesh
                                // shape of object is geometry
    const cube = new THREE.Mesh(geometry, material)
    
    scene.add(cube);
    cube.position.set(0,0, -2);
        //rotation is defined by radians
                        // 45 degrees
    cube.rotation.set(0, Math.PI/4, 0);

    const camera = new THREE.PerspectiveCamera();
    camera.position.set(1, 1, 5);

                                // creating this webGLrenderer we also create a canvas element
    const renderer = new THREE.WebGLRenderer({alpha: true});
    renderer.setSize(500, 500);
    renderer.render(scene, camera);

    const video = document.createElement("video");
    navigator.mediaDevices.getUserMedia({video: true}).then((stream) => {
        video.srcObject = stream;
        video.play();
    });

    video.style.position = "absolute";
    video.style.width = renderer.domElement.width;
    video.style.height = renderer.domElement.height;
    renderer.domElement.style.position = "absolute";

    document.body.appendChild(video);
    // attach canvas element to the scene
    document.body.appendChild(renderer.domElement);

    // psuedo code
    /*
    const ar = new SOME_AR_ENGINE();
    while (true) {
        await nextVideoFrameReady();
        const {position, rotation } = ar.computeObjectPose(video);
        cube.position = position;
        cube.rotation = rotation;
    }
    */
});