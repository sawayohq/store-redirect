let userAgent = window.navigator.userAgent,
  platform = window.navigator.platform,
  iosPlatforms = ["iPhone", "iPad", "iPod"],
  url = "https://work.sawayo.de/";

if (iosPlatforms.indexOf(platform) !== -1) {
  url = "https://apps.apple.com/us/app/sawayo/id1517149488";
} else if (/Android/.test(userAgent)) {
  url = "https://play.google.com/store/apps/details?id=com.sawayo.sawayoapp";
}

window.location = url;
