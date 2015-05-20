CD sass
START "vives927 SASS" cmd /k sass --watch .:../project/css
CD ../
START "vives927 Jekyll" cmd /k jekyll serve --watch --config _devconfig.yml