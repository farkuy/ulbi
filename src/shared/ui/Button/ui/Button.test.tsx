import { Button } from './Button';

describe('testButton', () => {
    test('clear Button', () => {
        expect(<Button>Тест</Button>).toBeInTheDocument();
    });
});
