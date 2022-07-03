
## DropUrData

This project is build using laravel mix, to integrate laravel ui with React.

For run database seeding and migration for this project.

- First Run the migration files using command 
##### `php artisan migrate`

- Then seed the config data to settings table using command
##### `php artisan db:seed`        

- For run this project.
##### `php artisan serve`
- install node modules
##### `npm install`
-- run npm by using.
##### `npm run watch` or `npm run build`


### Features implemented

- User can upload files (html, xml,docx,video,image, audio)
- User can view these files.
- User can delete files from storage & db.
- User can edit file details entered at the time of uploading. (keywords, description and title)
- User can config file types and Max Size of file, they want to upload.

## Pending Features

- Pagination for the data table
- XSL for the xml, that given for test.
