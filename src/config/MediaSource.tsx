let IMGPATHSOURCE: string = `assets/img/`;
let VIDEOPATHSOURCE: string = `assets/video/`;

const loadImages = (path: string, images: string[]) => {
    return images.map(image => require(`../${path}${image}`));
};

const loadImage = (path: string, imageName: string) => {
    return require(`../${path}${imageName}`);
};

const ImageSource = {
    global: {
        logo: loadImage(IMGPATHSOURCE, 'logotype.png'),
        logoSmall: loadImage(IMGPATHSOURCE, 'logotype--gray.png'),
        cursor: loadImage(IMGPATHSOURCE, 'arrow-cursor.png'),
        cursorMenu: loadImage(IMGPATHSOURCE, 'close-cursor.png'),
    },
    video: {
        case1: loadImage(VIDEOPATHSOURCE, 'case-1.mp4'),
        case2: loadImage(VIDEOPATHSOURCE, 'case-2.mp4'),
        case3: loadImage(VIDEOPATHSOURCE, 'case-3.mp4'),
        case4: loadImage(VIDEOPATHSOURCE, 'case-4.mp4'),
        case5: loadImage(VIDEOPATHSOURCE, 'case-5.mp4'),
        case6: loadImage(VIDEOPATHSOURCE, 'case-6.mp4')
    },
    arrow: loadImage(IMGPATHSOURCE, 'arrow-right--black.png'),
    arrowUp: loadImage(IMGPATHSOURCE, 'arrow-up--black.png'),
    icon_submit: loadImage(IMGPATHSOURCE, 'arrow-right-bold--white.png'),
    poster: {
        project1: loadImage(IMGPATHSOURCE, 'poster-project-1.jpg'),
        project2: loadImage(IMGPATHSOURCE, 'poster-project-2.jpg'),
        project3: loadImage(IMGPATHSOURCE, 'poster-project-3.jpg'),
        project4: loadImage(IMGPATHSOURCE, 'poster-project-4.jpg'),
        project5: loadImage(IMGPATHSOURCE, 'poster-project-5.jpg'),
        project6: loadImage(IMGPATHSOURCE, 'poster-project-6.jpg'),
    },
    cases: {
        caseProject1: loadImages(IMGPATHSOURCE, [
            'cases-project1-image1.jpg',
            'cases-project1-image2.jpg',
            'cases-project1-image3.jpg',
            'cases-project1-image4.jpg',
            'cases-project1-image5.jpg',
            'cases-project1-image6.jpg',
            'cases-project1-image7.jpg',
        ]),
        caseProject2: loadImages(IMGPATHSOURCE, [
            'cases-project2-image1.jpg',
            'cases-project2-image2.jpg',
            'cases-project2-image3.jpg',
            'cases-project2-image4.jpg',
            'cases-project2-image5.jpg',
            'cases-project2-image6.jpg',
            'cases-project2-image7.jpg',
        ]),
        caseProject3: loadImages(IMGPATHSOURCE, [
            'cases-project3-image1.jpg',
            'cases-project3-image2.jpg',
            'cases-project3-image3.jpg',
            'cases-project3-image4.jpg',
            'cases-project3-image5.jpg',
            'cases-project3-image6.jpg',
            'cases-project3-image7.jpg',
        ]),
        caseProject4: loadImages(IMGPATHSOURCE, [
            'cases-project4-image1.jpg',
            'cases-project4-image2.jpg',
            'cases-project4-image3.jpg',
            'cases-project4-image4.jpg',
        ]),
        caseProject5: loadImages(IMGPATHSOURCE, [
            'cases-project5-image1.jpg',
            'cases-project5-image2.jpg',
            'cases-project5-image3.jpg',
            'cases-project5-image4.jpg',
            'cases-project5-image5.jpg',
            'cases-project5-image6.jpg',
            'cases-project5-image7.jpg',
        ]),
        caseProject6: loadImages(IMGPATHSOURCE, [
            'cases-project6-image1.jpg',
            'cases-project6-image2.jpg',
            'cases-project6-image3.jpg',
            'cases-project6-image4.jpg',
            'cases-project6-image5.jpg',
            'cases-project6-image6.jpg',
            'cases-project6-image7.jpg',
        ])
    }
};

export default ImageSource;