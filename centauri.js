/**
 * Copyright (C) 2016 yanni4night.com
 * centauri.js
 *
 * changelog
 * 2016-10-14[17:55:14]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.z = 90;
camera.position.x = 40;
camera.position.y = -20;
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

function initPathway() {
    var cmaterial = new THREE.MeshBasicMaterial({
        color: 0x273F3E
    });
    var circleGeometry = new THREE.TorusGeometry(50, .2, 60, 60);
    var circle = new THREE.Mesh(circleGeometry, cmaterial);
    circle.rotation.x = -Math.PI / 2;
    scene.add(circle);
}

const R = 50;

function createSphere(radians) {
    var geometry = new THREE.SphereGeometry(4, 10, 10);
    var material = new THREE.MeshLambertMaterial({
        color: 0xffffff
    });

    var ball = new THREE.Mesh(geometry, material);
    ball.position.x = Math.cos(radians);
    ball.position.y = 0;
    ball.position.z = Math.sin(radians);
    ball.radians = radians;
    scene.add(ball);
    return ball;
}

const balls = [];
balls.push(createSphere(0));
balls.push(createSphere(Math.PI * 2 / 3));
balls.push(createSphere(Math.PI * 4 / 3));

var directionalLight = new THREE.DirectionalLight(0xfff0ff, .5);
directionalLight.position.set(40, -20, 90);
scene.add(directionalLight);

function render() {
    requestAnimationFrame(render);
    balls.forEach(ball => {
        ball.rotation.x += 0.1;
        ball.rotation.y += 0.1;
        ball.radians += 0.01;
        ball.position.x = R * Math.cos(ball.radians);
        ball.position.z = R * Math.sin(ball.radians);
    });

    renderer.render(scene, camera);
}
initPathway();
render();