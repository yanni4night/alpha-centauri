 var scene = new THREE.Scene();

 var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);

 var renderer = new THREE.WebGLRenderer();

 renderer.setSize(window.innerWidth, window.innerHeight);

 document.body.appendChild(renderer.domElement);
 var geometry = new THREE.SphereGeometry(4, 10, 10);
 var material = new THREE.MeshBasicMaterial({
     color: 0xff0000
 });

  var cmaterial = new THREE.MeshBasicMaterial({
     color: 0x0000ff
 });

 var circleGeometry = new THREE.TorusGeometry(50, .2, 60 ,60);

 var cube = new THREE.Mesh(geometry, material);
 scene.add(cube);
 var circle = new THREE.Mesh(circleGeometry, cmaterial);
 scene.add(circle);


 const R = 50;

 cube.position.x = R;
 cube.position.z = R;
 cube.position.y = 0;
 var r = 0;

 circle.rotation.x = -Math.PI / 2;

 camera.position.z = 90;
 camera.position.x = 10;
 camera.position.y = 20;

 function render() {
     requestAnimationFrame(render);
     cube.rotation.x += 0.1;
     cube.rotation.y += 0.1;
     r += 0.01;
     cube.position.x = R * Math.cos(r);
     cube.position.z = R * Math.sin(r);
     renderer.render(scene, camera);
 }
 render();