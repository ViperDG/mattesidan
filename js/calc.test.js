const { pyth } = require("./calc");

const puppeteer = require("puppeteer");

test("Testar pythagoras sats", () => { //Texten kan vara den man vill
    expect(pyth(3, 4)).toBe(5);
  });

test("Testar pythagoras sats", () => { //Texten kan vara den man vill
    expect(pyth(5, 12)).toBe(13);
  });  

test("Testar pythagoras sats", () => { //Texten kan vara den man vill
    expect(pyth(8, 15)).toBe(17);
  });  

test("Testar pythagoras sats", () => { //Texten kan vara den man vill
    expect(pyth(7, 24)).toBe(25);
  });  




test("Vad som ska göras", async () => {
   const browser = await puppeteer.launch({
     headless: false,
     slowMo: 70,
     args: ["--window-size=1920, 1080"]
   });
   const page = await browser.newPage();
   await page.goto(
   "file:///C:/Users/Anton/Documents/Github/mattesidan/index.html"
   );
   await page.click("#a");
   await page.type("#a", "3");
   await page.click("#b");
   await page.type("#b", "4");
   await page.click("#submit");
   const final_result = await page.$eval("#c", el => el.textContent);
   await expect(final_result).toBe("5");
});
  