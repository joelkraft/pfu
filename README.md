# Simple AWS Uploader

This is a Mac/UNIX simple script to zip and upload your current working directory to an AWS S3 bucket.

For example, if you're in a directory called `myDir`, and your AWS folder (see step 1 below) is `my/cloud/folder`, the contents of `myDir` will be zipped and placed at `s3://my/cloud/folder/myDir.zip`.

## Setup
* You must have [AWS command line tools](https://aws.amazon.com/cli/) installed.
* You must have Nodejs installed.
* You should have a file `~/.aws/credentials` with your credentials listed, like so:

```
[default]
aws_access_key_id = <YOUR_ID>
aws_secret_access_key = <YOUR_KEY>

```
Note: this script does not work with profiles.

1. Open `index.js` and add the s3 folder you want to upload to between the single quotes on line 6.
* You can either write `node <path/to/index.js>` or rename `index.js` and put it in `/usr/bin/local`. I call it `pfu` (project file upload). To do that:

```
cp index.js /usr/local/bin/pfu
```

Then you can just type `pfu` in any directory to zip it and put it in s3.