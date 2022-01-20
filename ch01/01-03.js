
function createCube(scene) {
    const cubeGeometry = new THREE.BoxGeometry(4, 4, 4)
    const cubeMaterial = new THREE.MeshLambertMaterial({
        color: 0xFF0000,
        wireframe: false
    })
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
    cube.position.set(-4, 2, 0)
    cube.castShadow = true

    scene.add(cube)
}

function createSphere(scene) {
    const sphereGeometry = new THREE.SphereGeometry(4, 20, 20)
    const sphereMaterial = new THREE.MeshLambertMaterial({
        color: 0x7777FF,
        wireframe: false
    })
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
    sphere.position.set(20, 4, 2)
    sphere.castShadow = true

    scene.add(sphere)
}

function createPlane(scene) {
    const planeGeometry = new THREE.PlaneGeometry(60, 20)
    const planeMaterial = new THREE.MeshLambertMaterial({
        color: 0xAAAAAA,
        wireframe: false
    })
    const plane = new THREE.Mesh(planeGeometry, planeMaterial)
    plane.rotation.x = -0.5 * Math.PI
    plane.position.set(15, 0, 0)
    plane.receiveShadow = true
    
    scene.add(plane)
}

function createLights(scene) {
    // --- add spotlight for the shadows
    const spotLight = new THREE.SpotLight(0xFFFFFF)
    spotLight.position.set(-40, 40, -15)
    spotLight.castShadow = true
    spotLight.shadow.mapSize = new THREE.Vector2(1024, 1024)
    spotLight.shadow.camera.far = 130
    spotLight.shadow.camera.near = 40

    scene.add(spotLight)

    // --- ambient light
    const ambientLight = new THREE.AmbientLight(0x353535)

    scene.add(ambientLight)
}

function createCamera(scene) {
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000)
    camera.position.set(-30, 40, 30)
    camera.lookAt(scene.position)

    return camera
}

function createRenderer(scene, camera) {
    const renderer = new THREE.WebGLRenderer()
    renderer.setClearColor(new THREE.Color(0x000000))
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.shadowMap.enabled = true

    document.getElementById("webgl-output").appendChild(renderer.domElement)

    renderer.render(scene, camera)
}

function createTree(scene) {
    // --- trunk
    // 旧版 Three.js 中 CubeGeometry 是 BoxGeometry 的一个别名，新版本已移除
    // Three.js r125 removed support for Geometry
    const trunk = new THREE.BoxGeometry(1, 8, 1)
    const trunkMesh = new THREE.Mesh(trunk, new THREE.MeshLambertMaterial({
        color: 0x8b4513
    }))

    trunkMesh.position.set(-10, 4, 0)
    trunkMesh.castShadow = true
    trunkMesh.receiveShadow = true

    scene.add(trunkMesh)

    // --- leaves

    const leaves = new THREE.SphereGeometry(4)
    const leavesMesh = new THREE.Mesh(leaves, new THREE.MeshLambertMaterial({
        color: 0x00ff00
    }))
    
    leavesMesh.position.set(-10, 12, 0)
    leavesMesh.castShadow = true
    leavesMesh.receiveShadow = true
    
    scene.add(leavesMesh)
}

function createHouse(scene) {
    // root

    const roof = new THREE.ConeGeometry(5, 4)
    const roofMesh = new THREE.Mesh(roof, new THREE.MeshLambertMaterial({
        color: 0x8b7213
    }))
    roofMesh.position.set(25, 8, 0)
    roofMesh.receiveShadow = true
    roofMesh.castShadow = true

    scene.add(roofMesh)

    // base

    const base = new THREE.CylinderGeometry(5, 5, 6)
    const baseMesh = new THREE.Mesh(base, new THREE.MeshLambertMaterial({
        color: 0xffe4e4
    }))
    baseMesh.position.set(25, 3, 0)
    baseMesh.receiveShadow = true
    baseMesh.castShadow = true

    scene.add(baseMesh)
}

function createGroundPlane(scene) {
    const planeGeometry = new THREE.PlaneGeometry(70, 50)
    const planeMaterial = new THREE.MeshLambertMaterial({
        color: 0x9acd32
    })
    const plane = new THREE.Mesh(planeGeometry, planeMaterial)
    plane.receiveShadow = true

    plane.rotation.x = -0.5 * Math.PI;
    plane.position.set(15, 0, 0)

    scene.add(plane)
}

function createBoundingWall(scene) {
    const wallLeft = new THREE.BoxGeometry(70, 2, 2)
    const wallRight = new THREE.BoxGeometry(70, 2, 2)
    const wallTop = new THREE.BoxGeometry(2, 2, 50)
    const wallBottom = new THREE.BoxGeometry(2, 2, 50)

    const wallMaterial = new THREE.MeshLambertMaterial({
        color: 0xa0522d
    })

    const wallLeftMesh = new THREE.Mesh(wallLeft, wallMaterial)
    const wallRightMesh = new THREE.Mesh(wallRight, wallMaterial)
    const wallTopMesh = new THREE.Mesh(wallTop, wallMaterial)
    const wallBottomMesh = new THREE.Mesh(wallBottom, wallMaterial)

    wallLeftMesh.position.set(15, 1, -25)
    wallRightMesh.position.set(15, 1, 25)
    wallTopMesh.position.set(-19, 1, 0)
    wallBottomMesh.position.set(49, 1, 0)

    scene.add(wallLeftMesh)
    scene.add(wallRightMesh)
    scene.add(wallTopMesh)
    scene.add(wallBottomMesh)
}

function init() {
    // --- Scene 
    const scene = new THREE.Scene()

    // Axes
    // const axes = new THREE.AxesHelper(20)

    // scene.add(axes)

    createTree(scene)

    // Cube
    // createCube(scene)

    // Sphere
    //createSphere(scene)

    createHouse(scene)

    // Plane
    //createPlane(scene)
    createGroundPlane(scene)
    createBoundingWall(scene)

    // lights
    createLights(scene)

    // --- Camera
    const camera = createCamera(scene)

    // --- renderer
    createRenderer(scene, camera)
}
