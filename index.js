/*
  - only need to render cylinder and spheres once
  - register click event on circles
  - how to position circles?
  - pan and zoom for scene
*/

const width = window.innerWidth
const height = window.innerHeight

const scene = new THREE.Scene()
const clock = new THREE.Clock()

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(width, height)
document.body.appendChild(renderer.domElement)

const skyboxGeometry = new THREE.CubeGeometry(10000, 10000, 10000)
const skyboxMaterial = new THREE.MeshBasicMaterial({
  color: 0x000000,
  side: THREE.BackSide
})
const skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial)

scene.add(skybox)

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(0, 300, 200)

scene.add(pointLight)

const cubeGeometry = new THREE.CubeGeometry(100, 100, 100)
const cubeMaterial = new THREE.MeshLambertMaterial({ color: 0x1ec876 })
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)

cube.rotation.y = Math.PI * 45 / 180

scene.add(cube)

const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000)

camera.position.y = 160
camera.position.z = 400

camera.lookAt(cube.position)

scene.add(camera)

render()

function render() {
  renderer.render(scene, camera)
  cube.rotation.y -= clock.getDelta()
  requestAnimationFrame(render)
}
