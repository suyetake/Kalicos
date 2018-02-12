# Deployment Strategy

### Current tools
- MongoDB Atlas: I use the service as it uses the same AWS infustructure, but presents an easier configuration
- AWS Beanstalk: a managed service for deploying apps, in this case a docker image
  - So this means you will want to an account with Amazon Web Services(AWS)
- dockerhub: like github, but for hosting docker images. [dockerhub](https://hub.docker.com)

install docker on your machine
- [mac](https://docs.docker.com/docker-for-mac/install/)
- [windows](https://docs.docker.com/docker-for-windows/install/)
- [linux(ubuntu)](https://docs.docker.com/engine/installation/linux/docker-ce/ubuntu/)

once that is accomplished, create an account on [dockerhub](https://hub.docker.com)
then: `docker login`

this will allow you to push your local images to dockerhub, which from there we will pull from AWS beanstalk.


### Current build process
I would create a directory which will house the configuration files that you will use for deployment.
- `mkdir -p ~/AwsDocker/Kalicos/.ebextensions`
- `cd ~/AwsDocker/Kalicos/`
- `touch Dockerrun.aws.json` This is the main config file that will tell AWS Beanstalk where the image is, what port it will expose, and where to find the log files
- `touch .ebextensions/.config` This file is required to export the necessary environment variables to the running docker container.

The `Dockerrun.aws.json` file will look something like this:
```json
{
  "AWSEBDockerrunVersion": 1,
  "Image": {
    "Name": "<organizationName>/kalicos.server",
    "Update": "true"
  },
  "Ports": [
    {
      "ContainerPort": "8080"
    }
  ],
  "Logging": "/usr/src/app"
}
```

`.ebextensions/.config` file will look something like this
```yaml
option_settings:
  - option_name: NODE_ENV
    value: production
  - option_name: Port
    value: 8080
  ...(the rest of your production keys you want to export to Beanstalk)
```

From here, I recommend also creating a few shell scripts for testing and generating assets
*First:* `touch ~/AwsDocker/Kalicos/build.sh`
```bash
docker build -t kalicos.server /location/to/Kalicos/server/
```
which you can call using: `sh ~/AwsDocker/Kalicos/build.sh`, or `sh build.sh` if you are in the directory.
This will generate the image you will eventually push to dockerhub

*Second:* `touch ~/AwsDocker/Kalicos/zip-build.sh`
```bash
zip -r kalicos-deploy.zip Dockerrun.aws.json .ebextensions
```
When you are on the Aws Beanstalk console, and ready to upload the deployment file, `kalicos-deploy.zip` is what you want to choose.

*Third:* `touch ~/AwsDocker/Kalicos/run-local.sh`
```bash
docker run -d -p 4000:8080 \
       -e NODE_ENV=production \
       -e PORT=8080 \
       ... \
       kalicos.server
```
This is how you might run the image on your local environment as if it were production, this is useful to ensure everything you will push up to dockerhub works as expected

### deployment operation
- `cd ~/AwsDocker/Kalicos`
- `sh build.sh`
- `sh run-local.sh` you can check to see the image works as expected on `localhost:4000`
- `sh zip-build.sh` only if you changed anything about your configuration
- `docker tag kalicos.server <organizationName>/kalicos.server` in my case `ccodrington/kalicos.server`
- `docker push <organizationName>/kalicos.server`
- AWS Beanstalk console: create docker application if you haven't already, and in the deploy section, upload kalicos-deploy.zip
  - if you have done this already, and none of the configuration has changed, it should update to new image when you push to dockerhub
