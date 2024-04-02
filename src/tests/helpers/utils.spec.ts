import { getRandomNumber, escapeRegExUrls } from "@/utils/utils.ts";

describe('Utils', () => {

    test('Get Random Number', () => {
        const reps: number = 10;
        const maxNumbers: number[] = [0, 1, 10];

        for (let index: number = 0; index < reps; index++) {
            maxNumbers.forEach((maxNumber: number) => {
                const randomNumber: number = getRandomNumber(maxNumber);

                expect(randomNumber).toBeTypeOf('number');
                expect(randomNumber).toBeGreaterThanOrEqual(0);
                expect(randomNumber).toBeLessThanOrEqual(maxNumber);
            });
        }
    });

    test('Escape Special Characters URL', () => {
        const url: string = 'https://example.com/path/to/(resource)/[resource]?query=string&number=123';
        const expectedUrl: string = 'https://example\\.com/path/to/\\(resource\\)/\\[resource\\]\\?query=string&number=123';

        const newUrl: string = escapeRegExUrls(url);

        expect(newUrl).toMatch(expectedUrl);
    });
});
