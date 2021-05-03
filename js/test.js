var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshNormalMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
});

const animate = function() {
  cube.rotation.x += 0.02;
  //cube.rotation.y += 0.01;
  cube.rotation.z += 0.02;
  requestAnimationFrame( animate );
  renderer.render( scene, camera );
}
animate();