export default `
# Welcome to MDitor ![Imgur](https://i.imgur.com/tT0v9n3.png)
![Generic badge](https://img.shields.io/badge/MDitor-v0.8.0-blue.svg) 
[![GitHub forks](https://img.shields.io/github/forks/VGamezz19/MDitor.svg?style=social&logo=github&label=Fork)](https://github.com/VGamezz19/MDitor)

Hey! there is a [MarkDown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) 
Editor to do you'r  crazy notes! but **take care** this is just a \` alpha \` and probably you will found some bugs, but we are going to work
 to get better MDitor 😁 

### Support

| Spect | ![Generic badge](https://img.shields.io/badge/build-passing-brightgreen.svg)   /   ![Generic badge](https://img.shields.io/badge/build-failure-red.svg) |
|:----|----:|
| **Bold**| ![Generic badge](https://img.shields.io/badge/build-passing-brightgreen.svg) |
| *Italic*| ![Generic badge](https://img.shields.io/badge/build-passing-brightgreen.svg) |
| \`Block\`| ![Generic badge](https://img.shields.io/badge/build-passing-brightgreen.svg) |
| Heading <h1> - <H6> | ![Generic badge](https://img.shields.io/badge/build-passing-brightgreen.svg) |
| <hr>| ︎![Generic badge](https://img.shields.io/badge/build-passing-brightgreen.svg) |
| blockquote | ![Generic badge](https://img.shields.io/badge/build-passing-brightgreen.svg) |
| list| ![Generic badge](https://img.shields.io/badge/build-passing-brightgreen.svg) |
| [Ancors](www.google.com)| ![Generic badge](https://img.shields.io/badge/build-passing-brightgreen.svg) |
| IMG  | ![Generic badge](https://img.shields.io/badge/build-passing-brightgreen.svg) |
| Table  | ![Generic badge](https://img.shields.io/badge/build-passing-brightgreen.svg) |
| Code | ![Generic badge](https://img.shields.io/badge/build-passing-brightgreen.svg) |
| Color lenguaje-code | ![Generic badge](https://img.shields.io/badge/build-failure-red.svg) |

### Helpers

Hey! if you doesn't know how to write in MarkDown, **be calm**! we provide you some examples! take easy and pay attention 📝

## Headers

\`\`\`no-highlight
# H1
## H2
### H3
#### H4
##### H5
###### H6

Alternatively, for H1 and H2, an underline-ish style:

Alt-H1
======

Alt-H2
------
\`\`\`

# H1
## H2
### H3
#### H4
##### H5
###### H6

Alternatively, for H1 and H2, an underline-ish style:

Alt-H1
======

Alt-H2
------

<a name="emphasis"/>

## Emphasis

\`\`\`no-highlight
Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~
\`\`\`

Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~


<a name="lists"/>

## Lists

(In this example, leading and trailing spaces are shown with with dots: ⋅)

\`\`\`no-highlight
1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item.

⋅⋅⋅You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

⋅⋅⋅To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅
⋅⋅⋅Note that this line is separate, but within the same paragraph.⋅⋅
⋅⋅⋅(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

* Unordered list can use asterisks
- Or minuses
+ Or pluses
\`\`\`

1. First ordered list item
2. Another item
 * Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
 1. Ordered sub-list
4. And another item.

   You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

   To have a line break without a paragraph, you will need to use two trailing spaces.  
   Note that this line is separate, but within the same paragraph.  
   (This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

* Unordered list can use asterisks
- Or minuses
+ Or pluses

<a name="links"/>

## Links

There are two ways to create links.

\`\`\`no-highlight
[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links. 
http://www.example.com or <http://www.example.com> and sometimes 
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com
\`\`\`

[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links. 
http://www.example.com or <http://www.example.com> and sometimes 
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com

<a name="images"/>

## Images

\`\`\`no-highlight
Here's our logo (hover to see the title text):

Inline-style: 
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style: 
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"
\`\`\`

Here's our logo (hover to see the title text):

Inline-style: 
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style: 
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

<a name="code"/>

## Code and Syntax Highlighting

Code blocks are part of the Markdown spec, but syntax highlighting isn't. However, many renderers -- like Github's and *Markdown Here* -- support syntax highlighting. Which languages are supported and how those language names should be written will vary from renderer to renderer. *Markdown Here* supports highlighting for dozens of languages (and not-really-languages, like diffs and HTTP headers); to see the complete list, and how to write the language names, see the [highlight.js demo page](http://softwaremaniacs.org/media/soft/highlight/test.html).

\`\`\`no-highlight
Inline \`code\` has \`back-ticks around\` it.
\`\`\`

Inline \`code\` has \`back-ticks around\` it.

Blocks of code are either fenced by lines with three back-ticks <code>\`\`\`</code>, or are indented with four spaces. I recommend only using the fenced code blocks -- they're easier and only they support syntax highlighting.

<pre lang="no-highlight"><code>\`\`\`javascript
var s = "JavaScript syntax highlighting";
alert(s);
\`\`\`
 
\`\`\`python
s = "Python syntax highlighting"
print s
\`\`\`
 
\`\`\`
No language indicated, so no syntax highlighting. 
But let's throw in a &lt;b&gt;tag&lt;/b&gt;.
\`\`\`
</code></pre>


\`\`\`javascript
var s = "JavaScript syntax highlighting";
alert(s);
\`\`\`

\`\`\`python
s = "Python syntax highlighting"
print s
\`\`\`

\`\`\`
No language indicated, so no syntax highlighting in Markdown Here (varies on Github). 
But let's throw in a <b>tag</b>.
\`\`\`


<a name="tables"/>

## Tables

Tables aren't part of the core Markdown spec, but they are part of GFM and *Markdown Here* supports them. They are an easy way of adding tables to your email -- a task that would otherwise require copy-pasting from another application.

\`\`\`no-highlight
Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the 
raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | \`renders\` | **nicely**
1 | 2 | 3
\`\`\`

Colons can be used to align columns.

| Tables        | Are           | Cool |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell. The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | \`renders\` | **nicely**
1 | 2 | 3

<a name="blockquotes"/>

## Blockquotes

\`\`\`no-highlight
> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote. 
\`\`\`

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote. 

<a name="html"/>

## Inline HTML

You can also use raw HTML in your Markdown, and it'll mostly work pretty well. 

\`\`\`no-highlight
<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>
\`\`\`

<dl>
 <dt>Definition list</dt>
 <dd>Is something people use sometimes.</dd>

 <dt>Markdown in HTML</dt>
 <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

<a name="hr"/>

## Horizontal Rule

\`\`\`
Three or more...

---

Hyphens

***

Asterisks

___

Underscores
\`\`\`

Three or more...

---

Hyphens

***

Asterisks

___

Underscores

### Advance Knowledge

* \`root\` - Root container element that contains the rendered markdown
* \`text\` - Text rendered inside of other elements, such as paragraphs
* \`break\` - Hard-break (\`<br>\`)
* \`paragraph\` - Paragraph (\`<p>\`)
* \`emphasis\` - Emphasis (\`<em>\`)
* \`strong\` - Strong/bold (\`<strong>\`)
* \`thematicBreak\` - Horizontal rule / thematic break (\`<hr>\`)
* \`blockquote\` - Block quote (\`<blockquote>\`)
* \`delete\` - Deleted/strike-through (\`<del>\`)
* \`link\` - Link (\`<a>\`)
* \`image\` - Image (\`<img>\`)
* \`linkReference\` - Link (through a reference) (\`<a>\`)
* \`imageReference\` - Image (through a reference) (\`<img>\`)
* \`table\` - Table (\`<table>\`)
* \`tableHead\` - Table head (\`<thead>\`)
* \`tableBody\` - Table body (\`<tbody>\`)
* \`tableRow\` - Table row (\`<tr>\`)
* \`tableCell\` - Table cell (\`<td>\`/\`<th>\`)
* \`list\` - List (\`<ul>\`/\`<ol>\`)
* \`listItem\` - List item (\`<li>\`)
* \`heading\` - Heading (\`<h1>\`-\`<h6>\`)
* \`inlineCode\` - Inline code (\`<code>\`)
* \`code\` - Block of code (\`<pre><code>\`)
* \`html\` - HTML node (Best-effort rendering)


\`\`\`javascript
console.log("Test Color")
\`\`\`
`