# API Workshop - EDC 2018

The workshop has 4 parts:
1. Intro to REST API development, using Node.js
2. Intro to API specification with Swagger
3. API deployment in Azure, with Azure Web Apps
4. Deploying the API to Azure API Management

Link to slides: https://oyron.github.io/edc-api-slides/

## Prerequisites

- Node.js installed
    - [Via package manager](https://nodejs.org/en/download/package-manager)
    - [Download](https://nodejs.org/en/download/)
- [Postman](https://www.getpostman.com/) Installed
- [Data Platform Developer](https://accessit.statoil.no/Search/Search?term=data+platform+developer) role in AccessIT

## Getting started
See [getting started info](https://github.com/oyron/edc-api/blob/master/gettingStarted.md).

## Part 1

### Create the Library API

Use branch `part1`. Run the server: `nodemon server.js`.
Make sure the server is running by accessing http://localhost:3000

**The Library API**

The API should support the operations listed below. The API should use JSON as data format. 
Operations taking id as input parameter should return a client error status code (4xx) with a message if the id does not exist. 
Other types of input validation is not required. 
- **Get all books.** Return a list of books. *Already implemented.*
- **Get an existing book (by id).** Return the requested book.
- **Add a new book.** Return the created book.
- **Update an existing book (by id).** Return the updated book.
- **Delete a book (by id).** Return nothing.

Use Postman for testing. Import the collection file in the `postman` folder into Postman. 

**Relevant HTTP methods:**
- GET
- POST
- PUT
- DELETE

**Relevant HTTP status codes:**
- 200 OK
- 201 Created (should include Location response header)
- 204 No content
- 400 Bad request
- 404 Not found
- 500 Internal Server Error

For more details, see: https://restfulapi.net/http-status-codes/


## Part 2

### Document the Library API with Swagger

Use https://editor.swagger.io/<br>
Or run locally using Docker: `docker run -p 8080:8080 --name swagger-editor swaggerapi/swagger-editor`

Either keep working on branch `part1` and only load the Swagger skeleton file from branch `part2`, by 
running: `git checkout origin/part2 -- src/oas/swagger.yaml`, or replace your work from part 1 and load a complete API and Swagger skeleton, by switching to branch `part2`. 

- Open the skeleton Swagger file `src/oas/swagger.yaml` in the editor.
- Add the missing endpoints to the Swagger file. Make sure the yaml is valid.
- Test running the endpoints from the Swagger editor.

Swagger specification: https://swagger.io/specification/v2/

### Part 2B - Generate documentation

**From Swagger Editor**

Select Generate Client -> html2. Unzip and place in folder `src/static/api-docs`

Browse the generated documentation.

**(Optional) With Docker, Using [OpenAPI Generator](https://github.com/openapitools/openapi-generator#33---online-openapi-generator)**

Run the following command from the `src` directory:

```
docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli generate \
    -i /local/oas/openapi.yaml \
    -g html \
    -o /local/static/api-docs/openapi-generator
```

## Part 3
### Azure deployment

In this part we will deploy our Library API to Azure.

Continue working on your current branch, or switch to branch `master` to load a completed Swagger file and API.

**Deployment Procedure:**

1. Create Azure Web App using the Azure portal: https://portal.azure.com
  - App name: library-<user name>
  - Subscription: VanDamme
  - Resource Group (Use Existing): APIWorkshop
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

6. Test accessing the API.

7. Check the content of the server log by opening the SSH console in the Azure portal, and viewing `/home/site/wwwroot/src/log/server.log`

## Part 4
### API Management

In this task we will add our API to Azure API Management.  

1. Edit `swagger.yaml` in the Swagger editor and make the URL refer to your newly created service in Azure. 
Also change `scheme` to `https`. Export the file as JSON (APIM currently does not support YAML).

2. Add your API in the [Azure portal](https://portal.azure.com/#@StatoilSRM.onmicrosoft.com/resource/subscriptions/5f59116d-13e1-4d1a-a272-1cea3a54228c/resourceGroups/IntegrationServices/providers/Microsoft.ApiManagement/service/omniadev/apim-apis)
  - Create new API from OpenAPI Specification. Select the `swagger.json` file.
  - Display name: EDC API \<user name\>, e.g. EDC API OYRON
  - Name: edc-api-\<user name\>, e.g. edc-api-oyron
  - API URL Suffix: same as name (edc-api-\<user name\>)
  
3. After creating the API, go to settings, add "EDC API Workshop" as a product

4. Verify that you are able to call the API through APIM by using Postman (make sure you are accessing the APIM Url) 

