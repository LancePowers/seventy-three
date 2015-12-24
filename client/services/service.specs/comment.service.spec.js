(function () {
    "use strict";

    describe("comment service", function () {
        var comments;
        console.log('here')
        beforeEach(module("app"));

        beforeEach(inject(function (_comments_) {
            comments = _comments_;
        }));

        it("should do something", function () {

            expect(true).toEqual(true);

        });

    });

})()