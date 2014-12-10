var THREE = require('three');

var scene, camera, renderer;

var geometry, material, mesh;

init();
animate();


function init () {

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera( 75, window.innerWidth/ window.innerHeight, 0.1, 1000);

  geometry = new THREE.BoxGeometry(200, 200, 200);
  material = new THREE.MeshBasicMaterial({color: 0xff00ff, wireframe: true});
  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
};

function animate() {
  requestAnimationFrame(animate);

/*  mesh.rotation.x += 0.01;*/
  /*mesh.rotation.y += 0.02;*/
  renderer.render(scene, camera);
}

function handleInput (e) {
  if (e.key === "Up") {
    console.log(camera);
  }

};

window.addEventListener('keydown', handleInput); 
