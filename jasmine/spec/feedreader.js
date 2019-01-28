 /* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {


    //to test the feeds
    describe('RSS Feeds', function() {
      //all the fields are defined and not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


      //if all fields have url(and not empty)
        it("all urls are defined well", function () {
            allFeeds.forEach(function (feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            })
        });


        //if all feeds have a particular name
          it("name is defined ", function () {
            allFeeds.forEach(function (feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0)
            })
        });

    });


  //test suite for "THE MENU"
    describe('The Menu', function () {
  //if the menu is hidden
         it('menu is hidden', function () {
            expect($('body').hasClass("menu-hidden")).toEqual(true);
        })
    //if menu works  on being clicked
          it("When menu is clicked", function () {
            $(".menu-icon-link").click();
            expect($('body').hasClass("menu-hidden")).not.toBe(true);
            $(".menu-icon-link").click();
            expect($('body').hasClass("menu-hidden")).toBe(true);
        });
    })

//test suite for "initial entries"
    describe('Initial Entries', function () {
//calls the function
        beforeEach(function (success) {
            loadFeed(0, function () {
                success();
            })
        })
        //if it has itleast single entry
        it("single entry atleast", function () {
            expect($(".feed .entry").length).toBeGreaterThan(0)
        });
    });




    // test suite for "New feed selection"
  describe("New feed selection", function () {

// declaring variable
        var lastFeed;
        beforeEach(function (content) {
            loadFeed(0, function () {

//giving value to the declared variable
                lastFeed = $(".feed").html()
                loadFeed(1, content)
            })
        })

  //if two feeds are not same

        it("not same ", function () {
            expect($(".feed").html()).not.toBe(lastFeed);
        })
    })
}());
