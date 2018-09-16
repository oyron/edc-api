# EDC 2018 - API Workshop

Link to slides: https://oyron.github.io/edc-api-slides/

## Prerequisites
- Clone GitHub repo
- Install Node.js
  - Via package manager: https://nodejs.org/en/download/package-manager/
  - Download: https://nodejs.org/en/download/
- Install `nodemon`: https://nodemon.io/
- Install Postman: 


## Swagger Editor
https://editor.swagger.io/

Docker: `docker run -p 8080:8080 --name swagger-editor swaggerapi/swagger-editor`

## Generate documentation


https://github.com/openapitools/openapi-generator#33---online-openapi-generator


From src directory:
```
docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli generate \
    -i /local/static/openapi.yaml \
    -g html \
    -o /local/static
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


