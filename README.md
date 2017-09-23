# Kalicos
A donation mapping app.  Kalicos contains data on lots of nonprofits around the world.
The goal is to help people easily find nonprofits that they would like to contribute to.
[Current Website](http://www.kalico.com/)

### Todo
- Reduce the load time for many data points.

### Deployment

Very basic deployment to s3 using `make deploy-s3`

sign on to your s3 account,
create a new bucket called `kalicos`

toggle webhosting for the bucket and add `index.html` to main
in bucket policy:

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::kalicos/*"
        }
    ]
}
```

Once these steps have been completed, this should work:
`$ make deploy-s3`