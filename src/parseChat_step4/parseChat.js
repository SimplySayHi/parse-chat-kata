
export const parseChat = chatString => {
    const regExp = /\d{2}:\d{2}:\d{2}/g;
    const dates = chatString.match( regExp );

    return chatString
            .split( regExp )
            .filter(string => !!string)
            .map((string, index) => {
                const splitColons = string.trim().split(' : ');
                const date = dates[index];
                const type = splitColons[0];
                const sentence = splitColons[1];

                return {
                    date,
                    mention: `${date} ${type} : `,
                    sentence: `${sentence}`,
                    type: type.toLowerCase()
                }
            })
}
