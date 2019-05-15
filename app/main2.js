import HammerjsImage  from 'hammerjs-image'

var hi = new HammerjsImage({
    id: '#photo_area',
    img: '12.jpg',
    maxScale: 2,
    minScale: 0.5
})

hi.onPreviewChange = function(hi, translate3d) {
    m_click()
}

function m_click() {
    var show = document.getElementById('show')
    show.innerHTML = ''
    show.appendChild(hi.translate3d())
}

function m_clickB64() {
    console.log(hi.translate3d().toDataURL())
}

function m_changeScale(el) {
    hi.setTranslate3dInfo({ scale: el.value }).preview()
}

function m_changeRotation(el) {
    hi.setTranslate3dInfo({ rotation: el.value }).preview()
}