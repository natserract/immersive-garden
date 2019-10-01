
let IMGPATHSOURCE:string = `assets/img/`,
    VIDEOPATHSOURCE:string = `assets/video/`

const ImageSource = ({
    global: {
        logo: require(`../${IMGPATHSOURCE}logotype.png`),
        logoSmall: require(`../${IMGPATHSOURCE}logotype--gray.png`),
        cursor: require(`../${IMGPATHSOURCE}arrow-cursor.png`),
        cursorMenu: require(`../${IMGPATHSOURCE}close-cursor.png`), 
    },
    video: {
        case1:  require(`../${VIDEOPATHSOURCE}citrix.mp4`),
        case2:  require(`../${VIDEOPATHSOURCE}rainforest.mp4`),
        case3: require(`../${VIDEOPATHSOURCE}BrokenBack.mp4`)
    },
    arrow: require(`../${IMGPATHSOURCE}arrow-right--black.png`), 
})

export default ImageSource