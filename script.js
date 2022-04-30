/* =================
  TESTS, LOOK AT THESE
  Reading tests will always help you discover your requirements.
  You can make this window bigger. 
   ===================
*/

const {
  core: { test, expect, run },
  prettify
} = window.jestLite;
var expenses, earnings, total;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}

// Describe this function...
function addTotal() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  total.push(getNumberOrString(document.getElementById('text').value));
  let element_sum = document.getElementById('sum');
  element_sum.innerText = total.reduce((a,b) => a+b, 0);
}


expenses = [];
earnings = [];
total = [];


document.getElementById('add').addEventListener('click', (event) => {
  if (getNumberOrString(document.getElementById('text').value) >= '0') {
    earnings.push(getNumberOrString(document.getElementById('text').value));
    addTotal();
    let element_earnings_list = document.getElementById('earnings-list');
    let new_li = document.createElement('li');
    new_li.innerText = earnings.slice(-1)[0];

    element_earnings_list.appendChild(new_li);
  } else {
    expenses.push(getNumberOrString(document.getElementById('text').value));
    addTotal();
    let element_expenses_list = document.getElementById('expenses-list');
    let new_li2 = document.createElement('li');
    new_li2.innerText = expenses.slice(-1)[0];

    element_expenses_list.appendChild(new_li2);
  }

});

document.getElementById('total').addEventListener('click', (event) => {
  let element_sum2 = document.getElementById('sum');
  element_sum2.innerText = total.reduce((a,b) => a+b, 0);

});
/* =================
  FIND ELEMENTS
  These are all the elements we will look for.
   ===================
*/
const getHeader = document.querySelectorAll("header"),
  getH1 = document.querySelectorAll("h1"),
  getSiteHeader = document.querySelectorAll(".c-site-header"),
  getAria = document.querySelectorAll('nav[aria-label="Main Site Links."]'),
  getMain = document.querySelectorAll("main"),
  getFooter = document.querySelectorAll("footer"),
  getSiteFooter = document.querySelectorAll(".c-site-footer"),
  getIFrame = document.querySelectorAll("iframe"),
  getImage = document.querySelectorAll("img"),
  getWords = document.body.innerText;

/* =================
   ASSERTIONS 
   These are the things we check are true about your page.
   Read and update your HTML to discover the requirements.
   The tests will run every time you update your code.
   ===================
*/
test("There is at least one header element", () => {
  expect(getHeader.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one h1", () => {
  expect(getH1.length).toBeGreaterThanOrEqual(1);
});
test("There is only one header element with the class c-site-header", () => {
  expect(getSiteHeader.length).toBe(1);
});
test("There is a nav element with an aria-label of Main Site Links.", () => {
  expect(getAria.length).toBeGreaterThanOrEqual(1);
});
test("There is only one main element", () => {
  expect(getMain.length).toBe(1);
});
test("There is at least one footer element", () => {
  expect(getFooter.length).toBeGreaterThanOrEqual(1);
});
test("There is only one footer element with the class c-site-footer", () => {
  expect(getSiteFooter.length).toBe(1);
});
test("There is embedded video", () => {
  expect(getIFrame.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one image", () => {
  expect(getImage.length).toBeGreaterThanOrEqual(1);
});
test("There are at least 500 words on the page", () => {
  expect(getWords.length).toBeGreaterThanOrEqual(500);
});

const console = document.getElementById("tests");
prettify.toHTML(run(), console);
var big5;


big5 = ['https://images.unsplash.com/photo-1618641662184-bafefb91a542?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80', 'https://images.unsplash.com/photo-1544985361-b420d7a77043?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', 'https://images.unsplash.com/photo-1617672957830-841b00f7c43a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FwZSUyMGJ1ZmZhbG98ZW58MHx8MHx8&w=1000&q=80', 'https://images.unsplash.com/photo-1598894000396-bc30e0996899?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', 'https://images.unsplash.com/photo-1603483080228-04f2313d9f10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80'];
let element_pics = document.getElementById('pics');
element_pics.setAttribute("src", big5[0]);


document.getElementById('next').addEventListener('click', (event) => {
  let element_pics2 = document.getElementById('pics');
  element_pics2.setAttribute("src", big5[0]);
  big5.push(big5.shift());

});

document.getElementById('prev').addEventListener('click', (event) => {
  let element_pics3 = document.getElementById('pics');
  element_pics3.setAttribute("src", big5.slice(-1)[0]);
  big5.unshift(big5.pop());

});