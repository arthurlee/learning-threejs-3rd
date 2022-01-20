function init() {   
    // --- Scene 
    const scene = new THREE.Scene()

    // Axes
    // const axes = new THREE.AxesHelper(20)

    // scene.add(axes)

    // Cube
    const cubeGeometry = new THREE.BoxGeometry(4, 4, 4)
    const cubeMaterial = new THREE.MeshBasicMaterial({
        color: 0xFF0000,
        wireframe: false
    })
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
    cube.position.set(-4, 2, 0)

    scene.add(cube)

    // Sphere
    const sphereGeometry = new THREE.SphereGeometry(4, 20, 20)
    const sphereMaterial = new THREE.MeshBasicMaterial({
        color: 0x7777FF,
        wireframe: false
    })
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
    sphere.position.set(20, 4, 2)
    sphere.castShadow = true

    scene.add(sphere)

    // Plane
    const planeGeometry = new THREE.PlaneGeometry(60, 20)
    const planeMaterial = new THREE.MeshBasicMaterial({
        color: 0xAAAAAA,
        wireframe: false
    })
    const plane = new THREE.Mesh(planeGeometry, planeMaterial)
    plane.rotation.x = -0.5 * Math.PI
    plane.position.set(15, 0, 0)
    plane.receiveShadow = true
    
    scene.add(plane)

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

    // --- Camera
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000)
    camera.position.set(-30, 40, 30)
    camera.lookAt(scene.position)    

    // --- renderer
    const renderer = new THREE.WebGLRenderer()
    renderer.setClearColor(new THREE.Color(0x000000))
    renderer.setSize(window.innerWidth, window.innerHeight)

    document.getElementById("webgl-output").appendChild(renderer.domElement)

    renderer.render(scene, camera)
}
