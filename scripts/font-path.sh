#!/bin/sh

branch=$CF_PAGES_BRANCH

echo $branch;

if [ "$branch" = "master" ]
then
   sed -i 's/build\/assets\/fa\/webfonts/https:\/\/web-component.marcopollacci.it\/assets\/fa\/webfonts/' src/components/mp-font-awesome/mp-font-awesome.scss
else
   sed -i 's/build\/assets\/fa\/webfonts/https:\/\/develop.mp-web-component.pages.dev\/assets\/fa\/webfonts/' src/components/mp-font-awesome/mp-font-awesome.scss
fi





