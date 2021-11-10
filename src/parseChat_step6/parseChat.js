
export const parseChat = chatString => {
    const chatMessages = chatString.match(/\d{2}:\d{2}:\d{2} (.[^.]*)/g);

    return chatMessages
        .map(string => {
            const regExp = /((\d{2}:\d{2}:\d{2}) (.[^.]*) : )/g;
            const newString = `${string}.`;
            const [ mention, date, type, sentence ] = newString.split(regExp).filter(str => !!str);

            return {
                date,
                mention,
                sentence,
                type: type === 'Emanuele Querzola' ? 'agent' : 'customer'
            }
        })
}
