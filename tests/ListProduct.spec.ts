import { test, expect } from '@playwright/test';

// filter data 
const filterData = [ ["Sale", "Eau de Parfum", "Weihnachten","Unisex"],
                     ["NEU", "Eau de Parfum", "Weihnachten","Weiblich"]
]
test('homepage test', async ({ page }) => {
 
   await page.goto('https://www.douglas.de/de');
   await page.locator('.sc-dcJsrY.eIFzaz').waitFor({
    state: 'visible',
     timeout: 50000} 
   ); 
   await page.locator('.sc-dcJsrY.eIFzaz').click();
   await page.locator('//a[normalize-space()="PARFUM" or normalize-space()="PERFUME"]').click();


  for (const filtervalue of filterData) {
    
    console.log(filtervalue[0],filtervalue[1],filtervalue[2])
    
    await page.locator("//div/div[contains(.,'Highlights') and @class='facet__title']").click();
    await page.locator("//a[@role='checkbox']/div[contains(.,'"+filtervalue[0]+"')]").click();
    await page.locator("//button[normalize-space()='"+filtervalue[0]+"']").waitFor({ state: 'visible', timeout: 15000 });
    

    await page.locator("//div[contains(text(),'Produktart')]").click();
    await page.locator("//a[@role='checkbox']/div[contains(.,'"+filtervalue[1]+"')]").click();
    await page.locator("//button[normalize-space()='"+filtervalue[1]+"']").waitFor({ state: 'visible', timeout: 15000 });
    
    await page.locator("//div[contains(text(),'Geschenk für')]").click();
    await page.locator("//a[@role='checkbox']/div[contains(.,'"+filtervalue[2]+"')]").click();
    await page.locator("//button[normalize-space()='"+filtervalue[2]+"']").waitFor({ state: 'visible', timeout: 15000 });
    
    await page.locator("//div[contains(text(),'Für Wen')]").click();
    await page.locator("//a[@role='checkbox']/div[contains(.,'"+filtervalue[3]+"')]").click();
    await page.locator("//button[normalize-space()='"+filtervalue[3]+"']").waitFor({ state: 'visible', timeout: 15000 });
    
    await page.locator('//a[normalize-space()="PARFUM" or normalize-space()="PERFUME"]').click();

    }
 

});
