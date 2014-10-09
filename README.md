basespace-help
==============

BaseSpace Docs Repo

Conventions
------------

- `_docs` -- all documentation files go here.  
- `_includes` -- all html includes go here.  
- `_layouts` -- all Liquid templates go here.  
- `_less` -- all LESS partials go here.

- `_config.yml` --  

_config.yml
-------------
`_config.yml` stores configuration data. See [HydeTower docs](https://github.com/basespace/SpaceAcademy/blob/master/README.md#hyde-tower).


| Variable					| Description														|
| --------------------- | -----------------------------------------------|
| gitrepo						| URL to the project's GitHub repo. *Used to build the edit on GitHub link.*				|
| gitbranch				| Git branch name. *Used to build the edit on GitHub link.*											|


Naming Conventions
------------------

###File convention

1. File name: File names shall follow the rules below,
  + Only lower case letters can be used.
  + The name of the file should appropriately describe the content of the file. Abbrevations for words are not allowed (Eg. proj for project or dwnld for download, etc.).
  + Hyphens should be used between two consecutuve words.

   Format:    **description-of-file.md**
   
   For Eg: share-run-using-email.md

2. File format: Files shall be stored in *markdown (.md)* format. 

   Following are some of the links that are good sources of reference for understanding the markdown syntax.
   + Github articles [Link1](https://help.github.com/articles/github-flavored-markdown/) and [Link2](https://help.github.com/articles/markdown-basics/).
   + [Daring Fireball](http://daringfireball.net/projects/markdown/syntax).
   + Content writers are also advised to install [MarkdownPad](http://markdownpad.com/)(for WIndows) and [LightPaper](http://www.ashokgelal.com/lightpaper-for-mac/) or [Macdown](http://macdown.uranusjr.com/)(for Mac OS X).

###Image convention

1. Image name: Image names shall be in the following format, 
  + The name should reflect the clear description of the image. Abbrevations for words are not allowed (Eg. proj for project or dwnld for download, etc.).
  + It should contain the image width and height in pixels. 
  + Only lower case letters should be used. Numbers may be included if necessary. 
  + Underscores should be used as separators between *description and size*. Hyphens shall be used to separate multiple words in image names.

   Format:    **description-of-image_widthxheight.png**
   
   For Eg: share-run-using-email-step-1_672x320.png
  
  + Images shall be saved under appropriate folders under the "images" folder of the site. This folder should be a high level category for the image like 'projects' or 'app-store'.
    For Eg: /images/runs/share-run-using-email-step-1_672x320.png
            /images/projects/share-project-using-getlink-step-1_672x320.png

2. Image file format: All static images should be in,
  + *.PNG (Portable Network Graphics)* format. 
  + In case of photos or animated GIFs .JPG or .JPEG and .GIF formats can be used.

3. Image size: The size of the images shall be within the following range (in pixels),

  + Width : between 411px (min) and 767px (max) 
  + Height : between 154px (min) and 485px (max)