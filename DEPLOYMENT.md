# AWS Deployment Guide for Sammi Portfolio

This guide will walk you through deploying the Sammi Portfolio website to AWS using S3, CloudFront, and GitHub Actions.

## Prerequisites

- AWS Account with appropriate permissions
- Domain name (optional but recommended)
- SSL certificate in AWS Certificate Manager (ACM)
- AWS CLI configured locally

## Step 1: Infrastructure Setup

### Option A: Using CloudFormation (Recommended)

1. **Deploy the CloudFormation stack:**
   ```bash
   aws cloudformation create-stack \
     --stack-name sammi-portfolio \
     --template-body file://aws-infrastructure.yml \
     --parameters ParameterKey=DomainName,ParameterValue=your-domain.com \
     --capabilities CAPABILITY_NAMED_IAM
   ```

2. **Wait for stack completion:**
   ```bash
   aws cloudformation wait stack-create-complete --stack-name sammi-portfolio
   ```

3. **Get stack outputs:**
   ```bash
   aws cloudformation describe-stacks --stack-name sammi-portfolio --query 'Stacks[0].Outputs'
   ```

### Option B: Manual Setup

1. **Create S3 Bucket:**
   - Bucket name: `your-domain.com`
   - Region: `ap-southeast-2`
   - Enable static website hosting
   - Set bucket policy for public read access

2. **Create CloudFront Distribution:**
   - Origin: S3 bucket
   - Default root object: `index.html`
   - Enable HTTPS
   - Set custom error responses for SPA routing

## Step 2: Environment Configuration

### Create `.env.production` file:
```bash
# AWS Configuration
AWS_REGION=ap-southeast-2
S3_BUCKET=your-domain.com
CLOUDFRONT_DISTRIBUTION_ID=your-distribution-id

# Application Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Update `deploy.sh`:
```bash
# Edit deploy.sh and update these variables:
BUCKET_NAME="your-s3-bucket-name"
REGION="ap-southeast-2"
DISTRIBUTION_ID="your-cloudfront-distribution-id"
```

## Step 3: GitHub Secrets Setup

Add these secrets to your GitHub repository:

1. Go to `Settings` → `Secrets and variables` → `Actions`
2. Add the following secrets:
   - `AWS_ACCESS_KEY_ID`: Your AWS access key
   - `AWS_SECRET_ACCESS_KEY`: Your AWS secret key
   - `S3_BUCKET`: Your S3 bucket name
   - `CLOUDFRONT_DISTRIBUTION_ID`: Your CloudFront distribution ID

## Step 4: Local Deployment

### Install AWS CLI and configure:
```bash
# Install AWS CLI
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install

# Configure AWS credentials
aws configure
```

### Deploy manually:
```bash
# Make deploy script executable
chmod +x deploy.sh

# Run deployment
./deploy.sh
```

## Step 5: Automated Deployment

The GitHub Actions workflow will automatically deploy when you push to the main branch.

### Manual trigger:
1. Go to `Actions` tab in GitHub
2. Select `Deploy to AWS` workflow
3. Click `Run workflow`
4. Select branch and click `Run workflow`

## Step 6: Domain Configuration

### Update DNS records:
1. **A Record:** Point to CloudFront distribution
2. **CNAME Record:** Point to CloudFront domain
3. **Wait for propagation** (can take up to 48 hours)

### SSL Certificate:
1. Request certificate in ACM for your domain
2. Validate via DNS or email
3. Attach to CloudFront distribution

## Step 7: Testing

### Verify deployment:
1. Check S3 bucket contents
2. Test CloudFront distribution
3. Verify HTTPS redirects
4. Test SPA routing (404 → index.html)

### Performance testing:
1. Use PageSpeed Insights
2. Check CloudFront metrics
3. Monitor S3 access logs

## Troubleshooting

### Common issues:

1. **Build fails:**
   - Check Node.js version (18+)
   - Verify all dependencies are installed
   - Check for TypeScript errors

2. **Deployment fails:**
   - Verify AWS credentials
   - Check S3 bucket permissions
   - Ensure CloudFront distribution exists

3. **Website not loading:**
   - Check S3 bucket policy
   - Verify CloudFront origin settings
   - Check DNS propagation

### Useful commands:

```bash
# Check S3 bucket contents
aws s3 ls s3://your-bucket-name

# List CloudFront distributions
aws cloudfront list-distributions

# Check CloudFormation stack status
aws cloudformation describe-stacks --stack-name sammi-portfolio

# View CloudFront logs
aws logs describe-log-groups
```

## Security Considerations

1. **IAM Permissions:** Use least privilege principle
2. **S3 Bucket Policy:** Restrict access appropriately
3. **CloudFront Security:** Enable security headers
4. **HTTPS Only:** Redirect all HTTP to HTTPS
5. **CORS Configuration:** Restrict origins if needed

## Cost Optimization

1. **S3 Storage:** Use lifecycle policies for old versions
2. **CloudFront:** Monitor data transfer costs
3. **ACM:** Certificates are free
4. **Monitoring:** Set up CloudWatch alarms

## Support

For issues or questions:
1. Check AWS documentation
2. Review CloudFormation template
3. Check GitHub Actions logs
4. Verify environment variables

## Next Steps

After successful deployment:
1. Set up monitoring and alerts
2. Configure backup strategies
3. Implement CI/CD pipeline
4. Set up staging environment
5. Configure custom domain and SSL

