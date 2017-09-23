

deploy-s3:
	cd client && npm run build
	aws s3 cp client/build/ s3://kalicos/ --recursive
