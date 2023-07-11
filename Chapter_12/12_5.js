function test(val){
    try {
       if (isNaN(val)) {
        throw "Not a number.";
       }
    } catch (e) {
        console.log(e);
    } finally {
        console.log("Done " + val);
    }
}
test("a");
test(100);