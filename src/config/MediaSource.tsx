
let IMGPATHSOURCE = `assets/img/`,
    VIDEOPATHSOURCE = `assets/video/`

const ImageSource = ({
    global: {
        logo: require(`../${IMGPATHSOURCE}logotype.png`),
    },
    video: {
        case1:  require(`../${VIDEOPATHSOURCE}citrix.mp4`),
        case2:  require(`../${VIDEOPATHSOURCE}rainforest.mp4`),
        case3: require(`../${VIDEOPATHSOURCE}BrokenBack.mp4`)
    }
})

export default ImageSource