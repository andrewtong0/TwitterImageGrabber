# ![Icon](https://i.imgur.com/hsVN8Hm.png) twitterImageGrabber
A Chrome extension to quickly and easily save photos from Twitter in full resolution

**Broken as of Twitter's July overhaul due to HTML changes**

DISCLAIMER: Please use this extension responsibly and respect the intellectual property rights of others. This extension does not permit copyright infringing activities through its usage, nor do I encourage heinous or illegal activities through the utilization of this program.

### What it does
- twitterImageGrabber provides an icon shortcut to easily access the full resolution of an image for viewing or saving. This extension is to help aid frustration with a bug where some images on Twitter are inconsistently unsaveable. This inconsistency is fixed through this extension.

### Usage
1. Find the image you would like to save
2. Open the image in gallery mode (full screen; if there are multiple images, you should see the arrows on the sides that allow you to navigate - ensure you are on the right photo you want to save)
3. Click the extension icon and click "Grab Image"
4. If all goes well, a new tab should open with the full resolution image to view or save
Note: If the image could not be found (likely not in gallery mode), the popup will display an error message "No image found"

### How it works
- twitterImageGrabber, upon clicking the "Grab Image" button accesses the HTML of the current page, identifies the image the user wants to save, and returns the source URL of the image
- Next, assuming a valid URL was returned, a new tab is opened with the image source URL as the tab URL

I also have a Python version that I made a while ago as a proof of concept, but it was very cumbersome since it only ran through the command line (it was faster to find the image source through the HTML than to use it). If you're curious to see it, you can find it [here](https://github.com/andrewtong0/TwitterImageGrabberPython)
