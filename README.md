pr_base_branch
==============

Chrome extension to show a PR's base branch on the /pulls page. 

## Installation

* Clone repo
* Edit extension.js 
  * Add username
  * Add password (this is a [Personal Access Token](https://github.com/settings/tokens/new] if you have 2fa enabled) if you've enabled 2fa)
* Edit manifest.json (if using GitHub Enterprise)
  * Change the `matches` URL in manifest.json to match GitHub Enterprise URL
* Add to Chrome
  * Go to chrome://extensions/
  * Click `Developer Mode`
  * Click `Load unpacked extension`
  * Browse to cloned repo
