require('chromedriver');
const {Builder, By, Key, until} = require('selenium-webdriver');

async function getWebsite(name, lat, long) {
  let driver = await new Builder().forBrowser('chrome').build();
  let website = "";
  try {

      // $('[data-tooltip="Open website"]').attributes['data-url'].value
    await driver.get(`https://www.google.com/maps/search/%22${encodeURIComponent(name)}%22/@${lat},${long},18z`);
    await driver.sleep(5000);

    let els = await driver.findElements(By.css('div[data-result-index="1"]'));
    if(els.length > 0){
        await driver.findElement(By.css('div[data-result-index="1"]')).click();
        await driver.sleep(5000);
    }

    website = await driver.findElement(By.css('[data-tooltip="Open website"]')).getAttribute('data-url');
  } catch(e) { 
      console.log(`No website for: ${name}`);
  }
  finally {
    await driver.quit();
  } 
  if(website) console.log(`Website for: ${name}: ${website}`);
  return website;
}

async function main() {
    await getWebsite("vintage camera", "28.491475", "77.102394");
    await getWebsite("Share Our Strength's Cooking Matters Colorado", "39.745392", "-104.985872");
    await getWebsite("St. Francis Center", "39.754279", "-104.985987");
} 

main();