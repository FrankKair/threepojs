# threepojs

Transform your strings XLSX file into JavaScript objects!

<img src = https://raw.githubusercontent.com/FrankKair/threepojs/master/assets/threepo-logo.png width="25%" height="25%"/>

If you have a XLSX file with all the localized strings of your project, you can use **threepojs** to parse the XLSX file into a JavaScript object containing all the strings.

<img src = https://raw.githubusercontent.com/FrankKair/threepojs/master/assets/xlsx_img.png width="45%" height="45%"/>

<img src = https://raw.githubusercontent.com/FrankKair/threepojs/master/assets/js_obj_img.png width="20%" height="20%"/>

# Usage

Since we use object rest/spread, Node **8.3** is required.

threepojs still isn't in **npm**, so in order to use it, you have to be in the project's folder and run:

    $ node index.js ~/path/my_strings.xlsx
