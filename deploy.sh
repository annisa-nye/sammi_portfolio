#!/bin/bash

# AWS Deployment Script for Sammi Portfolio
# This script builds and deploys the Next.js app to AWS S3 + CloudFront

set -e

# Configuration
BUCKET_NAME="your-s3-bucket-name"
REGION="ap-southeast-2"
DISTRIBUTION_ID="your-cloudfront-distribution-id"

echo "🚀 Starting deployment to AWS..."

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --production

# Build the application
echo "🔨 Building application..."
npm run build

# Sync to S3
echo "📤 Syncing to S3 bucket: $BUCKET_NAME"
aws s3 sync out/ s3://$BUCKET_NAME --delete --region $REGION

# Invalidate CloudFront cache
if [ ! -z "$DISTRIBUTION_ID" ]; then
    echo "🔄 Invalidating CloudFront cache..."
    aws cloudfront create-invalidation \
        --distribution-id $DISTRIBUTION_ID \
        --paths "/*" \
        --region $REGION
fi

echo "✅ Deployment completed successfully!"
echo "🌐 Your site should be available at: https://your-domain.com"

