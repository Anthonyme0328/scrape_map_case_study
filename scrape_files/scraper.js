const puppeteer = require("puppeteer");




(async () =>  {

  // creates browser with chromium
  const browser = await puppeteer.launch({headless: false});
  // creates the new page
  const page = await browser.newPage()
  // specifies what url to go to
  await page.goto("https://www.corcoran.com/search/for-sale/location/northwest-harris-tx-17534130/regionId/119", {waitUntil: "domcontentloaded"})


  await page.click("#scroll-section > div:nth-child(n) > ul > li")
    
  await page.waitForSelector("#__next > div.PageLayout__PageWrapper-sc-cb3fc24f-0.fxveZB > main > div.Listing__DesktopWrapper-sc-6e47b3d6-1.MAfZc > section > div.MainListingInfo__LeftCol-sc-f9f9c32c-1.fpWQJG")

  await page.waitForSelector("body")

  const grabContent = await page.evaluate(() => {
    
    // const content = document.querySelectorAll('#__next > div.PageLayout__PageWrapper-sc-cb3fc24f-0.fxveZB > main > div.Listing__DesktopWrapper-sc-6e47b3d6-1.MAfZc > section > div.MainListingInfo__LeftCol-sc-f9f9c32c-1.fpWQJG')

    const content = document.querySelectorAll("body")

    const contArr = []
    content.forEach(() => {
      // const contComps = document.querySelectorAll("#__next > div.PageLayout__PageWrapper-sc-cb3fc24f-0.fxveZB > main > div.Listing__DesktopWrapper-sc-6e47b3d6-1.MAfZc > section > div.MainListingInfo__LeftCol-sc-f9f9c32c-1.fpWQJG")

      const contComps = document.querySelectorAll("#__next > div.PageLayout__PageWrapper-sc-cb3fc24f-0.fxveZB > main")


      const a = contComps[0]
      // returns: whole page info



      const b = contComps[2]
      // isnt returning anything prob needs to be a different selector or index
      // maybe use to get the images


      contArr.push({
        ind0: JSON.stringify(a?.innerText),
        ind1: b?.innerText

      })
    })

    return contArr
  })
  
  console.log(grabContent)


  // Grabs all data from front page in the goto



  // const grabAddress = await page.evaluate(() => {
  //   const address = document.querySelectorAll('#scroll-section > div:nth-child(3) > ul > li:nth-child(n)')
    
  //   let testArr = []

  //   address.forEach((add) => {
  //     const infos = add.querySelectorAll('div')
  //     const one = infos[0] // empty string
  //     const two = infos[1] // lc location, address, bed, bath, half bath, sqft, courtesy of
  //     const three = infos[2] // location again
  //     const four = infos[3] // type of res ie. other residential or single fam ect
  //     const five = infos[4] // courtesy of again
  //     const six = infos[5] // price in dollars
  //     const seven = infos[6] // price in dollars again
  //     const eight = infos[7] // price in dollars again again



  //     testArr.push({
  //       first: one.innerText, 
  //       sec: two.innerText, 
  //       third: three.innerText, 
  //       fourth: four.innerText, 
  //       fifth: five.innerText, 
  //       sixth: six.innerText, 
  //       seventh: seven.innerText,
  //       eigth: eight.innerText,
  //     })
  //   })

  //   return testArr

    
  // })


  // console.log(grabAddress)

  // best practice is to close browser at end of process
  await browser.close()
})();