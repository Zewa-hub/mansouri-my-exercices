import {assert} from 'chai';
import {my_sum} from "../day-1/exercise-0.js";
import {my_display_alpha} from "../day-1/exercise-1.js";
import {my_display_alpha_reverse} from "../day-1/exercise-2.js";
import {my_alpha_number} from "../day-1/exercise-3.js";
import {my_size_alpha} from "../day-1/exercise-4.js";
import {my_array_alpha} from "../day-1/exercise-5.js";
import {my_length_array} from "../day-1/exercise-6.js";
import {my_is_posi_neg} from "../day-1/exercise-7.js";

describe('my_sum', function () {
    describe('no_args', function () {
        it('should return 0 when no args given', function () {
            assert.equal(my_sum(), 0);
        });
    });
    describe('invalid_args', function () {
        it('should return 0 when first arg is wrong', function () {
            assert.equal(my_sum("t", 5), 0);
        });
        it('should return 0 when second arg is wrong', function () {
            assert.equal(my_sum(3, "y"), 0);
        });
        it('should return 0 when both args are wrong', function () {
            assert.equal(my_sum(null, null), 0);
        });
    });
    describe('valid_args', function () {
        it('should return 7 when a=2 and b=5', function () {
            assert.equal(my_sum(2, 5), 7);
        });
        it('should return 4 when a=9 and b=-5', function () {
            assert.equal(my_sum(9, -5), 4);
        });
    });
});

describe('my_display_alpha', function () {
    describe('print', function () {
        it('should return "abcdefghijklmnopqrstuvwxyz" (String)', function () {
            assert.equal(my_display_alpha(), "abcdefghijklmnopqrstuvwxyz");
        });
    });
});

describe('my_display_alpha_reverse', function () {
    describe('print', function () {
        it('should return "zyxwvutsrqponmlkjihgfedcba" (String)', function () {
            assert.equal(my_display_alpha_reverse(), "zyxwvutsrqponmlkjihgfedcba");
        });
    });
});

describe('my_alpha_number', function () {
    describe('is_string', function () {
        it('should return String value from number', function () {
            assert.typeOf(my_alpha_number(), "string");
        });
    });
    describe('conversion', function () {
        it('should return "7" from 7', function () {
            assert.equal(my_alpha_number(7), "7");
        });
    });
});

describe('my_size_alpha', function () {
    describe('empty_string', function () {
        it('should return 0 value from empty string', function () {
            assert.equal(my_size_alpha(), 0);
        });
    });
    describe('string', function () {
        it('should return 4 from "toto"', function () {
            assert.equal(my_size_alpha("toto"), 4);
        });
    });
});

describe('my_array_alpha', function () {
    describe('string', function () {
        it('should return ["t","o","t","o"] from "toto"', function () {
            assert.deepEqual(my_array_alpha("toto"), ["t","o","t","o"]);
        });
    });
});

describe('my_length_array', function () {
    describe('empty_array', function () {
        it('should return 0 value from empty array', function () {
            assert.equal(my_length_array(), 0);
        });
    });
    describe('array', function () {
        it('should return 4 from ["t","o","t","o"]', function () {
            assert.equal(my_length_array(["t","o","t","o"]), 4);
        });
    });
});

describe('my_is_posi_neg', function () {
    describe('positif', function () {
        it('should return "POSITIF" from 7', function () {
            assert.equal(my_is_posi_neg(7), "POSITIF");
        });
        it('should return "POSITIF" from null', function () {
            assert.equal(my_is_posi_neg(null), "POSITIF");
        });
        it('should return "POSITIF" from undefined', function () {
            assert.equal(my_is_posi_neg(), "POSITIF");
        });
    });
    describe('negatif', function () {
        it('should return "NEGATIF" from -7', function () {
            assert.equal(my_is_posi_neg(-7), "NEGATIF");
        });
    });
    describe('neutral', function () {
        it('should return "NEUTRAL" from 0', function () {
            assert.equal(my_is_posi_neg(0), "NEUTRAL");
        });
    });
    describe('neutral', function () {
        it('should return "NEUTRAL" from String', function () {
            assert.equal(my_is_posi_neg("toto"), "NEUTRAL");
        });
    });
});

