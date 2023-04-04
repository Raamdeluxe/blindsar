// Import the necessary modules
import * as THREE from "three";
import { ARButton } from "three/addons/webxr/ARButton.js";

// Define the global variables
let container;
let camera, scene, renderer;
let controller;
let reticle;
let hitTestSource = null;
let hitTestSourceRequested = false;

// Call the initialization and animation functions
init();
animate();

// Define the init() function
function init() {
	// Create a container for the 3D scene
	container = document.createElement("div");
	document.body.appendChild(container);

	// Create a new THREE.js scene
	scene = new THREE.Scene();

	// Create a new camera with a perspective projection
	camera = new THREE.PerspectiveCamera(
		70,
		window.innerWidth / window.innerHeight,
		0.01,
		20
	);

	// Add a hemisphere light to the scene
	const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
	light.position.set(0.5, 1, 0.25);
	scene.add(light);

	// Create a new WebGLRenderer and add it to the container
	renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.xr.enabled = true;
	container.appendChild(renderer.domElement);

	// Add the ARButton to the DOM
	document.body.appendChild(
		ARButton.createButton(renderer, { requiredFeatures: ["hit-test"] })
	);

	// Create a cylinder geometry for the 3D object
	const geometry = new THREE.CylinderGeometry(0.1, 0.1, 0.2, 32).translate(
		0,
		0.1,
		0
	);

	// Define the onSelect() function for the controller
	function onSelect() {
		// If the reticle is visible, create a new mesh and add it to the scene
		if (reticle.visible) {
			const material = new THREE.MeshPhongMaterial({
				color: 0xffffff * Math.random(),
			});
			const mesh = new THREE.Mesh(geometry, material);
			reticle.matrix.decompose(mesh.position, mesh.quaternion, mesh.scale);
			mesh.scale.y = Math.random() * 2 + 1;
			scene.add(mesh);
		}
	}

	// Get the controller and add the onSelect() function to it
	controller = renderer.xr.getController(0);
	controller.addEventListener("select", onSelect);
	scene.add(controller);

	// Create a reticle and add it to the scene
	reticle = new THREE.Mesh(
		new THREE.RingGeometry(0.15, 0.2, 32).rotateX(-Math.PI / 2),
		new THREE.MeshBasicMaterial()
	);
	reticle.matrixAutoUpdate = false;
	reticle.visible = false;
	scene.add(reticle);

	// Add an event listener for window resize
	window.addEventListener("resize", onWindowResize);
}

// Define the onWindowResize() function
function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
	renderer.setAnimationLoop(render); // Continuously render the scene
}

function render(timestamp, frame) {
	if (frame) {
		const referenceSpace = renderer.xr.getReferenceSpace(); // Get the XR reference space
		const session = renderer.xr.getSession(); // Get the XR session

		if (hitTestSourceRequested === false) {
			// If hit test source not requested
			// Request a hit test source from the XR session using the "viewer" reference space
			session.requestReferenceSpace("viewer").then(function (referenceSpace) {
				session
					.requestHitTestSource({ space: referenceSpace })
					.then(function (source) {
						hitTestSource = source;
					});
			});

			// Add event listener to reset hit test source and request it again when session ends
			session.addEventListener("end", function () {
				hitTestSourceRequested = false;
				hitTestSource = null;
			});

			hitTestSourceRequested = true; // Set hit test source requested to true
		}

		if (hitTestSource) {
			// If hit test source exists
			const hitTestResults = frame.getHitTestResults(hitTestSource); // Get hit test results

			if (hitTestResults.length) {
				// If there are hit test results
				const hit = hitTestResults[0]; // Get the first hit

				reticle.visible = true; // Set the reticle to visible
				reticle.matrix.fromArray(hit.getPose(referenceSpace).transform.matrix); // Set the position of the reticle to the hit location
			} else {
				reticle.visible = false; // Set the reticle to invisible if there are no hit test results
			}
		}
	}

	renderer.render(scene, camera); // Render the scene
}
