---
title: Typography
layout: typography
category: guidelines
permalink: typography/
order: 4

sample-text:
  ABCDE FGHIJ KLMNO PQRST UVWXYZ <br />
  abcde fghij klmno pqrst uvwxyz <br />
  1234567890 !@£$% &*()+ -–—“” ‘’?/

paragraph-text: >
 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dolor justo, molestie nec tortor at, semper molestie ipsum.

header-text: Header

# Hammerite styles

font-size: 16px
line-height: 26px
color: $color-black
color-hex: '#000'

fonts:
  - font: DagnyCompPro-Light
    modifier: dagny--light
  - font: DagnyCompPro-Regular
    modifier:
  - font: DagnyCompPro-Bold<br />(for emphasizing text)
    modifier: dagny--bold

headings-intro: >
 The color of the headers is `$color-grey-120` (`#4c5358`), the font weight is Regular.

headings:
  - header: H1
    font-size: 36px
    line-height: 40px
    padding: 18px 0
    usage: Main headers
  - header: H2
    font-size: 30px
    line-height: 36px
    padding: 15px 0
    usage: Secondary headers
  - header: H3
    font-size: 24px
    line-height: 30px
    padding: 12px 0
    usage: Modal window headers
  - header: H4
    font-size: 18px
    line-height: 23px
    padding: 9px 0
    usage:
  - header: H5
    font-size: 16px
    line-height: 21px
    padding: 8px 0
    usage:
  - header: H6
    font-size: 14px
    line-height: 20px
    padding: 7px 0
    usage:

hyperlinks:
  - sample-text: A Hyperlink text
    modifier:
    hover-style: Underlined
    color: $color-blue
    color-hex: '#0d78aa'
  - sample-text: A Hyperlink text
    modifier: is-disabled
    hover-style: Disabled
    color: $color-grey-65
    color-hex: '#a9b1b5'
---

**Dagny Comp Pro** is the standard typeface for the library. We use three different font weights: light, regular and bold. The typeface is required and approved by the R&D team in Norway and is also used in Business World On!.

The default, global font-size and color are 16px and `$color-black`. This is applied to the html body and all paragraphs.
