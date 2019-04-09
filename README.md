# cognos-ext-template
Template for clean Cognos Extension development

##Usage:

- pull the code:

    git clone https://github.com/CognosExt/cognos-ext-template.git

- remove the .git folder

    rm -rf .git

- replace the code in the src folder with your extension (or use that code as the basis for your new extension)

- run the following commands:

    npm install
    npm install -g grunt

- copy the SettingsTemplate.json file to Settings.json and edit it according to your environment
- edit the package.json file and change the name of the project and other settings you do not like.
- run

    grunt


Your extension will be copied to the dist folder, zipped and uploaded to your server. Once you hear the beep, you are ready to refresh your page and see your work. Also works for themes.
