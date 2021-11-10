
export const parseChat = chatString => {
    const splitSpace = chatString.split(' ');
    const splitColons = chatString.split(' : ');
    
    return [{
        date: splitSpace[0],
        mention: `${splitColons[0]} : `,
        sentence: splitColons[1],
        type: splitSpace[1].toLowerCase()
    }];
}
