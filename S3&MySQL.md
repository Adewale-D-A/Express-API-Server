# How to initiate an S3 Bucket to store files

1.  Visit AWS Console and click on S3 to Create a Bucket
2.  Add the following policies in S3 Bucket permission tab

    > `Bucket Policy :` {
    >
    > > "Version": "2012-10-17",
    > > "Statement": [
    > >
    > > {
    > > "Sid": "AddPerm",
    > > "Effect": "Allow",
    > > "Principal": "_",
    > > "Action": "s3:_",
    > > "Resource": "arn:aws:s3:::node-server-bucket/\*"
    > > }
    > > ]
    > > }

    > > `Cross-origin resource sharing (CORS) :` [
    > > {
    > > "AllowedHeaders": [
    > >
    > > > > "\*"
    > > > > ],
    > > > > "AllowedMethods": [
    > >
    > > > > "PUT",
    > > > > "POST",
    > > > > "DELETE",
    > > > > "GET"
    > > > > ],
    > > > > "AllowedOrigins": [
    > > > >
    > > > > > > "\_"
    > > > > > > ],
    > > > > > > "ExposeHeaders": []
    > > > > > > }
    > > > > > > ]

# How to initiate an mysql for DB

1. Visit console or CLI to create DB
2. On VPC Security tab on mysql DB tab and add inbound rule to include All trafic(0.0.0.0/00)
