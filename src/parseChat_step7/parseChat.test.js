
import { parseChat } from './parseChat';

const inputString = '14:24:32 Customer Lorem ipsum dolor sit amet, consectetur adipiscing elit.14:26:15 Agent I received it at 12:24:48, ut blandit lectus.';

const outputData = [{
    date: '14:24:32',
    mention: '14:24:32 Customer ',
    sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    type: 'customer'
}, {
    date: '14:26:15',
    mention: '14:26:15 Agent ',
    sentence: 'I received it at 12:24:48, ut blandit lectus.',
    type: 'agent'
}];

test('Parse Chat Step 7 [Extra] (missing colon after the names)', () => {
    expect(parseChat(inputString)).toStrictEqual(outputData);
})
