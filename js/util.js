
function initStats(type) {
    const panelType = (typeof type !== 'undefined' && type) && (!isNaN(type)) ? parseInt(type): 0
    const stats = new Stats()
    stats.showPanel(panelType)
    document.body.appendChild(stats.dom)

    return stats
}

function initTrackballControls(camera, renderer) {
    const trackballControls = new THREE.TrackballControls(camera, renderer.domElement)
    trackballControls.rotateSpeed = 1.0
    trackballControls.zoomSpeed = 1.2
    trackballControls.panSpeed = 0.6
    trackballControls.noZoom = false
    trackballControls.noPan = false
    trackballControls.staticMoving = true
    trackballControls.dynamicDampingFactor = 0.3
    trackballControls.keys = [65, 83, 68]

    return trackballControls
}