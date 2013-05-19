appTest = TestCase("app");

appTest.prototype.testGreet = function () {
	assertEquals("m1 hello", m1.hello());
};
appTest.prototype.testGreet1 = function () {
	assertEquals("m2 hello", m2.hello());
};