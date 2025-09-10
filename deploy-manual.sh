#!/usr/bin/env bash
set -euo pipefail

# ====== USER VARIABLES (edit if needed) ======
PROFILE="SammiDeployer-533267443334"   # IAM Identity Center (SSO) CLI profile
REGION="ap-southeast-2"
BUCKET="sammi-portfolio-website"
DIST_ID="E9IO5MUWI86HP"
# ============================================

echo "🔐 Checking AWS SSO session for profile: $PROFILE"
if ! AWS_PROFILE="$PROFILE" aws sts get-caller-identity >/dev/null 2>&1; then
  echo "Opening SSO login…"
  AWS_PROFILE="$PROFILE" aws sso login
fi

echo "🛠️ Building Next.js static export…"
npm ci
npm run build
test -d out || { echo "❌ out/ not found after build"; exit 1; }

echo "📤 Syncing to s3://$BUCKET …"
AWS_PROFILE="$PROFILE" AWS_REGION="$REGION" aws s3 sync out/ "s3://$BUCKET" --delete --only-show-errors

echo "🧾 Setting cache headers (HTML no-cache)"
AWS_PROFILE="$PROFILE" AWS_REGION="$REGION" aws s3 cp out/ "s3://$BUCKET" --recursive --exclude "*" --include "*.html" \
  --content-type "text/html; charset=utf-8" \
  --cache-control "no-cache, no-store, must-revalidate" \
  --metadata-directive REPLACE

echo "🧾 Setting cache headers (assets long-cache)"
AWS_PROFILE="$PROFILE" AWS_REGION="$REGION" aws s3 cp out/_next/ "s3://$BUCKET/_next/" --recursive \
  --cache-control "public, max-age=31536000, immutable" \
  --metadata-directive REPLACE || true

echo "🧹 Creating CloudFront invalidation…"
AWS_PROFILE="$PROFILE" aws cloudfront create-invalidation --distribution-id "$DIST_ID" --paths "/*"

CF_DOMAIN=$(AWS_PROFILE="$PROFILE" aws cloudfront get-distribution --id "$DIST_ID" --query "Distribution.DomainName" --output text)
echo "✅ Deployed. Test via CloudFront: https://${CF_DOMAIN}"
echo "If using a custom domain, ensure Route 53 A/AAAA Alias points to this distribution and the ACM cert (us-east-1) covers your domain."
