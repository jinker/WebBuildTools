//modules:app

TestCase("app", {
	setUp: function () {
		this.m1 = m1;
		this.m2 = m2;
	},
	teardown: function () {
		delete this.m1;
		delete this.m2;
	},
	testGreet: function () {
		assertEquals("m1 hello", this.m1.hello());
	},
	testGreet1: function () {
		assertEquals("m2 hello", this.m2.hello());
	}
});

TestCase("app1", {
	setUp: function () {
		this.m1 = m1;
		this.m2 = m2;
	},
	teardown: function () {
		delete this.m1;
		delete this.m2;
	},
	testGreet: function () {
		assertEquals("m1 hello", this.m1.hello());
	},
	testGreet1: function () {
		assertEquals("m2 hello", this.m2.hello());
	}
});