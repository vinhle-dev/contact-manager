# Steps to set up local:
1. In frontend_ng folder run command "npm install". 
2. Then, run command "ng server". 
3. Open your browser on http://localhost:4200/
4. Test user: admin/password

# Components:
  * Frame components:
    * Location
      * Info Bar
        * Info bar element
      * Location group
      * Menu actions 
      * Menu tree 
      * Page
        * Popup
        * Screen
      * Tab bar
  * Toolbox components:
    * Card views
      * Card
      * Card panel
    * Detail views
      * Basic inputs
        * Boolean radio button input
        * Text input
      * Common app inputs
        * Password inputs
      * Detail view
      * Formatting inputs
        * Label
      * Input layout
        * Input column
        * Input divider
        * Input footer
        * Input header
        * Input set
      * Links
        * Content input
        * Link
      * Range inputs
        * Typekey input
    * List views
      * Basic Cells
        * Radio button cell
        * Range cell
        * Text cell
      * Link Cells
        * Link cell
      * List view
        * Row and cell layout
          * Row
          * Row Iterator
      * List view input
    * Location groups
      * Location ref
    * Menu
      * Basic menu items
        * Menu item
    * Messages
      * Verbatim Text
    * Panel layout
      * Panel ref
      * Title bar
    * Special panels
      * Search panel
      * List detail panel
    * Tab bar
      * Quick jump
      * Setting
      * Tab
      * Unsaved work
    * Toolbars
      * Toolbar
      * Toolbar buttons
        * Checked value toolbar button
        * Edit buttons
        * Iterator buttons
        * Toolbar button
      * Toolbar divider
      * Toolbar input
        * Toolbar filter
    * Tree views
      * Tree view

# Pain Points:
  * Refactored the list view to enable resizing, row selection, and sorting.

# Issues:
- data reflect out of page event update or cancel. (Handle cancel)
- dropdown automatically increases application window size
- Page parent link disappear after reload

# Todo:
- refactor screen and atomic widgets(editable,edit mode)
- Resolve todo list
- Implement panel ref (Will develop if need it in the future)
- Implement ranger input and multiple select function
- Implement checked value toolbar button function
- Implement toolbar button function
- Implement date input.
- Implement file input for import data page.
- Implement button input for export data page.
- Implement toolbar filter to filter the list view
- Hide the list view checkbox in case it doesn't need to be visible.

# FrontendNg

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
