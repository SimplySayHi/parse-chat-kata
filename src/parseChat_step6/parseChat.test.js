
import { parseChat } from './parseChat';

const inputString = '14:24:32 Luca Galasso : Lorem ipsum dolor sit amet, consectetur adipiscing elit.14:26:15 Emanuele Querzola : I received the package, ut blandit lectus.';

const outputData = [{
    date: '14:24:32',
    mention: '14:24:32 Luca Galasso : ',
    sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    type: 'customer'
}, {
    date: '14:26:15',
    mention: '14:26:15 Emanuele Querzola : ',
    sentence: 'I received the package, ut blandit lectus.',
    type: 'agent'
}];

test('Parse Chat Step 6 (full name)', () => {
    expect(parseChat(inputString)).toStrictEqual(outputData);
})