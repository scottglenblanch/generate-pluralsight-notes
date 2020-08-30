# Generate PluralSight Notes Scaffold

## Dependencies

- Node
- Pluralsight Subscription
- Browser that can run Javascript Snippet

## Source Files
There are 2 Source files 
- [build-notes.js](./src/build-notes.js)
    - used to build out directory and file structure
    - uses string passed in as parameter
    - string passed in must parse to JSON schema...
    ```
    - Array
        - Object
            - moduleTitle: String,
            - subModuleTitlesList: Array
                - String
    ```
- [get-curriculum-as-json-string.js](./src/get-curriculum-as-json-string.js)


## Steps to Use

1) Go to pluralsight tutorial (site with actual video running)
2) Run `get-curriculum-as-json-string.js` as a snippet
3) Copy the output in the console.
    - output will be a JSON array that has been `stringified`
4) Open terminal
5) Go to directory where you want the notes at
    ```
    cd <desired directory>
    ```
6) Run `build-notes.js` 
    - in directory you want the notes to appear
    - with the copied output from step `3` as the parameter
    ```
    <path to build-notes.js directory>/build-notes.js <copied string>
    ``` 
    - examples
        - via `bash` on `macOS`
        ```
        <path to build-notes.js directory>/build-notes.js $(pbpaste)
        ```
        - via `bash` by getting string that you saved in a file
        ```
        <path to build-notes.js directory>/build-notes.js "$(cat file-with-copied-output-saved-in-file.json)"
        ```
      
