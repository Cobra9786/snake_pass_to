# NEW BUILD COMMAND TO SEPERATE DIFFERENT DOMAINS
npx nuxi build

# RENAME .output to output_datasnake
mv .output .output_datasnake

# FINAL STEP : DEPLOY TO CLOUDFLARE
 wrangler publish --config wrangler.toml


 # DEV SECTION
 npx nuxi build
 ## to run locally 
 npx nuxi dev 
 # or 
 wrangler dev