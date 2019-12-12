var dropdowns = require('../testAssets/squatchLinks')
var squatchBrowser
var social = [
    { link: 'facebook-official', site: 'https://www.facebook.com/drsquatch' },
    { link: 'twitter-square', site: 'https://twitter.com/drsquatchsoapco' },
    { link: 'instagram', site: 'https://www.instagram.com/drsquatchsoapco/' },
    { link: 'youtube', site: 'https://www.youtube.com/channel/UCfb6EofrRqeK6ttHgxZRjcA' }
]
module.exports = {
    beforeEach: browser => {
        squatchBrowser = browser.page.squatchPage()
        squatchBrowser.navigate()
    },
    after: browser => {
        squatchBrowser.end()
    },
    // 'Social Media Links': browser => {
    //     squatchBrowser
    //         .clickMedia(social)
    //         .pause(5000)
    //         .api.windowHandles(results => {
    //             squatchBrowser
    //             console.log(results)
    //             squatchBrowser
    //                 .switchWindow(results.value[4])
    //                 .verify.urlEquals('https://www.facebook.com/drsquatch')
    //                 .closeWindow()
    //                 .switchWindow(results.value[3])
    //                 .verify.urlEquals('https://twitter.com/drsquatchsoapco')
    //                 .closeWindow()
    //                 .switchWindow(results.value[2])
    //                 .verify.urlEquals('https://www.instagram.com/drsquatchsoapco/')
    //                 .closeWindow()
    //                 .switchWindow(results.value[1])
    //                 .verify.urlEquals('https://www.youtube.com/channel/UCfb6EofrRqeK6ttHgxZRjcA')
    //                 .closeWindow()
    //                 .switchWindow(results.value[0])
    //                 .api.dismissAlert()
    //         })
    // },
    'Home Page Links': browser => {
        squatchBrowser
        dropdowns.forEach(array => {
            squatchBrowser
            .linkClick(array)
        })
        squatchBrowser
            // .linkClick(dropdowns[1])
    }
}
