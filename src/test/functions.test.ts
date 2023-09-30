import {functions} from '../functions';

describe("functions", () => {
    describe("test", () => {
        it("\"test\"を返す", () => {
            expect(functions.test()).toEqual(
                "test"
            );
        });
    });
});
