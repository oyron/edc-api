# API Workshop - EDC 2018

Link to slides: https://oyron.github.io/edc-api-slides/

## Prerequisites
- Clone GitHub repo
- Install Node.js
  - Via package manager: https://nodejs.org/en/download/package-manager/
  - Download: https://nodejs.org/en/download/
- Install `nodemon`: https://nodemon.io/
- Install Postman: 

## Part 1

**Create the Library API**

Operations:
- Get an existing book. Already implemented.
- Get all books. Return an array of books.
- Add a new book. Return the created book.
- Update an existing book. Return the updated book.
- Delete a book. Return nothing.

Postman can be used for testing

Relevant HTTP status codes:
- 200 OK
- 201 Created
- 204 No content
- 400 Bad request
- 404 Not found

For a complete list, see: https://github.com/oyron/edc-api#edc-2018-API-workshop

## Swagger Editor
https://editor.swagger.io/

Docker: `docker run -p 8080:8080 --name swagger-editor swaggerapi/swagger-editor`

## Generate documentation


https://github.com/openapitools/openapi-generator#33---online-openapi-generator


From src directory:
```
docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli generate \
    -i /local/oas/openapi.yaml \
    -g html \
    -o /local/static/api-docs/openapi-generator
```

## Azure deployment

```
1. Create Web App
  - Subscription: VanDammeNodeJS, Linuz Web App
  - Resource Group: <Personal resource group>
  - OS: Linux
  - App Service Plan: Create new
    - Location: North Europe
    - Pricing Tier: B1 (free)
  - Runtime Stack: Node.js 10.1
  
2. Select deployment options -> Choose source -> Local Git Repository

3. Set Deployment Credentials

4. Add an Azure remote to local Git repo: `git remote add azure <url>`

5. Deploy: `git push azure master`
```

## API Management


