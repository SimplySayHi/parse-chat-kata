
import { parseChat } from './parseChat';

const inputString = '14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

const outputData = [{
    date: '14:24:32',
    mention: '14:24:32 Customer : ',
    sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    type: 'customer'
}];

test('Parse Chat Step 1 (single sentence)', () => {
    expect(parseChat(inputString)).toStrictEqual(outputData);
})
