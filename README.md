# mobilityDCAT-AP Generator Tool

Generate [mobilityDCAT-AP](https://w3id.org/mobilitydcat-ap/) metadata in RDF using a form-based interface. Test and experiment with different metadata to learn how different information are described according to the mobilityDCAT-AP specification.

The form is compliant with the minimum profile of mobilityDCAT-AP.

Visit the webpage at: https://mobilitydcat-ap.github.io/mobilitydcatap-ui/

### Run it locally

Build the image
```sh
docker build -f Dockerfile-build --no-cache -t cefriel/mobilitydcatap-ui .
```

Run the image
```sh
docker run -p 8080:80 cefriel/mobilitydcatap-ui
```

Visit http://localhost:8080.

### Update online

Build the image locally and push the updated files in the `dist` folder using the `publish.sh` script.

The scripts builds the interface using the Docker container, and copies the required files in the `dist` folder running an instance of the container.
