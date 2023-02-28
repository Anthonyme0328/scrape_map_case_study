// require statements
const puppeteer = require("puppeteer");
const fs = require("fs");









// async function since the page and all the requests will load at different speeds
(async () =>  {

  // creates browser with chromium
  const browser = await puppeteer.launch({headless: false});
  // creates the new page
  const page = await browser.newPage()
  // specifies what url to go to
  await page.goto("https://www.corcoran.com/search/for-sale/location/northwest-harris-tx-17534130/regionId/119", {waitUntil: "domcontentloaded"})
  // waits for a tags to load in
  await page.waitForSelector('a')
  


  const urls = await page.evaluate(() => {
    let hrefs = [];
    let elements = document.querySelectorAll('ul > li > div > a');
    for (let element of elements)
      hrefs.push(element.href);
    return hrefs;

  });

  console.log(urls)
  
  // await page.click("button.Paginator__ButtonStyled-sc-34cad68b-7.iQfzNy")
  

  
  // clicks into lot level 
  // await page.click("#scroll-section > div:nth-child(n) > ul > li")

    
// allows page some time to load since web page is SSR
//   await page.waitForNetworkIdle(1000)


//   const grabContent = await page.evaluate(() => {
    
//     // selects all of the body to grab the info
//     const content = document.querySelectorAll("body")

//     // empty array to push info and images into
//     const contArr = []

//     // loops through each command to grab different pieces of data
//     content.forEach(async () => {

//       // page layout complex selecting multiple areas to get appropriate data
//       // grabs the dom node for the main used for info on the house, taxes, location, ect all found in this area
//       const contComps = document.querySelectorAll("main")
//       // lot level page uses a carousel t show images, but needs to specify about grabbing the active image currently shown
//       const contImgActive = document.querySelectorAll('.carousel-inner .active')
//       // grabs the rest of the images in the carousel that are not currently active
//       const contImg = document.querySelectorAll('.carousel-inner')

//       // constant to grab the component that holds the content needed and grabs 0 index in the returned array
//       const cont = contComps[0] 

//       //  constant to grab the component that holds the active image needed and grabs 0 index in the returned array
//       const actImg = contImgActive[0]

//       //  constant to grab the component that holds the other images needed and grabs 0 index in the returned array
//       const img = contImg[0]

//       // pushes the grab array objects into the empty content array
//       contArr.push({
//         information: cont?.innerText,
//         activeImg: actImg?.innerHTML,
//         OtherImgs: img?.innerHTML,
//       })
//     })

//     // retruns the array
//     return contArr
//   })
  
//   // console.log for testing the returned values
//   // console.log(grabContent)

//   // creates and writes the array of grabbed content to a file
//   fs.writeFile('test.txt', JSON.stringify(grabContent).toString(), err => {
//     if (err) {
//       console.error(err);
//     }

//   });

//   const space = 'NEXT ENTRY'

//   fs.appendFile("test.txt", space, err => {
//     if (err){
//       console.log(err);
//     }
//   });




// await page.goBack({waitUntil: "domcontentloaded"})









  // fs.appendFile('test.txt', JSON.stringify(grabContent).toString(), err => {
  //   if (err) {
  //     console.error(err);
  //   }
  // });

  // best practice is to close browser at end of process
  await browser.close()
})();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// END OF CODE //

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////









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




      // const wholePage = document.querySelectorAll('#__next')

      // c gets same as main/ const a
      // const c = wholePage[0]
      // const d = wholePage[1]
      // const e = wholePage[2]
      // const f = wholePage[3]
      // const g = wholePage[4]




        // ind2: c?.innerText,
        // ind3: d?.innerText,
        // ind4: e?.innerText,
        // ind5: f?.innerText,
        // ind6: g?.innerText

    // const content = document.querySelectorAll('#__next > div.PageLayout__PageWrapper-sc-cb3fc24f-0.fxveZB > main > div.Listing__DesktopWrapper-sc-6e47b3d6-1.MAfZc > section > div.MainListingInfo__LeftCol-sc-f9f9c32c-1.fpWQJG')


      // const contComps = document.querySelectorAll("#__next > div.PageLayout__PageWrapper-sc-cb3fc24f-0.fxveZB > main > div.Listing__DesktopWrapper-sc-6e47b3d6-1.MAfZc > section > div.MainListingInfo__LeftCol-sc-f9f9c32c-1.fpWQJG")




  // await page.waitForSelector("#__next > div.PageLayout__PageWrapper-sc-cb3fc24f-0.fxveZB > main > div.Listing__DesktopWrapper-sc-6e47b3d6-1.MAfZc > section > div.MainListingInfo__LeftCol-sc-f9f9c32c-1.fpWQJG")

  // await page.waitForSelector("main")













