# EDC 2018 - API Workshop

Link to slides: https://oyron.github.io/edc-api

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


From project root:
```
docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli generate \
    -i /local/static/openapi.yaml \
    -g html \
    -o /local/static
```

## Azure deployment


## API Management
