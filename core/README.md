# Angular2 KeyDepot Core (with angular cli)



# Clone the repo

```bash
cd core
npm install
typings install

# Compile typescript into dist
tsc

# Copy package into dist
cp package.json dist/

# Go into dist to create a globally-installed symbolic link
cd dist

# npm link
# npm link does not work... so we use pack (temporarly)
npm pack
# Or npm publish

# Note: during dev, you can use 'tsc -w'
```
