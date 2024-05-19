### Developing Locally
npx @11ty/eleventy --serve

### Deploy Changes
```
rm -rf docs 
npx @11ty/eleventy --output=docs
git add -a
git commit -m "COMMIT_MESSAGE"
git push origin main
```