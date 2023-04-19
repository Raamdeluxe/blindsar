// Import the necessary modules
import * as THREE from "three";
import { ARButton } from "three/addons/webxr/ARButton.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

// Define the global variables
let container;
let camera, scene, renderer;
let controller;
let reticle, dot;
let hitTestSource = null;
let hitTestSourceRequested = false;
let dotPositions = [];
let width = 0;
let height = 0;

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

	// Create a reticle and add it to the scene
	reticle = new THREE.Mesh(
		new THREE.RingGeometry(0.15, 0.2, 32).rotateX(-Math.PI / 2),
		new THREE.MeshBasicMaterial()
	);
	reticle.matrixAutoUpdate = false;
	reticle.visible = false;
	scene.add(reticle);

	// Create the dot
	const dotGeometry = new THREE.SphereGeometry(0.005, 16, 16);
	const dotMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
	dot = new THREE.Mesh(dotGeometry, dotMaterial);
	dot.position.set(0, 0, 0);
	reticle.add(dot);

	// Function to create a text sprite
	function createTextSprite(message, fontColor) {
		const canvas = document.createElement("canvas");
		const context = canvas.getContext("2d");
		context.font = "bold 20px Arial"; // Change the font size here
		context.fillStyle = fontColor;
		context.fillText(message, 0, 20);

		const texture = new THREE.CanvasTexture(canvas);
		const spriteMaterial = new THREE.SpriteMaterial({
			map: texture,
			transparent: true,
		});
		const sprite = new THREE.Sprite(spriteMaterial);
		sprite.scale.set(0.01 * canvas.width, 0.01 * canvas.height, 1);

		return sprite;
	}

	// Create a text sprite for the distance and add it to the scene
	const distanceTextSprite = createTextSprite("", "white");
	scene.add(distanceTextSprite);

	// Models

	function loadModel(width, height, position, price) {
		const loader = new GLTFLoader();
		console.log(loader);

		loader.load(
			"https://raw.githubusercontent.com/Raamdeluxe/blindsar/main/static/models/Box/glTF/Box.gltf",
			(gltf) => {
				const model = gltf.scene;

				// Scale the model based on the width and height
				const scale = Math.min(width, height);
				model.scale.set(scale, scale, scale);

				// Set the model's position
				model.position.copy(position);

				// // Set the model's position (optional)
				// model.position.set(0, 0, 0);

				// Create a text sprite for the price
				const priceTextSprite = createTextSprite(`€${price}`, "white");

				// Set the position of the price text sprite to be at the center of the model
				priceTextSprite.position.set(0, 0, 0);

				// Add the price text sprite as a child of the model
				model.add(priceTextSprite);

				// Add the model to the scene
				scene.add(model);
			}
		);
	}

	async function fetchPrice(roundedWidth, roundedHeight) {
		try {
			const response = await fetch(
				"https://raw.githubusercontent.com/Raamdeluxe/blindsar/main/price.json"
			);
			const priceData = await response.json();

			const widthKey = roundedWidth.toString();
			const heightKey = roundedHeight.toString();

			if (priceData[widthKey] && priceData[widthKey][heightKey]) {
				const price = priceData[widthKey][heightKey];
				console.log(`Price: €${price}`);
				// Call loadModel with the price
				if (dotPositions.length === 3) {
					// Two distances measured (width and height)
					const width = dotPositions[0].distanceTo(dotPositions[1]); // Convert to cm
					const height = dotPositions[1].distanceTo(dotPositions[2]); // Convert to cm

					const modelPosition = new THREE.Vector3()
						.addVectors(dotPositions[0], dotPositions[2])
						.multiplyScalar(0.5);
					loadModel(width, height, modelPosition, price);
				}
			} else {
				console.log("Width or height not found in the price data");
			}
		} catch (error) {
			console.error("Error fetching price data:", error);
		}
	}

	function onSelect() {
		if (reticle.visible) {
			const hitDot = new THREE.Mesh(dotGeometry, dotMaterial);
			reticle.matrix.decompose(
				hitDot.position,
				hitDot.quaternion,
				hitDot.scale
			);
			scene.add(hitDot);

			dotPositions.push(hitDot.position.clone());

			let distance = 0;

			if (dotPositions.length >= 2) {
				// Create the line
				const lineGeometry = new THREE.BufferGeometry().setFromPoints(
					dotPositions
				);
				const lineMaterial = new THREE.LineBasicMaterial({
					color: 0xffffff,
					linewidth: 5,
					linecap: "round",
				});
				const line = new THREE.Line(lineGeometry, lineMaterial);
				scene.add(line);

				distance = dotPositions[dotPositions.length - 2].distanceTo(
					dotPositions[dotPositions.length - 1]
				);

				// Calculate the distance in centimeters
				const distanceCM = (distance * 100).toFixed(2);

				// Round the distance upwards in tens
				const roundedDistanceCM = Math.ceil(distanceCM / 10) * 10;

				// Update the text sprite content
				scene.remove(distanceTextSprite);
				distanceTextSprite.material.map.dispose();
				distanceTextSprite.material.dispose();
				const newTextSprite = createTextSprite(`${distanceCM} cm`, "white");
				newTextSprite.position
					.copy(dotPositions[dotPositions.length - 1])
					.add(new THREE.Vector3(0.05, 0.05, 0));

				// Scale the text sprite based on the distance from the camera
				const cameraDistance = camera.position.distanceTo(
					newTextSprite.position
				);
				const scale = 0.001 * cameraDistance;
				newTextSprite.scale.set(
					scale * newTextSprite.material.map.image.width,
					scale * newTextSprite.material.map.image.height,
					1
				);

				if (dotPositions.length % 2 == 0) {
					width = distance;
				} else {
					height = distance;
				}
				if (width !== 0 && height !== 0) {
					const areaM2 = (width * height).toFixed(2);
					console.log(`Area: ${areaM2} m²`);

					// Round the width and height upwards in tens
					const roundedWidthCM = Math.ceil((width * 100) / 10) * 10;
					const roundedHeightCM = Math.ceil((height * 100) / 10) * 10;

					// Fetch the price
					fetchPrice(roundedWidthCM, roundedHeightCM);
				}

				scene.add(newTextSprite);

				// Log the rounded distance in centimeters
				console.log(roundedDistanceCM);
			}

			// Remove the duplicate call to 'loadModel' as it's already being called inside 'fetchPrice'
			if (dotPositions.length === 3) {
				// Two distances measured (width and height)
				const width = dotPositions[0].distanceTo(dotPositions[1]); // Convert to cm
				const height = dotPositions[1].distanceTo(dotPositions[2]); // Convert to cm

				const modelPosition = new THREE.Vector3()
					.addVectors(dotPositions[0], dotPositions[2])
					.multiplyScalar(0.5);
			}
		}
	}

	controller = renderer.xr.getController(0);
	controller.addEventListener("select", onSelect);
	scene.add(controller);

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
