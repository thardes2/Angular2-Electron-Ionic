# Angular2 Electron KeyDepot (with angular cli)



# Clone the repo

```bash
git clone git@URL:thardes/Core.git
git clone git@URL:thardes/Desktop.git

cd Core
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


```bash
cd ../Core
# angular2 cli required
npm install -g angular-cli


# install
npm install

# Create a symlink from the local node_modules folder to the global shared module symlink
# npm link ngrx-demo-core
# npm link does not work... so we use pack/install (temporarly)
npm install ../Core/dist/core-0.0.1.tgz

# run webpack dev server
npm start

# run karma tests
npm test

# build angular project
--> npm run build

# preview electron (without angular build)
--> npm run electron

# create electron package (build included)
npm run package

```
