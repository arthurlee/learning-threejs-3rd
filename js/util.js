
function initStats(type) {
    const panelType = (typeof type !== 'undefined' && type) && (!isNaN(type)) ? parseInt(type): 0
    const stats = new Stats()
    stats.showPanel(panelType)
    document.body.appendChild(stats.dom)

    return stats
}

