# Manual Deploy (AWS S3 + CloudFront + OAC + SSO)

## Prereqs (one-time)
- CloudFront origin uses S3 **REST** endpoint (not website).
- Origin Access Control (OAC) attached to the origin.
- S3 bucket policy allows CloudFront distribution SourceArn to `s3:GetObject`:
  ```json
  { "Version":"2012-10-17", "Statement":[
    { "Effect":"Allow", "Principal":{"Service":"cloudfront.amazonaws.com"},
      "Action":["s3:GetObject"], "Resource":"arn:aws:s3:::sammi-portfolio-website/*",
      "Condition":{"StringEquals":{"AWS:SourceArn":"arn:aws:cloudfront::533267443334:distribution/E9IO5MUWI86HP"}}}
  ]}
  ```

Route 53 A/AAAA alias → distribution; ACM (us-east-1) covers your domain.

## Deploy
```bash
aws sso login --profile SammiDeployer-533267443334
npm run deploy:manual
```

## Verify
```bash
# CF domain
curl -I https://$(aws cloudfront get-distribution --id E9IO5MUWI86HP --query Distribution.DomainName --output text)
# Custom domain
curl -I https://sammicarr.com
```

If you see 403 from S3 via CloudFront, re-check OAC is attached and the bucket policy is present.
