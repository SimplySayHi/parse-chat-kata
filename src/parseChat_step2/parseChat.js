
export const parseChat = chatString => {
    const splitNewLine = chatString.split(/\n/);

    return splitNewLine.map((string, index) => {
        const splitSpace = string.split(' ');
        const splitColons = string.split(' : ');
        const lastChar = splitNewLine.length === index + 1 ? '' : '\n';

        return {
            date: splitSpace[0],
            mention: `${splitColons[0]} : `,
            sentence: `${splitColons[1]}${lastChar}`,
            type: splitSpace[1].toLowerCase()
        }
    })
}
