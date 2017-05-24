import * as _ from 'lodash';
import * as utils from 'utils';

describe('rules', function () {
    it('Default rule', function () {
        expect(_.each).toBeDefined();
    });

    it('hello', function () {
        expect(utils.testMe()).toEqual('hello');
    });
});
