export const getRandomOnetoFour = () => {
    const random = Math.floor(Math.random() * 4 + 1)
    return random
}

export const getLinkURL = () => {
    let linkURL = ''
    const random = getRandomOnetoFour()
    switch (random) {
        case 1:
            linkURL = "./croatia/index.html"
            break;
        case 2:
            linkURL = "./france/index.html"
            break;
        case 3:
            linkURL = "./india/index.html"
            break;
        case 4:
            linkURL = "./japan/index.html"
            break;
    }
    return linkURL
}

export const injectURL = (element) => {
    element.href = getLinkURL()       //not sure if should be .href or .innerHTML
}