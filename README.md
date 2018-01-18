BUILD TEST

# Unit4 Design System

This project is a design system website for Unit4.

## Jekyll installation

Follow installation instruction from [Jekyll official website](https://jekyllrb.com/docs/installation/).

## Development

Install dependencies and run gulp from terminal.

`npm install`

`bower install`

`gulp`

## Administration

### Components status

#### Updating component status table
For adding/editing component in the components table you need to edit `yml` data file located here:
```
_data/component-status.yml
```
Follow instructions in the file.

#### Updating other content elements

For editing rest of the content like descriptions, currenr version etc., go to `pages/component-status.md`

#### Page layout

Component status page is base on template located in `_layouts/component-status.html`.


### Design patterns

Design pattern page setup includes 3 types of steps:
- Markdown
- Image
- Navigation

#### Markdown

##### Creating a markdown file

First step of creating Design pattern page is creating a markdown file according to following steps:
1. Create a folder in `/pages/design-patterns/` with the name of group which pattern belong. If the folder group category is already there just skip it.
2. Under the group folder, create a folder with the name of design pattern. Always use only lower case letters and dashes instead of spaces. Example `/pages/design-patterns/tables/basic-tables/`.
3. Inside that folder create a file called `index.md`.
4. Copy the content from markdown template which is here: `pages/design-patterns/mardkown-template`.

	Choose template:
	- `default.md` - most patterns template, with single pattern inside
	- `variation.md` - double variation design pattern template

##### Markdown variables

Markdown template has been built with a set of following variables.
- `title:` - Title of the design pattern page.
- `layout` - Choose a layout for page, 'design-pattern' for default one and 'design-pattern-variations' for patterns with double variations.
- `category:` - Name of the group which pattern belongs.
- `permalink:` - Path of the page, always according to this pattern `design-patterns/name-of-the-group/design-pattern-title/`.
- `design-pattern-type` - Design pattern type is for distinguish layouts for mobile and desktop design patterns. Available variables: `mobile` and `desktop`.
- `design-pattern-video` - If design pattern has video instead of picture, set this variable to `true`. If not, leave it empty.
Remember to put video file into image folder `images/design-patterns`.
File name should be according to following pattern 'design-pattern-video-title.mp4'. Example: 'design-pattern-video-page-swiping.mp4'.
- `extra-image-1` - If design pattern has some second image, place the name of the file. Example `design-pattern-tabs2.png`. Remember to add image to image folder `images/design-patterns`.
- `extra-video-1` - If design pattern has some second video, place the name of the file. Example `design-pattern-tabs2.mp4/mov`. Remember to add video to image folder `images/design-patterns`.

##### Markdown content

Next step is filling the markdown page with content. Is devided for 4 fields: `what:`, `why:`, `do:`, `dont:`.
You can use markdown inside, but remember to add one space in every new line.

###### Content for double variation pattern

Content in double variation pattern is devided into following fields:
- `what:` - general description of patterns
- `title-varation-1`
- `what-varation-1`
- `why-varation-1`
- `do-varation-1`
- `dont-varation-1`
- `title-varation-2`
- `what-varation-2`
- `why-varation-2`
- `do-varation-2`
- `dont-varation-2`

#### Image or video

In default every design pattern has corresponding image. On website it's displaying automatically. You don't need to define it in markdown.
To put image into design pattern page you need to copy it into folder `images/design-patterns` with the file name according following pattern: `design-pattern-title.png`, where `title` is corresponding title variable but written lowercase with dashes instead of spaces.
Image should have `.png` extension.

##### Video

You can use video instead of image. But you can't use both. To use video you need use variable with 'true' value, like this: `design-pattern-video: true`.
Design pattern page accept two types of video files: `mp4` and `mov`.
Put video into same folder as images `images/design-patterns` with the file name according following pattern: `design-pattern-video-title.mp4` and `design-pattern-video-title.mov` where `title` is corresponding title variable but written lowercase with dashes instead of spaces.

##### Images in double variation pattern

If you are going to use `design-pattern-variations` layout, you will need to add images to variables. There are two variables, each one for each image:
```
extra-image-variation-1: design-pattern-title1.png
extra-image-variation-2: design-pattern-title2.png
```
And of course you need to add those files into same folder `images/design-patterns`.

#### Navigation menu

Last step is to show the design pattern menu element in navigation sidebar. Design patterns navigation is based on data YAML file located here `/data/dp-menu.yml` and it looks like this:
```
design-patterns-menu:
- title: Design patterns
  subfolderitems:
    - page: Navigation
      subsubfolderitems:
       - page: List menu
         url: /design-patterns/navigation/list-menu/
       - page: Navigation bar
         url: /design-patterns/navigation/navigation-bar/
       - page: Tabs
         url: /design-patterns/navigation/tabs/
       - page: Page swiping
         url: /design-patterns/navigation/page-swiping/
       - page: Accordion
         url: /design-patterns/navigation/accordion/
    - page: Forms
      subsubfolderitems:
       - page: Sign in
         url: /design-patterns/forms/sign-in/
       - page: Long forms
         url: /design-patterns/forms/long-forms/
       - page: Search form
         url: /design-patterns/forms/search-form/
```

Create new menu element by following above example and existing elements.

**IMPORTANT YAML RULES**
- Tabs are NOT allowed, use spaces ONLY.
- You MUST indent your properties and lists with 1 or more spaces.

Breaking this rules can cause Jekyll build failure.

## Changelog

### v1.0.1

Updated 03-10-2017

Unit4 Design System website:  
* Fixed Axure Library download button link and file
* Added breadcrumbs for pages in Guidelines and Resources sections
* Fixed dots canvas in front page
* Fixed empty Contents section when there is nothing to show
* Fixed hamburger menu colour behaviour when resizing the window
* Added gulp copy scripts task for faster js development
* Fixed sidebar behaviour when resizing window
* Fixed sidebar logo rendering bug on Firefox
* Fixed size of text area component view box
* Fixed "Download all icons" url link on Icons page
* Changed all absolute links and paths for relative ones

UI Library Hammerite:
* Navigation Bar component updated to latest version
