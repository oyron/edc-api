# API Workshop - EDC 2018

The workshop has 4 parts:
1. Intro to API development, using Node.js
2. Intro to API specification with Swagger
3. API deployment in Azure, with Azure Web app
4. Bonus task: Deploying the API to Azure API Management

Link to slides: https://oyron.github.io/edc-api-slides/

## Prerequisites

- **For ALL parts**
  - GitHub repo cloned
  - [Postman](https://www.getpostman.com/) Installed
- **Intro to API development, using Node.js**
  - Basic understanding of JavaScript
  - Node.js installed
    - [Via package manager](https://nodejs.org/en/download/package-manager)
    - [Download](https://nodejs.org/en/download/)
  - [Nodemon](https://nodemon.io/) installed
- **Intro to API specification with Swagger**
  - No particular prerequisites. Basic understanding of Swagger / OpenAPI spec is an advantage.
- **API deployment in Azure, with Azure Web app**
  - Access to an Azure Resource Group
- **Deploying the API to Azure API Management**
  - Access to Azure API Management


## Part 1

####Create the Library API

Check out branch `part1` by running `git checkout part1`

Run `npm install` from directory `src` to download dependencies.

Run the API skeleton from directory `src`: `nodemon server.js`

Operations:
- **Get an existing book.** Already implemented.
- **Get all books.** Return a list of books.
- **Add a new book.** Return the created book.
- **Update an existing book.** Return the updated book.
- **Delete a book.** Return nothing.

Use Postman for testing. Import the collection file in the `postman` folder into Postman. 

Relevant HTTP status codes:
- 200 OK
- 201 Created
- 204 No content
- 400 Bad request
- 404 Not found

For a complete list, see: https://github.com/oyron/edc-api#edc-2018-API-workshop

## Part 2

####Document the Library API with Swagger

Use https://editor.swagger.io/<br>
Or run locally using Docker: `docker run -p 8080:8080 --name swagger-editor swaggerapi/swagger-editor`

- Open the skeleton Swagger file `src/oas/swagger.yaml` in the editor.
- Add the missing endpoints to the Swagger file. Make sure the yaml is valid.
- Test running the endpoints from the Swagger editor.

### Part 2B - Generate documentation

**With Docker, Using OpenAPI Generator**

Run the following command from the `src` directory:

```
docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli generate \
    -i /local/oas/openapi.yaml \
    -g html \
    -o /local/static/api-docs/openapi-generator
```
[Details about OpenAPI Generator](https://github.com/openapitools/openapi-generator#33---online-openapi-generator)


**From Swagger Editor**

Select Generate Client -> html2. Unzip and place in folder `src/static/api-docs`

Browse the generated documentation.

## Part 3
###Azure deployment

Make sure you have access to a resource group in the VanDamme subscription before you start.

**Procedure:**

1. Create Azure Web App
  - Subscription: VanDamme, NodeJS, Linux Web App
  - Resource Group: <Personal resource group>
  - OS: Linux
  - App Service Plan - Create new:
    - Location: North Europe
    - Pricing Tier: B1 (free)
  - Runtime Stack: Node.js 10.1
  
2. Select deployment options -> Choose source -> Local Git Repository

3. Set Deployment Credentials

4. Add an Azure remote to local Git repo: `git remote add azure <url>`

5. Try accessing the Web App URL. You should get the message: "Your App Service app is up and running"

5. Deploy: `git push azure master`

6. Test accessing the API. Please note that startup after the initial deployment may take a couple of minutes.

## Part 4
####API Management (Bonus task)

Make sure you have access to the API Management Dev Portal


1. Edit `swagger.yaml` in the Swagger editor and make the URL refer to your newly created service in Azure. 
Also change `scheme` to `https`. Export the file as JSON (APIM currently does not support YAML).

2. Add your API in the [Azure portal](https://portal.azure.com/#@StatoilSRM.onmicrosoft.com/resource/subscriptions/5f59116d-13e1-4d1a-a272-1cea3a54228c/resourceGroups/IntegrationServices/providers/Microsoft.ApiManagement/service/omniadev/apim-apis)
  - Create new API from OpenAPI Specification. Select the `swagger.json` file.
  - Display name: EDC API <user name>, e.g. EDC API OYRON
  - Name: edc-api-<user name>, e.g. edc-api-oyron
  - API URL Suffix: same as name (edc-api-<user name>)
  
3. After creating the API, go to settings, add "EDC API Workshop" as a product

4. Verify that you are able to call the API through APIM by using Postman (make sure you are accessing the APIM Url) 

