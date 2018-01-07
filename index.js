const width = window.innerWidth
const height = window.innerHeight

const scene = new THREE.Scene()
const clock = new THREE.Clock()

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(width, height)
document.body.appendChild(renderer.domElement)

const skyboxGeometry = new THREE.CubeGeometry(10000, 10000, 10000)
const skyboxMaterial = new THREE.MeshBasicMaterial({
  color: 0xcccccc,
  side: THREE.BackSide
})
const skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial)

scene.add(skybox)

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(0, 300, 200)

scene.add(pointLight)

const cylinderGeometry = new THREE.CylinderGeometry(50, 50, 100, 32)
const cylinderMaterial = new THREE.MeshLambertMaterial({ color: 0x1ec876 })
const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial)
scene.add(cylinder)

const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000)

camera.position.y = 160
camera.position.z = 400

camera.lookAt(cylinder.position)

scene.add(camera)

const controls = new THREE.OrbitControls(camera)

render()

function render() {
  requestAnimationFrame(render)
  cylinder.rotation.x -= clock.getDelta()
  renderer.render(scene, camera)
}
