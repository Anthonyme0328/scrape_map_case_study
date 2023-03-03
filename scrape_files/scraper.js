// require statements
const puppeteer = require("puppeteer");
const fs = require("fs");

// const { Cluster } = require("puppeteer-cluster")



// (async () => {
//   const cluster = await Cluster.launch({
//     concurrency: Cluster.CONCURRENCY_CONTEXT,
//     maxConcurrency: 2,
//   });

//   await cluster.task(async ({ page, data: url }) => {
//     await page.goto(url);
//     const urls = await page.evaluate(() => {
//       let hrefs = [];
//       let elements = document.querySelectorAll('ul > li > div > a');
//       for (let element of elements)
//         hrefs.push(element.href);
//       return hrefs;
//     });
//     console.log(urls)
//     return urls
//   });

//   cluster.queue("https://www.corcoran.com/search/for-sale/location/northwest-harris-tx-17534130/regionId/119", {waitUntil: "domcontentloaded"});

//   await cluster.idle();
//   await cluster.close();
// })();





// async function since the page and all the requests will load at different speeds

(async () =>  {

  // creates browser with chromium
  const browser = await puppeteer.launch({headless: false});
  // creates the new page
  const page = await browser.newPage()
  // specifies what url to go to
  await page.goto("https://www.corcoran.com/listing/for-sale/1115-cheddar-ridge-drive-spring-tx-77379/69308030/regionId/119", {waitUntil: "domcontentloaded"})
  // waits for a tags to load in
  await page.waitForSelector('a')
  


  const urls = await page.evaluate(() => {
    let hrefs = [];
    let elements = document.querySelectorAll('ul > li > div > a');
    for (let element of elements)
      hrefs.push(element.href);
    return hrefs;


  });

  // console.log(urls)
  
  await page.click("button.Paginator__ButtonStyled-sc-34cad68b-7.iQfzNy")
  

  
  // clicks into lot level 

  await page.click("#scroll-section > div:nth-child(n) > ul > li")

    
// allows page some time to load since web page is SSR

  await page.waitForNetworkIdle(1000)


  const grabContent = await page.evaluate(() => {
    
    // selects all of the body to grab the info
    const content = document.querySelectorAll("body")

    // empty array to push info and images into
    const contArr = []

    // loops through each command to grab different pieces of data
    content.forEach(async () => {

      // page layout complex selecting multiple areas to get appropriate data
      // grabs the dom node for the main used for info on the house, taxes, location, ect all found in this area

      const contComps = document.querySelectorAll("main")

      // lot level page uses a carousel t show images, but needs to specify about grabbing the active image currently shown

      // const contImgActive = document.querySelectorAll('.carousel-inner .active > a')

      const contImgActive = document.querySelectorAll("div.carousel-inner .active > a > div > img")


      // grabs the rest of the images in the carousel that are not currently active

      const contImg = document.querySelectorAll('.carousel-item')

      // constant to grab the component that holds the content needed and grabs 0 index in the returned array
      const cont = contComps[0] 

      //  constant to grab the component that holds the active image needed and grabs 0 index in the returned array
      // const actImg = contImgActive[0].getAttribute('srcset')

      //  constant to grab the component that holds the other images needed and grabs 0 index in the returned array
      const img = contImg[0]

      // pushes the grab array objects into the empty content array
      contArr.push({
        information: cont?.innerText,
        // activeImg: actImg,
        OtherImgs: img?.innerHTML
      })
    })

    // retruns the array
    return contArr
  })
  
  // console.log for testing the returned values
  console.log(grabContent)

  // creates and writes the array of grabbed content to a file

  fs.writeFile('scrape.txt', JSON.stringify(grabContent).toString() + '\n', err => {
    if (err) {
      console.error(err);
    }

  });


  fs.appendFile("scrape.txt", JSON.stringify(grabContent).toString(), err => {
    if (err){
      console.log(err);
    }
  });




await page.goBack({waitUntil: "domcontentloaded"})









  fs.appendFile('test.txt', JSON.stringify(grabContent).toString(), err => {
    if (err) {
      console.error(err);
    }
  });

  // best practice is to close browser at end of process
  await browser.close()
})();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// END OF CODE //

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////









