const questions = [{
    multipleAnswers: false,
    question: "What tag is used to create a paragraph?",
    choice1: "<p>",
    choice2: "<par>",
    choice3: "<t>",
    choice4: "<text>",
    answer: "<p>",
    answerExplained: "The <p> tag is used to create a paragraph. An opening <p> tag starts a paragraph and the closing </p> tag ends a paragraph."
  }, {
    multipleAnswers: false,
    question: "Paragraph tags are what type of element?",
    choice1: "Inline",
    choice2: "Box",
    choice3: "Block",
    choice4: "None of the above",
    answer: "Block",
    answerExplained: "Paragraphs by default are block level elements."
  }, {
    multipleAnswers: false,
    question: "There are 6 levels of headings",
    choice1: "True",
    choice2: "False",
    choice3: "",
    choice4: "",
    answer: "True",
    answerExplained: "There are 6 levels of headings h1 - h6."
  },{
    multipleAnswers: false,
    question: "What tag is used to create a link to another web page?",
    choice1: "<link>",
    choice2: "<href>",
    choice3: "<lk>",
    choice4: "<a>",
    answer: "<a>",
    answerExplained: "<a> tags are used to link web pages together, they require an href attribute."
  },{
    multipleAnswers: false,
    question: "What tag is used to create a first level heading?",
    choice1: "<h>",
    choice2: "<head>",
    choice3: "<h1>",
    choice4: "<h-1>",
    answer: "<h1>",
    answerExplained: "<h1> tag starts a first level heading and </h1> closes it, <h1>Hello World!</h1>"
  },{
    multipleAnswers: false,
    question: "What is the default alignment for elements?",
    choice1: "left",
    choice2: "center",
    choice3: "right",
    choice4: "",
    answer: "left",
    answerExplained: "By default elements and text are aligned to the left."
  },{
    multipleAnswers: false,
    question: "Select the proper HTML syntax.",
    choice1: '<p class="drop-cap">Hello World</p>',
    choice2: '<p class:drop-cap>Hello World</p>',
    choice3: '<p class="drop-cap" Hello World /p>',
    choice4: '<p class="drop-cap">Hello World</p class="drop-cap">',
    answer: '<p class="drop-cap">Hello World</p>',
    answerExplained: 'This is proper HTML syntax, <p class="drop-cap">Hello World</p> It consists of a < followed by the tag name with an attribute = to a value in “” a > the content of the element then a </ tag name > for the closing tag.'
  },{
    multipleAnswers: false,
    question: "What type of list will number list items for you?",
    choice1: 'Bulleted',
    choice2: 'Unordered',
    choice3: 'Listed',
    choice4: 'Ordered',
    answer: 'Ordered',
    answerExplained: "Ordered lists and the <ol> tag are used to define a list with numbers."
  },{
    multipleAnswers: false,
    question: "CSS documents should be linked in the <head> section of a website.",
    choice1: 'True',
    choice2: 'False',
    choice3: '',
    choice4: '',
    answer: 'True',
    answerExplained: "CSS documents should be linked to an HTML document in the <head> section."
  },{
    multipleAnswers: false,
    question: "Inline styles are written...",
    choice1: 'On a separate css document.',
    choice2: 'In the head section of the html document within <style> tags.',
    choice3: 'In the styled elements opening tag using the style attribute.',
    choice4: '',
    answer: 'In the styled elements opening tag using the style attribute.',
    answerExplained: 'Inline styles are written within the elements html, <p style="color: red;">Hello World</p>'
  },{
    multipleAnswers: false,
    question: "An ID should be used only once per page.",
    choice1: 'True',
    choice2: 'False',
    choice3: '',
    choice4: '',
    answer: 'True',
    answerExplained: 'An ID is a unique identifier that should only be used once per page.  A single HTML document can have multiple IDs but each ID should only be used once per page.'
  },{
    multipleAnswers: false,
    question: "Classes should be used only once per page.",
    choice1: 'True',
    choice2: 'False',
    choice3: '',
    choice4: '',
    answer: 'False',
    answerExplained: 'Classes can be used throughout an html document for styling different elements the same way.'
  },{
    multipleAnswers: false,
    question: "What CSS would be used to set the background color of the body of a web page to #CBCBCB",
    choice1: 'document {background-color: #CBCBCB;}',
    choice2: 'head {background-color: #CBCBCB;}',
    choice3: 'body {background-color: #CBCBCB;}',
    choice4: 'elements {background-color: #CBCBCB;}',
    answer: 'body {background-color: #CBCBCB;}',
    answerExplained: 'In order to change the background of the body you would first select the body element and then set the background-color or background CSS properties, body { background-color: #CBCBCB; }'
  },{
    multipleAnswers: false,
    question: "Which is the proper pseudo class CSS syntax for a hover on an <a> tag?",
    choice1: 'a;hover {color: #7348FB;}',
    choice2: 'a :hover { color: #7348FB; }',
    choice3: 'a:hover-in { color: #7348FB; }',
    choice4: 'a:hover { color: #7348FB; }',
    answer: 'a:hover { color: #7348FB; }',
    answerExplained: 'The hover class is used in this way a:hover { color: #7348FB; }'
  },{
    multipleAnswers: false,
    question: "Which of the following is not a valid value for the CSS float property?",
    choice1: 'left',
    choice2: 'center',
    choice3: 'right',
    choice4: 'none',
    answer: 'center',
    answerExplained: 'The float property can be set to left, right or none. There is no float center.'
  },{
    multipleAnswers: false,
    question: "The space between an element's content and border is known as...",
    choice1: 'content-wrap',
    choice2: 'nesting',
    choice3: 'margin',
    choice4: 'padding',
    answer: 'padding',
    answerExplained: "Padding is the space between an element's content and border."
  },{
    multipleAnswers: false,
    question: "The CSS selector chain used to target <a> tags within a <nav> element is",
    choice1: 'a nav',
    choice2: '.nav a',
    choice3: 'nav a',
    choice4: 'nav + a',
    answer: 'nav a',
    answerExplained: '"nav a" would select all a tags within a nav element.'
  },{
    multipleAnswers: false,
    question: "The space outside of an element's border separating it from other elements is...",
    choice1: 'margin',
    choice2: 'border',
    choice3: 'content',
    choice4: 'padding',
    answer: 'margin',
    answerExplained: 'The space outside of an element is margin.'
  },{
    multipleAnswers: false,
    question: "To select an element with the class of container in CSS you would use...",
    choice1: '#container',
    choice2: '$container',
    choice3: '.container:div',
    choice4: '.container',
    answer: '.container',
    answerExplained: 'In CSS classes are selected by starting with a period followed by the class name, .container would select the container class.'
  },{
    multipleAnswers: false,
    question: "Links to css documents should be placed in the <footer> of an html document.",
    choice1: 'True',
    choice2: 'False',
    choice3: '',
    choice4: '',
    answer: 'False',
    answerExplained: 'Html documents should link to external css documents in the <head> section.'
  },{
    multipleAnswers: false,
    question: "To remove the default underline on links use this CSS...",
    choice1: 'link { text-decoration: none; }',
    choice2: 'a { text-style: none; }',
    choice3: 'a.href { text-style: none; }',
    choice4: 'a { text-decoration: none; }',
    answer: 'a { text-decoration: none; }',
    answerExplained: 'The default underline can be removed by targeting a tags and changing the text-decoration property to none, a { text-decoration: none; }'
  },{
    multipleAnswers: false,
    question: "An element has three css declarations. width: 100px; padding: 10px; border: 5px solid #000; What is the visible width of this element on the web page?",
    choice1: '100px',
    choice2: '115px',
    choice3: '130px',
    choice4: '110px',
    answer: '130px',
    answerExplained: 'The elements total visible width would be 130px. By default padding and border size are not factored in an elements defined width. Width 100px + 10px padding left + 10px padding right + 5px border left + 5px border right = 130px'
  },{
    multipleAnswers: false,
    question: "What css declaration makes an element factor padding and border size values in defined width and/or height?",
    choice1: 'box-model: fix;',
    choice2: 'box-content: full;',
    choice3: 'border-box: box-full;',
    choice4: 'box-sizing: border-box;',
    answer: 'box-sizing: border-box;',
    answerExplained: 'box-sizing: border-box; can be given to an element so that padding and border size are factored in a defined width.'
  },{
    multipleAnswers: false,
    question: "Which of the following is a fixed unit of measurement?",
    choice1: 'px',
    choice2: 'em',
    choice3: '%',
    choice4: 'vh',
    answer: 'px',
    answerExplained: 'px stands for pixels and is a fixed unit of measurement.'
  },{
    multipleAnswers: false,
    question: "When giving an element width: 100%; it will...",
    choice1: 'fill the width of the web page.',
    choice2: 'fill the width of its parent containers content',
    choice3: 'be exactly 100 pixels wide.',
    choice4: 'not have a width, % is not a valid css unit of measurement.',
    answer: 'fill the width of its parent containers content',
    answerExplained: 'When giving an element width: 100%; it will fill the width of its parent containers content'
  },{
    multipleAnswers: false,
    question: "Which of the following is not a valid hex color?",
    choice1: '#303030',
    choice2: '#7AE',
    choice3: '#FEFEFE',
    choice4: '#GG17',
    answer: '#GG17',
    answerExplained: '#GG17 is not a valid hex color value, hex digits range from 0 to F and are given in sets of three or six.'
  },{
    multipleAnswers: false,
    question: "What are the two components of CSS rules?",
    choice1: 'Attributes and values',
    choice2: 'Selectors and declarations',
    choice3: 'Properties and equations',
    choice4: 'Objects and forces',
    answer: 'Selectors and declarations',
    answerExplained: 'A CSS rule consists of a selector and declarations such as p { color: #333; } where p is the selector and color: #333; is the declaration.'
  },{
    multipleAnswers: false,
    question: "What are the two components of CSS declarations?",
    choice1: 'Property and value',
    choice2: 'Selector and declaration',
    choice3: 'Subject and object',
    choice4: 'None of the above',
    answer: 'Property and value',
    answerExplained: 'A CSS declaration consists of a property and value. Example, text-align: center; where text-align is the property and center is the value.'
  },{
    multipleAnswers: false,
    question: "In CSS what declaration can horizontally center a block level element?",
    choice1: 'text-align: center;',
    choice2: 'margin: auto;',
    choice3: 'align: middle;',
    choice4: 'please: center;',
    answer: 'margin: auto;',
    answerExplained: 'Block level elements can be horizontally centered using margin: auto; this would put automatic margin on the left and right sides of the element horizontally centering it within its parent.'
  },{
    multipleAnswers: false,
    question: "What CSS declaration can be given to an element to center any inline content nested within it?",
    choice1: 'text-align: center;',
    choice2: 'margin: auto;',
    choice3: 'align: middle;',
    choice4: 'content: middle;',
    answer: 'text-align: center;',
    answerExplained: 'By giving an element text-align: center; any nested inline content, such as text, images and links, will be aligned in the center.'
  },{
    multipleAnswers: false,
    question: "What CSS declaration would change the color of text within an element to purple?",
    choice1: 'text-color: purple;',
    choice2: 'font-color: purple;',
    choice3: 'color: purple;',
    choice4: 'color-text: purple;',
    answer: 'color: purple;',
    answerExplained: 'To change the color of the text within an element you would use the css declaration color: purple;'
  },{
    multipleAnswers: false,
    question: "What type of elements start a new line before and after the element and span the width of their parent container by default?",
    choice1: 'inline',
    choice2: 'box',
    choice3: 'span',
    choice4: 'block',
    answer: 'block',
    answerExplained: 'Block-level elements will by default start a new line before and after the element and span the width of their parent container.'
  },{
    multipleAnswers: false,
    question: "Which of the following would be a valid css selector?",
    choice1: '.icon',
    choice2: '#main-header',
    choice3: 'h1',
    choice4: 'All of the above',
    answer: 'All of the above',
    answerExplained: 'All of these could be used as a css selector, .icon would target elements with the class of icon, #main-header would target an element with the id of main-header and h1 would target all h1 tags.'
  },{
    multipleAnswers: false,
    question: "A CSS document has the following two CSS rules, h1 { color: green; } .main-header { color: red; } .  A linked HTML document has an h1 with the class of main-header, what color will its text be?",
    choice1: 'Red',
    choice2: 'Green',
    choice3: 'Yellow',
    choice4: 'Black',
    answer: 'Red',
    answerExplained: 'In CSS class selectors are more specific than element selectors so the heading text would display as red.'
  },{
    multipleAnswers: false,
    question: "A CSS declaration should always end in a...",
    choice1: ';',
    choice2: '>',
    choice3: ')',
    choice4: ']',
    answer: ';',
    answerExplained: 'CSS declarations always end in a ; known as a semicolon. Example, font-size: 24px;  Though the semicolon is not necessary if only giving one CSS declaration to a selector it’s a good habit to always put it in anyway.'
  },{
    multipleAnswers: false,
    question: "Which of the following CSS declarations will make the background image of an element expand to fill the element?",
    choice1: 'background-expand: full;',
    choice2: 'background-size: cover;',
    choice3: 'background-expand: cover;',
    choice4: 'size-background: full;',
    answer: 'background-size: cover;',
    answerExplained: 'The CSS declaration to make a background image expand to fill the element is background-size: cover;'
  },{
    multipleAnswers: false,
    question: "What is the default positioning of an element?",
    choice1: 'static',
    choice2: 'relative',
    choice3: 'absolute',
    choice4: 'fixed',
    answer: 'static',
    answerExplained: 'The default positioning for elements is static where the elements will render in the order that they appear in the HTML document.'
  },{
    multipleAnswers: false,
    question: "What is the generic HTML block-level container element that is used to divide various parts of a web page for styling and layout?",
    choice1: '<box>',
    choice2: '<divide>',
    choice3: '<div>',
    choice4: '<container>',
    answer: '<div>',
    answerExplained: '<div> is the traditional generic block-level container element in HTML, it is short for division and is used to group various other HTML elements together for styling and layout.  It needs an opening tag <div> and a closing tag </div>'
  },{
    multipleAnswers: false,
    question: "By default an image element will be what size?",
    choice1: '100px',
    choice2: 'It will fill the width of its parent container by default.',
    choice3: 'It will display at the size and dimensions of the image file.',
    choice4: 'It will not display unless you give it a width.',
    answer: 'It will display at the size and dimensions of the image file.',
    answerExplained: 'By default images will display at the size and dimensions of the image file itself, this can be changed by using CSS.'
  },{
    multipleAnswers: false,
    question: "Which of the following CSS declarations will set the font-face of an element to Helvetica with a fall back of the default sans-serif font if Helvetica is not available?",
    choice1: 'font-family: sans-serif, Helvetica;',
    choice2: 'font-face: Helvetica, sans-serif;',
    choice3: 'make-font: sans-serif, Helvetica;',
    choice4: 'font-family: Helvetica, sans-serif;',
    answer: 'font-family: Helvetica, sans-serif;',
    answerExplained: 'You can set the font of an element by setting the font-family property to a value or values like this font-family: Helvetica, sans-serif; In this example Helvetica will try to load first, if Helvetica is not available the computers default sans-serif font will be used.'
  },{
    multipleAnswers: false,
    question: "How is an elements height determined by default?",
    choice1: 'Elements are always 100px in height by default.',
    choice2: 'Elements inherit the height of their parent.',
    choice3: 'Elements will get their height based on content by default.',
    choice4: 'Elements will not have a height unless it is defined by CSS.',
    answer: 'Elements will get their height based on content by default.',
    answerExplained: 'By default elements will get their height based on their content.'
  },{
    multipleAnswers: false,
    question: "When building a website with only HTML and CSS what document does the site start with?",
    choice1: 'start.html',
    choice2: 'home.html',
    choice3: 'about.html',
    choice4: 'index.html',
    answer: 'index.html',
    answerExplained: 'A website built with only HTML and CSS needs an index.html file, this is the starting point for the site.'
  },{
    multipleAnswers: false,
    question: "What is the element in which all html code is nested within an html document?",
    choice1: '<html>',
    choice2: '<site>',
    choice3: '<head>',
    choice4: '<body>',
    answer: '<html>',
    answerExplained: 'All HTML code should be nested within opening and closing <html> tags.'
  },{
    multipleAnswers: false,
    question: "What are the two direct children of the <html> element?",
    choice1: '<head> and <body>',
    choice2: '<son> and <daughter>',
    choice3: '<a> and <b>',
    choice4: 'The <html> element has no children.',
    answer: '<head> and <body>',
    answerExplained: '<head> and <body> are the two direct children of an HTML document. The head element contains information about the website while the body element holds all of the html which is display within the webpage.'
  },{
    multipleAnswers: false,
    question: "What attribute and value is used on an <a> tag to make the link open in a new tab within the browser?",
    choice1: 'open=“new”',
    choice2: 'href=“tab”',
    choice3: 'tab=“true”',
    choice4: 'target=“_blank”',
    answer: 'target=“_blank”',
    answerExplained: 'The attribute and value given to <a> tags for them to display the link in a new tab is target=“_blank”, <a href=“http://kurtpetrek.com” target=“_blank”>Kurt Petrek</a>'
  },{
    multipleAnswers: false,
    question: "Absolute links are links that connect to a file within the same website such as <a href=“about.html”>about</a>.",
    choice1: 'True',
    choice2: 'False',
    choice3: '',
    choice4: '',
    answer: 'False',
    answerExplained: 'False, absolute links are links that point to an exact URL generally outside of the current website, <a href=“http://google.com”>google</a>, relative links point to file within the website using a relative file path, <a href=“about.html”>about</a>.'
  },{
    multipleAnswers: false,
    question: "Giving an element the CSS declaration padding: 10px 5px; would…",
    choice1: 'Apply 10px of padding on the top and bottom and 5px of padding on the left and right.',
    choice2: 'Apply 10px of padding on the left and right and 5px of padding on the top and bottom.',
    choice3: 'Not work, the padding property can only accept one value.',
    choice4: 'Not work, padding cannot be measured in pixels.',
    answer: 'Apply 10px of padding on the top and bottom and 5px of padding on the left and right.',
    answerExplained: 'When giving the padding property two values the first value applies to the top and bottom the second value applies to the left and right, so padding: 10px 5px; would apply 10px of padding on the top and bottom and 5px of padding on the left and right.'
  },{
    multipleAnswers: false,
    question: "Which example shows an element with two classes assigned to it?",
    choice1: '<div class=“container” class=“center-text”></div>',
    choice2: '<div class=container center-text></div>',
    choice3: '<div class=“container center-text”></div>',
    choice4: 'An element cannot be given more than one class.',
    answer: '<div class=“container center-text”></div>',
    answerExplained: '<div class=“container center-text”></div> is the proper html syntax to assign multiple classes to a div element. The class names are separated with a space and must be in quotes.'
  },{
    multipleAnswers: false,
    question: "The CSS statement p:nth-child(2){ font-size: 20px } on a CSS document linked to an HTML document would do what?",
    choice1: 'Set the font size of the second paragraph in the document to 20px.',
    choice2: 'Set the font size of all paragraphs that are the second child of their parent to 20px.',
    choice3: 'Set the font size of all paragraphs that are the third child of their parent to 20px.',
    choice4: 'Nothing, p:nth-child(2) is not a valid CSS selector.',
    answer: 'Set the font size of all paragraphs that are the second child of their parent to 20px.',
    answerExplained: 'The CSS statement p:nth-child(2){ font-size: 20px } would set the font size of all paragraphs that are the second child of their parent to 20px.'
  },{
    multipleAnswers: false,
    question: "Which of the following are not a valid border-style value?",
    choice1: 'dashed',
    choice2: 'double',
    choice3: 'groove',
    choice4: 'standard',
    answer: 'standard',
    answerExplained: 'Standard is not a valid value for a CSS border-style property but these are: none, hidden, dotted, dashed, solid, double, groove, ridge, inset, outset, initial, and inherit.'
  }];

  export default questions;
