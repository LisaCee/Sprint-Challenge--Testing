<!-- Answers to the Short Answer Essay Questions go here -->


1. In Jest, what are the differences between beforeAll, afterAll, beforeEach, and afterEach? When do they run? What are they used for?
beforeAll runs before the entire test suite is run.  This allows `something` to be established before the tests are run.  This could be used to start a server or create data that can be tested upon.

afterAll runs after the entire test suite is run.  afterAll cleans up the database or closes the server connection after the tests have run.

beforeEach runs before a single test is run.  It can be used to make sure that the data being tested is exactly the same and hasn't been changed by previous tests.

afterEach runs after a single test is run.  If the test has made a promise, afterEach ensures that is resolved before moving on.
1. What is the point of Test Driven Development? What do you personally think about this approach?
1. What is a mock function? How do we use it to test a callback passed to a function?
1. Mention three types of tests.
1. What type of test performs database operations against a real server.
